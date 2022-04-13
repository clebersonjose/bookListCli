#!/usr/bin/env node
const program = require('commander');
const figlet = require('figlet');
const chalk = require('chalk');
const { addBook } = require('./actions/addBook');
const { listBooks } = require('./actions/listBooks');
const { clearBookList } = require('./actions/clearBookList');
const { removeBook } = require('./actions/removeBook');
const package = require('../package.json');

console.log(chalk.cyan(figlet.textSync('Book List CLI')));

program
  .command('add')
  .description('Add a book for the book list')
  .action(() => addBook());

program
  .command('list')
  .description('List registered books')
  .action(() => listBooks());

program
  .command('clear')
  .description('Clear book list')
  .action(() => clearBookList());

program
  .command('remove [bookName]')
  .description('Remove book from list')
  .action((bookName) => removeBook(bookName));

program.version(package.version);
program.parse(process.argv);
