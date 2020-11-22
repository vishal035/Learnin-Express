const chalk = require('chalk');
const validator = require('validator');
const getNotes = require('./notes');

const msg = getNotes;

console.log(chalk.blue(msg));
console.log(validator.isEmail('test@test.test'));