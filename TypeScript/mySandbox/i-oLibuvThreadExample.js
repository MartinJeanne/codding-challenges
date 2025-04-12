const fs = require('fs/promises');

console.log('Start');
async function readFile() {
  const data = await fs.readFile('Typescript/leetcode/text.txt', 'utf8');
  console.log(data);
}

readFile();
console.log('End');
