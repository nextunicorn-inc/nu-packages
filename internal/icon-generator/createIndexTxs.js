import fs from 'fs';
import { getSrcDir } from './utils.js';

const fileNames = fs.readdirSync(`${getSrcDir()}/icons`);

const template = (fileName) => {
  const [name] = fileName.split('.');
  return `export { default as ${name} } from './${name}'`;
};

export const runCreateIndexTs = () => {
  fs.writeFileSync(
    `${getSrcDir()}/icons/index.ts`,
    fileNames
      .filter((a) => a !== 'index.ts')
      .map(template)
      .join('\n'),
  );
};
