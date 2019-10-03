const yargs = require('yargs-parser')

class Parser{
  constructor(dispatcher) {
    this.dispatcher = dispatcher
  }
  parse(data) {
    this.dispatcher.dispatch(yargs(data))
  }
}

module.exports = Parser