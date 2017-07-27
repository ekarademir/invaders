const p5 = require('p5')




const bw = 40
const bh = 60

let p = 10
let canvas

let sketch = function (p5) {

    p5.setup = () => {
        canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight)

        p = Math.min(p5.windowWidth/bw, p5.windowHeight/bh)

        p5.smooth()
    }

    p5.draw = () => {
        p5.background(0)
        
        p5.stroke(255)
        p5.strokeWeight(1)
        p5.noFill()
        p5.rect( 1*p, 1*p, (bw-2)*p, (bh-2)*p )
    }

}

new p5(sketch)