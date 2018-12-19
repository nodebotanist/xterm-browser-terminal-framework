const BrowserTerminal = require('../src/terminal').Terminal

const theme = {
  black: '#040303',
  brightBlack: '#6090cb',
  white: '#fae2cc',
  brightWhite: '#f8f7fc',
  blue: '#0e62d1',
  brightBlue: '#11a7d1',
  green: '#57bb1e',
  brightGreen: '#abfb81',
  cyan: '#81b3a8',
  brightCyan: '#d1faf6',
  magenta: '#7a6fa4',
  brightMagenta: '#ac6e65',
  red: '#cb1c17',
  brightRed: '#ff776d',
  yellow: '#ee8826',
  brightyellow: '#f3ca20',
  background: '#333333',
  foreground: '#fae2cc',
  cursor: '#f3c947'
}

let terminal = new BrowserTerminal({
  theme
})
terminal.open(document.getElementById('#terminal'))
terminal.setup()

terminal.writeln(`${terminal.format.text('blue')}Text color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.background('red')}Background color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.brightBackground('cyan')}Background color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.style('reverse')}Reverse test (switches background and foreground color)${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.brightText('green')}Bright text test${terminal.format.reset('all')}`)

terminal.dispatcher.on("hello", (data) => {
  console.log("hello!", data)
})