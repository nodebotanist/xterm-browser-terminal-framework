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
const BrowserTerminal = require('../src/terminal').Terminal

let term = new Terminal({})
let terminal = new BrowserTerminal(term)
term.open(document.getElementById('#terminal'))
terminal.setup() // sets up the parser and event listeners.

```

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

