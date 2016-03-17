# node-env
What env are we in...


## Install

    npm i orangemug/node-env --save


## Usage
JavaScript use

    var env = require("node-env");
    console.log(env);

**NOTE**: The [package.json](/package.json) contains the [envify](https://www.npmjs.com/package/envify) transform so via [browserify](https://www.npmjs.com/package/browserify) it'll just work!

There is also a bin script `node-env` which is useful if you have any shell scripts that kick off your node app.


## License
[MIT](LICENSE)
