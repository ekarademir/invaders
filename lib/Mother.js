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

  this.speed = 50

  this.p5 = this.board.p5
  
}

Mother.prototype = Object.create(Ship.prototype)
Mother.prototype.constructor = Mother

/**
 * @return {void}
 */
Mother.prototype.draw = function() {
  
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
Mother.prototype.keypress = function(key) {  
  
  if (key=='ArrowLeft' || key=='KeyA') {
    this.moveLeft()
  }
  
  if (key=='ArrowRight' || key=='KeyD') {
    this.moveRight()
  }

}

/**
 * @return {void}
 */
Mother.prototype.moveLeft = function() {

  this.move( this.p5.createVector(-this.speed, 0) )

}

/**
 * @return {void}
 */
Mother.prototype.moveRight = function() {

  this.move( this.p5.createVector(this.speed, 0) )

}



 module.exports = { Mother }