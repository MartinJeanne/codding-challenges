const fs = require('fs');

console.log('Start');
const data = fs.readFile('leetcode/text.txt', 'utf8');
console.log(data);

console.log('End');
