const yargs = require('yargs-parser')

function Parser(dispatcher) {
  console.log(yargs('hello -t 1223 --help'))
}

module.exports = Parser