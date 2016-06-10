# node-env
What env are we in...

[![circleci](https://circleci.com/gh/orangemug/node-env.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/node-env.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/node-env/dev-status.svg)][dm-dev]

[circleci]:  https://circleci.com/gh/orangemug/node-env
[dm-prod]:   https://david-dm.org/orangemug/node-env
[dm-dev]:    https://david-dm.org/orangemug/node-env#info=devDependencies


## Install

    npm i orangemug/node-env --save


## Usage
Below `env` will be set to `NODE_ENV` or `development` if `NODE_ENV` is `undefined`

    var env = require("node-env");
    console.log(env);


**NOTE**: The [package.json](/package.json) contains the [envify](https://www.npmjs.com/package/envify) transform so via [browserify](https://www.npmjs.com/package/browserify) it'll just work!

There is also a bin script `node-env` which is useful if you have any shell scripts that kick off your node app.


## License
[MIT](LICENSE)
