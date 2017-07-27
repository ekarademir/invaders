const {ipcRenderer} = require('electron')
const p5 = require('p5')

const {Board} = require('./invader')

let board = new Board()


/**
 * @param _msg {string}
 */
let convey = (_msg) => {
  ipcRenderer.send('convey', `MSG: ${_msg}`)
}

let canvas

let sketch = function (p5) {

p5.setup = () => {
  canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)
  
  board.width = p5.windowWidth
  board.height = p5.windowHeight

  p5.smooth()
}

p5.draw = () => {
  p5.background(0)

  board.draw(p5)

}

}

new p5(sketch)