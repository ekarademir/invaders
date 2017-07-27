const p5 = require('p5')

const pixel = 10

const boardWidth  = 200
const boardHeight = 300


let sketch = function (p5) {

    p5.setup = () => {
        let canvas = p5.createCanvas(p5.displayWidth, p5.displayHeight)
        p5.smooth()
    }

    p5.draw = () => {
        p5.background(0)
        
        p5.rectangle()
    }

}

new p5(sketch)