import * as shell from 'shelljs';

export const openJupyter = (urls: String[]) => {
  urls.map(path => shell.exec(`jupyter notebook ${path}`));
};
