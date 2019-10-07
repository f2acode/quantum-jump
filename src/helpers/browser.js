"use strict";
exports.__esModule = true;
var shell = require("shelljs");
exports.openBrowser = function (urls) {
    urls.map(function (url) { return shell.exec("google-chrome " + url); });
};
