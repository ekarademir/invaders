const p5 = require("p5")

let sketch = function (p5) {

    p5.setup = () => {
        let canvas = p5.createCanvas(p5.displayWidth, p5.displayHeight)
        p5.smooth()
    }

    p5.draw = () => {
        p5.background(255)
        p5.ellipse(50, 50, 80, 80)
    }

}

new p5(sketch)