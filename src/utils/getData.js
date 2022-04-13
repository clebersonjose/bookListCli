const fs = require('fs');
const getData = (file) => {
  const data = fs.existsSync(file) ? fs.readFileSync(file) : [];

  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

module.exports = {
  getData,
}
