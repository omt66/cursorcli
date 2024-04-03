# Cursor CLI

Simple cursor manipulation for a ANSI terminals.

## Installation

`$ npm i cursorcli`

## Usage

```js
Common JS
const cc = require("cursorcli")

or

TS
import cc from "cursorcli"


// Clear the terminal screen
cc.clearTerminal()

```

## Example 1:

```ts
/**
 * Simple demo that writes a dot at a random position every 100ms
 */
function example1() {
  let { width, height } = cc.getTerminalSize()
  cc.clearTerminal()
  cc.hideCursor()
  setInterval(() => {
    let x = Math.floor(Math.random() * width)
    let y = Math.floor(Math.random() * height)
    cc.writeAt(x, y, ".")
  }, 100)
  process.on('exit', cc.showCursor)
}
```

## Example 2:
```ts
/**
 * Another simple demo that writes the current ISO date & time every 100ms
 */
function example2() {
  let { width, height } = cc.getTerminalSize()
  cc.clearTerminal()
  cc.hideCursor()
  setInterval(() => {
    cc.writeAt(10, 5, `ISO date & time-> ${new Date().toISOString()}`)
  }, 100)
  process.on('exit', cc.showCursor)
}
```



