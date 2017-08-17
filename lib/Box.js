/**
 * @module invader/Box
 * @author ekarademir / https://github.com/ekarademir
 */

/**
 * @param {p5} p5 pointer to p5 instance
 * @param {p5.Vector} pos
 */
function Box (p5, pos, width, height)
{
  this.p5 = p5
  this.x = x
  this.y = y
  this.width = width
  this.height = height

  this.topLeft = p5.createVector(x, y)
  this.bottomRight = p5.createVector(x+width, y+height)
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
  
  return this
}


/**
 * @param {Box} b
 */
Box.prototype.isin = function(b)
{
 //
}

module.exports = { Box }