const fs = require('fs');
const path = require('path');
const entryPath = path.resolve(__dirname, '../src')

const entries = fs.readdirSync(entryPath).reduce(((resEntries, dirPath) => {
  if (!/icons|lib|^\.|manifest/.test(dirPath)) {
    resEntries[dirPath] = path.resolve(entryPath, dirPath);
  }
  return resEntries;
}), {});

console.log(entries);

module.exports = entries;