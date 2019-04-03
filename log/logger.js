const fs = require('fs');

const log = (text) => {
    const file = "log/arquivo.txt";
    fs.appendFileSync(file, `${text}\n`);
};

module.exports = {
    log
};