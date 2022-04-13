const { join } = require('path');
const shell = require('shelljs');
const chalk = require('chalk');
const bookListFile = join(__dirname, '/../../bookList.json');

const clearBookList = () => {
  try {
    shell.rm('-rf', bookListFile);
    console.log(chalk.green('\nClean book list!\n'));
  } catch (error) {
    console.log(chalk.red(`\nError: ${error.message}\n`));
  }
}

module.exports = {
  clearBookList,
}
