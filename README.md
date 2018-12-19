# A Browser Terminal framework for Xterm js

I built this so I could build terminals in the browser extensibly. It's a light wrapper around xterm js.

## Installation

```
npm i xterm-browser
```

## Usage

Wherever you would normally set up your xterm js terminal:

```javascript

const BrowserTerminal = require('xterm-browser').Terminal

let term = new BrowserTerminal({})
terminal.open(document.getElementById('#terminal'))
terminal.setup() // sets up the parser and event listeners.

```

## Writing to the terminal

xterm-browser extends xterm js, so you can call methods directly:

```javascript
terminal.write('I am writing to the terminal')
```

You can also use the Terminal.format utility to change colors and text backgrounds:

```javascript
terminal.writeln(`${terminal.format.text('blue')}Text color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.background('red')}Background color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.brightBackground('cyan')}Background color test${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.style('reverse')}Reverse test (switches background and foreground color)${terminal.format.reset('all')}`)
terminal.writeln(`${terminal.format.brightText('green')}Bright text test${terminal.format.reset('all')}`)
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

