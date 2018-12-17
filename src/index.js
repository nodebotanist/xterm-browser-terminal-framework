const Dispatcher = require('./dispatcher')
const Parser = require('./parser')

function BrowserTerminal (xTermInstance) {
  this.terminal = xTermInstance
  this.dispatcher = new Dispatcher()
  this.parser = new Parser()
}
