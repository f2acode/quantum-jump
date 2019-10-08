import * as shell from 'shelljs';

export const readConfigFile = () => {
  const { DOBBY_CONFIG } = shell.env;
  const configFile = require(DOBBY_CONFIG)
  return configFile
};
