/**
 * @module invader/Box
 * @author ekarademir / https://github.com/ekarademir
 */

/**
 * @class
 * @classdesc Primitive class that all interacting objects are based.
 * @param {p5} p5 pointer to p5 instance
 * @param {p5.Vector} pos
 */
function Box (p5, pos, width, height)
{
  this.p5 = p5
  this.pos = pos

  // Derived quantities
  this.x = pos.x
  this.y = pos.y
  this.width = width
  this.height = height

  this.topLeft = p5.createVector(this.x, this.y)
  this.bottomRight = p5.createVector(this.x+width, this.y+height)
}


/**
 * @param {p5.Vector} to
 * @return {this} - to daisy chain
 */
Box.prototype.move = function(to)
{
  this.pos.add(to)

  this.topLeft.add(to)
  this.bottomRight.add(to)

  this.x = this.pos.x
  this.y = this.pos.y
  
  return this
}


/**
 * @return {void}
 */
Box.prototype.draw = function()
{
  this.p5.noStroke()
  this.p5.rect(
    this.pos.x-this.width/2,
    this.pos.y-this.height/2,
    this.width, this.height
  )

  if (this.board.debug) {
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

module.exports = { Box }