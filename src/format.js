const formattingCodes = {
  red: {
    text: 31,
    brightText: 91,
    background: 41,
    brightBackground: 101
  },
  green: {
    text: 32,
    brightText: 92,
    background: 42,
    brightBackground: 102
  },
  yellow: {
    text: 33,
    brightText: 93,
    background: 43,
    brightBackground: 103
  },
  blue: {
    text: 34,
    brightText: 94,
    background: 44,
    brightBackground: 104
  },
  magenta: {
    text: 35,
    brightText: 95,
    background: 45,
    brightBackground: 105
  },
  cyan: {
    text: 36,
    brightText: 96,
    background: 46,
    brightBackground: 106
  },
  black: {
    text: 30,
    background: 40
  },
  gray: {
    text: 90,
    brightText: 37,
    background: 100,
    brightBackground: 47
  },
  white: {
    text: 97,
    background: 107
  },
  default: {
    foreground: 39,
    background: 49,  
  },
  style: {
    bright: 1,
    dim: 2,
    underline: 4,
    blink: 5,
    reverse: 7,
    hidden: 8
  },
  reset: {
    all: 0,
    bright: 21,
    dim: 22,
    underline: 24,
    blink: 25,
    reverse: 27,
    hidden: 28
  }
} 

let createEscapeCode = (code) => {
  return `\u001b[${code};1m`
}

let text = (color) => {
  return createEscapeCode(formattingCodes[color].text)
}

let brightText = (color) => {
  return createEscapeCode(formattingCodes[color].brightText)
}

let background = (color) => {
  return createEscapeCode(formattingCodes[color].background)
}

let brightBackground = (color) => {
  return createEscapeCode(formattingCodes[color].brightBackground)
}

let style = (style) => {
  return createEscapeCode(formattingCodes.style[style])
}

let reset = (style) => {
  return createEscapeCode(formattingCodes.reset[style])
}

let newLine = () => { // thanks viewer tbodt for this idea!
  return '\r\n'
}

module.exports = {
  newLine,
  reset,
  style,
  brightBackground,
  background,
  brightText,
  text
}
