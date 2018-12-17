const yargs = require('yargs-parser')

function Parser(dispatcher) {
  this.dispatcher = dispatcher
}

Parser.prototype.parse = function (data) {
  this.dispatcher.dispatch(yargs(data))
}

module.exports = Parser