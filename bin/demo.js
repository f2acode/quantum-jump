#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var file_1 = require("../src/helpers/file");
var config = file_1.readConfigFile();
console.log(config);
