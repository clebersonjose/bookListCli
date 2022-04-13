const program = require('commander');
const package = require('./package.json');

program.version(package.version);
program.parse();
