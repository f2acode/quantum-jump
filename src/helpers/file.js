"use strict";
exports.__esModule = true;
var shell = require("shelljs");
exports.readConfigFile = function () {
    var DOBBY_CONFIG = shell.env.DOBBY_CONFIG;
    var configFile = require(DOBBY_CONFIG);
    console.log(configFile);
    return configFile;
};
