const {ipcRenderer} = require('electron')
const p5 = require('p5')

const {Board} = require('./lib/invader')

/**
 * @param _msg {string}
 */
let convey = (_msg) => {
  ipcRenderer.send('convey', `MSG: ${_msg}`)
}

let canvas
let board

let sketch = function (p5) {

p5.setup = function() {

  p5.colorMode(p5.HSB, 255)

  canvas = p5.createCanvas(400, 600)


  board = new Board(
    p5,
    {

      width : 400,
      height: 600,
      enemies: [4,7]

    })

  board.set()
  
  window.addEventListener('keydown', (e) => {

    board.keydown(e.code)
    
  } , true)
  
  window.addEventListener('keyup', (e) => {

    board.keyup(e.code)
    
  } , true)

  p5.smooth()

}

p5.draw = function() {
  p5.background(0)

  board.draw()

}

}

new p5(sketch)