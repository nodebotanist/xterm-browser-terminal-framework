const yargs = require('yargs-parser')

function Parser(dispatcher) {
  this.dispatcher = dispatcher
}

Parser.prototype.parse = function (data) {
  console.log(yargs(data))
}

module.exports = Parser