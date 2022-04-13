const fs = require('fs');
const chalk = require('chalk');

const saveData = (file, data, message = 'Book saved successfully!') => {
  try {
    fs.writeFileSync(file, JSON.stringify(data));
    console.log(chalk.green(`\n${message}\n`));

  } catch (error) {
    console.log(chalk.red(`\nUnsaved book! Error: ${error.message}\n`));
  }
};

module.exports = {
  saveData,
}
