const { join } = require('path');
const inquirer = require('inquirer');
const { getData } = require('../utils/getData');
const { saveData } = require('../utils/saveData');
const bookListFile = join(__dirname, '/../../bookList.json');

const addBook = async () => {
  const data = getData(bookListFile);

  let answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'bookName',
        message: "What is the book's name?",
      },
      {
        type: 'input',
        name: 'bookAuthor',
        message: "What is the book's author?",
      },
      {
        type: 'list',
        name: 'bookStatus',
        message: "Whats is the book's status?",
        choices: [
          'Waiting',
          'Reading',
          'Readed',
        ],
      },
  ]);

  data.push({
    'name': answers.bookName,
    'author': answers.bookAuthor,
    'status': answers.bookStatus,
  });

  saveData(bookListFile, data);
  listBooks();
}

module.exports = {
  addBook,
}
