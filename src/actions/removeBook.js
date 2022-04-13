const { join } = require('path');
const { getData } = require('../utils/getData');
const { saveData } = require('../utils/saveData');
const { listBooks } = require('../actions/listBooks');
const bookListFile = join(__dirname, '/../../bookList.json');

const removeBook = (bookName) => {
  let books = getData(bookListFile);
  const bookIndex = books.findIndex(book => book.name === bookName);
  books.splice(bookIndex, 1);

  saveData(bookListFile, books, 'Book removed successfully!');
  listBooks();
}

module.exports = {
  removeBook,
}
