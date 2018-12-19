const util = require('util')
const xterm = require('xterm').Terminal

const Dispatcher = require('./dispatcher')
const Parser = require('./parser')
const format = require('./format')

function BrowserTerminal (args) {
  xterm.call(this, args)
  this.dispatcher = new Dispatcher()
  this.parser = new Parser(this.dispatcher)
  this.format = format

  this._currentLine = ''
  this.prompt = () => {
    this.write(`${format.newLine()}$ `)
  }
}

util.inherits(BrowserTerminal, xterm)

BrowserTerminal.prototype.setup= function () {
  this.write('$ ')

  this._core.register(this.addDisposableListener('key', (key, ev) => {
    const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
  
    if (ev.keyCode === 13) {
      if(this._currentLine.length > 0) {
        this.write(this.parser.parse(this._currentLine))
        this._currentLine =  ''
      }
      this.prompt()
    } else if (ev.keyCode === 8) {
      // Do not delete the prompt
      if(this._currentLine.length > 0) {
        this.write('\b \b')
        this._currentLine = this._currentLine.substring(0, this._currentLine.length - 1)
      }
    } else if (printable) {
      this._currentLine = this._currentLine.concat(key)
      this.write(key)
    }
  }))

  term._core.register(term.addDisposableListener('paste', (data, ev) => {
    term.write(data)
  }))
  
}

module.exports = {
  Terminal: BrowserTerminal
}