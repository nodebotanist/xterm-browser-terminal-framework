const Dispatcher = require('./dispatcher')
const Parser = require('./parser')

function BrowserTerminal (xTermInstance) {
  this.terminal = xTermInstance
  this.dispatcher = new Dispatcher()
  this.parser = new Parser(this.dispatcher)
  this.currentLine = ''
  this.currentLineLength = 0
  this.newLine = '\r\n'
}

BrowserTerminal.prototype.setup= function () {
  this.terminal.prompt = () => {
    this.terminal.write(`${format.newLine()}$ `)
  }

  this.terminal._core.register(this.terminal.addDisposableListener('key', (key, ev) => {
    const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
  
    if (ev.keyCode === 13) {
      this.terminal.write(`${this.newLine}`)
      this.terminal.write(this.parser.parse(this.currentLine))
      this.currentLine =  ''
      this.currentLineLength = 0
      this.terminal.prompt()
    } else if (ev.keyCode === 8) {
      // Do not delete the prompt
      if (this.currentLineLength > 0) {
        this.terminal.write('\b \b')
        this.currentLineLength--
        this.currentLine = this.currentLine.substring(0, this.currentLine.length - 1)
      }
    } else if (printable) {
      this.currentLine = this.currentLine.concat(key)
      this.terminal.write(key)
      this.currentLineLength++
    }
  }))
  
}

module.exports = {
  Terminal: BrowserTerminal
}