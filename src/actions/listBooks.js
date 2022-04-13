const { join } = require('path');
const Table = require('cli-table');
const chalk = require('chalk');
const { getData } = require('../utils/getData');
const bookListFile = join(__dirname, '/../../bookList.json');

const createBookTable = (books) => {
  let table = new Table({
    head: [
      chalk.white('Name'),
      chalk.white('Author'),
      chalk.white('Status')
    ],
    colWidths: [30, 30, 10],
  })

  books.map((book) => {
    table.push([
      chalk.bold(book.name),
      book.author,
      book.status == 'Waiting'
        ? chalk.yellow(book.status)
        : book.status == 'Reading'
          ? chalk.blue(book.status)
          : chalk.green(book.status)
    ])
  })

  return table.toString();
}

const listBooks = () => {
  const books = getData(bookListFile);
  console.log(createBookTable(books));
}

module.exports = {
  listBooks,
}
