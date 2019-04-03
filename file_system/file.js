const fs = require('fs');

const file = "file_system/arquivo.txt";
const text = "Cruzeirão cabuloso";

fs.appendFileSync(file,`${text}\n`);

console.log(fs.readFileSync(file));
