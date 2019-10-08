import * as shell from 'shelljs';

export const readConfigFile = () => {
  const { QUANTUM_JUMP } = shell.env;
  const configFile = require(QUANTUM_JUMP)
  return configFile
};
