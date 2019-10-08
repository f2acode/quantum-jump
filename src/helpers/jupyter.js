"use strict";
exports.__esModule = true;
var shell = require("shelljs");
exports.openJupyter = function (urls) {
    urls.map(function (path) { return shell.exec("jupyter notebook " + path); });
};
