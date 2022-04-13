#!/usr/bin/env node
const program = require('commander');
const { addBook } = require('./actions/addBook');
const package = require('../package.json');

program
  .command('add')
  .description('Add a book for the book list')
  .action(() => addBook());

program.version(package.version);
program.parse(process.argv);
