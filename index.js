const {ipcRenderer} = require('electron')
const p5 = require('p5')

const {Game} = require('./lib/invader')

/**
 * @param _msg {string}
 */
let convey = (_msg) => {
  ipcRenderer.send('convey', `MSG: ${_msg}`)
}

let canvas
let game

let sketch = function (p5) {

p5.setup = function() {

  p5.colorMode(p5.HSB, 255)

  canvas = p5.createCanvas(400, 600)

  game = new Game(p5)

  game.setup()

  p5.smooth()

}

p5.draw = function() {
  p5.background(0)

  game.update()

}

}

new p5(sketch)