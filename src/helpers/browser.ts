import * as shell from 'shelljs';

export const openBrowser = (urls: String[]) => {
  urls.map(url => shell.exec(`google-chrome ${url}`));
};
