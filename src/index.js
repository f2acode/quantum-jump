"use strict";
exports.__esModule = true;
//import { openBrowser } from "./helpers/browser";
var file_1 = require("./helpers/file");
var config = file_1.readConfigFile();
console.log(config.home);
//openBrowser(['gitlab.com', 'reformma.com.br'])
