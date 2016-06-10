var assert     = require("assert");
var browserify = require("browserify");
var vm         = require("vm");


describe("node-env", function() {
  beforeEach(function() {
    process.env.NODE_ENV = "";
    delete require.cache[require.resolve('../')]
  });

  describe("node.js", function() {
    it("should default to development", function() {
      var env = require("../");
      assert.equal(env, "development");
    });

    it("should be set to NODE_ENV", function() {
      process.env.NODE_ENV = "staging";
      var env = require("../");
      assert.equal(env, "staging");
    });
  });

  describe("browserify", function() {
    function browserifyTest(done) {
      var b = browserify();
      b.require(__dirname+"/../", {expose: "env"});

      b.bundle(function(err, buffer) {
        if(err) {
          done(err);
          return;
        }

        var script = new vm.Script(buffer.toString()+"; testOut=require('env')");
        context = new vm.createContext({testOut: null});
        script.runInContext(context);
        done(undefined, context);
      })
    }

    it("should default to development", function(done) {
      browserifyTest(function(err, context) {
        if(err) {
          done(err);
          return;
        }
        assert.equal(context.testOut, "development");
        done();
      });
    });

    it("should be set to NODE_ENV", function(done) {
      process.env.NODE_ENV = "staging";

      browserifyTest(function(err, context) {
        if(err) {
          done(err);
          return;
        }
        assert.equal(context.testOut, "staging");
        done();
      });
    });
  });

});
