/**
 * @author ekarademir / https://github.com/ekarademir
 */

const {Box} = require('./Box')


/** 
 * @class
 * @classdesc Abstract ship
 * @param {Board}     board - The board this ship belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 */
function Ship (pos, board, width, height)
{
  this.board = board

  Box.call(this,
    this.board.p5,
    pos,
    width  || 30,
    height || 15
  )
}
Ship.prototype = Object.create(Box.prototype)
Ship.prototype.constructor = Ship


/**
 * @return {void}
 */
Ship.prototype.draw = function()
{  
  this.p5.fill(15, 255, 255)
  this.p5.noStroke()
  this.p5.rect(
    this.pos.x-this.width/2, 
    this.pos.y-this.height/2, 
    this.width, this.height
  )

  if (this.board.debug)
  {
    this.p5.textSize(10)
    this.p5.text(
      `(${this.topLeft.x}, ${this.topLeft.y})`, 
      this.topLeft.x,
      this.topLeft.y
    )
    this.p5.text(
      `(${this.bottomRight.x}, ${this.bottomRight.y})`, 
      this.bottomRight.x,
      this.bottomRight.y
    )
  }
}


/**
 * @param  {Board} _b
 * @return {void}
 */
Ship.prototype.setBoard = function( _b )
{  
  this.board = _b
}

module.exports = { Ship }