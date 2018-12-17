const Terminal = require('xterm').Terminal
const BrowserTerminal = require('../src/terminal').Terminal

let term = new Terminal({})
let terminal = new BrowserTerminal(term)
term.open(document.getElementById('#terminal'))
terminal.setup()

terminal.dispatcher.on("hello", (data) => {
  console.log("hello!", data)
})