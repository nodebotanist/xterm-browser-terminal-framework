const util = require('util')
const xterm = require('xterm').Terminal
const yargs = require('yargs-parser')

const Dispatcher = require('./dispatcher')
const Parser = require('./parser')
const format = require('./format')

function BrowserTerminal(args) {
  xterm.call(this, args)
  this.dispatcher = new Dispatcher()
  this.parser = new Parser(this.dispatcher)
  console.log(this)
  this.format = format

  this._currentLine = ''
  this.prompt = () => {
    this.write(`${format.newLine()}$ `)
  }
}

util.inherits(BrowserTerminal, xterm)

BrowserTerminal.prototype.setup = function () {
  this._core.register(this.onKey((key) => {
    const printable = !key.domEvent.altKey && !key.domEvent.altGraphKey && !key.domEvent.ctrlKey && !key.domEvent.metaKey;

    if (key.domEvent.keyCode === 13) {
      if (this._currentLine.length > 0) {
        this.dispatcher.dispatch(yargs(this._currentLine))
        this._currentLine = ''
      }
      this.prompt()
    } else if (key.domEvent.keyCode === 8) {
      // Do not delete the prompt
      if (this._currentLine.length > 0) {
        this.write('\b \b')
        this._currentLine = this._currentLine.substring(0, this._currentLine.length - 1)
      }
    } else if (key.domEvent.code === "ArrowUp" || key.domEvent.code === "ArrowDown") {
      // do nothing
    } else if (printable) {
      this._currentLine = this._currentLine.concat(key.key)
      this.write(key.key)
    }
  }))

}

module.exports = {
  Terminal: BrowserTerminal
}