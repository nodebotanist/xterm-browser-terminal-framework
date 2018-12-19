const Dispatcher = require('./dispatcher')
const Parser = require('./parser')
const format = require('./format')

function BrowserTerminal (xTermInstance) {
  this.terminal = xTermInstance
  this.dispatcher = new Dispatcher()
  this.parser = new Parser(this.dispatcher)
  this.format = format


  this.currentLine = ''
  this.terminal.prompt = () => {
    this.terminal.write(`${format.newLine()}$ `)
  }
}

BrowserTerminal.prototype.setup= function () {
  this.terminal.write('$ ')

  this.terminal._core.register(this.terminal.addDisposableListener('key', (key, ev) => {
    const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
  
    if (ev.keyCode === 13) {
      if(this.currentLine.length > 0) {
        this.terminal.write(this.parser.parse(this.currentLine))
        this.currentLine =  ''
      }
      this.terminal.prompt()
    } else if (ev.keyCode === 8) {
      // Do not delete the prompt
      if(this.currentLine.length > 0) {
        this.terminal.write('\b \b')
        this.currentLine = this.currentLine.substring(0, this.currentLine.length - 1)
      }
    } else if (printable) {
      this.currentLine = this.currentLine.concat(key)
      this.terminal.write(key)
    }
  }))

  term._core.register(term.addDisposableListener('paste', (data, ev) => {
    term.write(data)
  }))
  
}

module.exports = {
  Terminal: BrowserTerminal
}