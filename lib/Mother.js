/**
 * Mothership
 * @module invader/Mother
 * @author ekarademir / https://github.com/ekarademir
 */

const { Ship } = require('./Ship')

 /** 
 * @param {Board}     board - The board mothership belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 * @class
 * @classdesc Player's ship
 */

function Mother ( pos, board, width, height ) {

  Ship.call(this, pos, board, width, height)

  this.velocity = 0

  this.p5 = this.board.p5
  
}

Mother.prototype = Object.create(Ship.prototype)
Mother.prototype.constructor = Mother

/**
 * @return {void}
 */
Mother.prototype.draw = function() {

  this.move( this.p5.createVector(this.velocity, 0) )
  
  this.p5.fill(42, 255, 255)
  this.p5.noStroke()
  this.p5.rect(
    this.pos.x-this.width/2,
    this.pos.y-this.height/2,
    this.width, this.height
  )

}

/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Mother.prototype.keydown = function(key) {  
  
  if (key == 'ArrowLeft' || key == 'KeyA') {
    this.velocity = -10
  }
  
  if (key == 'ArrowRight' || key == 'KeyD') {
    this.velocity = 10
  }

}

/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Mother.prototype.keyup = function(key) {  
  
  if (key == 'ArrowLeft' || key == 'KeyA') {
    
    if (this.velocity < 0) {
    
      this.velocity = 0
    
    }
  
  }
  
  if (key == 'ArrowRight' || key == 'KeyD') {
    
    if (this.velocity > 0) {
    
      this.velocity = 0
    
    }

  }

}

 module.exports = { Mother }