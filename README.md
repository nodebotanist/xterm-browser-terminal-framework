# A Browser Terminal framework for Xterm js

I built this so I could build terminals in the browser extensibly. It's a light wrapper around xterm js.

## Installation

```
npm i xterm-browser
```

## Usage

Wherever you set up your xterm js terminal:

```javascript

const Terminal = require('xterm').Terminal
const BrowserTerminal = require('xterm-browser').Terminal

let term = new Terminal({})
let terminal = new BrowserTerminal(term)
term.open(document.getElementById('#terminal'))
terminal.setup() // sets up the parser and event listeners.

```

## Writing to the terminal

Writing text to the terminal is done via xterm's Terminal object (A reference is held in the xterm-browser Terminal instance as .terminal)

```javascript
terminal.terminal.write('I am writing to the terminal')
```

You can also use the Terminal.format utility to change colors and text backgrounds:

```javascript
term.writeln(`${terminal.format.text('blue')}Text color test${terminal.format.reset('all')}`)
term.writeln(`${terminal.format.background('red')}Background color test${terminal.format.reset('all')}`)
term.writeln(`${terminal.format.brightBackground('cyan')}Background color test${terminal.format.reset('all')}`)
term.writeln(`${terminal.format.style('reverse')}Reverse test (switches background and foreground color)${terminal.format.reset('all')}`)
term.writeln(`${terminal.format.brightText('green')}Bright text test${terminal.format.reset('all')}`)
```

NOTE: styles and colors will overlap or override each other without a call to `Terminal.format.reset('all')`.

## Commands

You listen for command events from the dispatcher. The dispatcher will emit events using the first word (separated by a space) of the line submitted.

```javascript
terminal.dispatcher.on("hello", (data) => {
  console.log("hello!", data)
})
```

The `data` object is from yargs-parser.

## TODO

A whole heck of a lot. See the Issues tab.

