// This file is not transpiled.

require('babel-register')();

/**
 * disable webpack feature that mocha doesn't understand
 */
require.extensions['.css'] = function () { };