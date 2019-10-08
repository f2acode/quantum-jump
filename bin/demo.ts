#!/usr/bin/env node

import { readConfigFile } from "../src/helpers/file"

const config = readConfigFile()
console.log(config)