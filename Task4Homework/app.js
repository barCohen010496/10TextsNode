//BAR COHEN AND AVIDAN SALUMI
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text');

let textOut = '';

for (let i = 1; i <= 10; i++) {
  const filePath = path.join(dirPath, `${i}.txt`);
    const textIn = fs.readFileSync(filePath, 'utf-8');
    const lines = textIn.split('\r\n');

    for (let j = 0; j < i && j < lines.length; j++) {
      const words = lines[j].split(' ');
      textOut += words.join(' ') + '\n';
    }
    
}

const outputFilePath = path.join(dirPath, 'output.txt');
fs.writeFileSync(outputFilePath, textOut, 'utf-8');
console.log(`Processed text written to: ${outputFilePath}`);
