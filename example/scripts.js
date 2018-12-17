const Terminal = require('xterm').Terminal
const BrowserTerminal = require('../dist/BrowserTerminal')

let term = new Terminal({})
term.open(document.getElementById('#terminal'))