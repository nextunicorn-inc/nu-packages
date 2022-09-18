import fs from 'fs';
import { getSrcDir } from './utils.js';
const fileNames = fs.readdirSync(`${getSrcDir()}/icons4`);

const template = (fileName) => {
  const [name] = fileName.split('.');
  return `export { default as ${name} } from './${fileName}'`;
};

fs.writeFileSync(`${getSrcDir()}/icons4/index.ts`, fileNames.map(template).join('\n'));
