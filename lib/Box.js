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
  this.debugCoords = false
  this.debugHitbox = true

  this.p5 = p5
  this.pos = pos

  this.width = width
  this.height = height

  this.velocity = this.p5.createVector(0, 0)
  
  this.updateDerived()
}


Box.prototype.updateDerived = function()
{
  this.x = this.pos.x
  this.y = this.pos.y  
  this.topLeft = this.p5.createVector(this.x - this.width / 2, this.y - this.height / 2)
  this.bottomRight = this.p5.createVector(this.x + this.width / 2, this.y + this.height / 2)
  this.topRight = this.p5.createVector(this.x + this.width / 2, this.y - this.height / 2)
  this.bottomLeft = this.p5.createVector(this.x - this.width / 2, this.y + this.height / 2)
}


/**
 * @param {p5.Vector} to
 * @return {this} - to daisy chain
 */
Box.prototype.move = function(to)
{
  this.pos.add(to)

  this.updateDerived()
  
  return this
}


/**
 * @param {p5.Vector} newPos
 * @return {this} - to daisy chain
 */
Box.prototype.updatePos = function(newPos)
{
  this.pos = newPos.copy()

  this.updateDerived()
  
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

  if (this.debugCoords) {
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

  if (this.debugHitbox) {
    this.p5.noFill()
    this.p5.stroke(125, 255, 255)
    this.p5.rect(
      this.topLeft.x, this.topLeft.y,
      this.bottomRight.x - this.topLeft.x,
      this.bottomRight.y - this.topLeft.y
    )
  }
}


Box.prototype.isin = function(b)
{
  if (this.bottomRight.x <= b.bottomRight.x &&
    this.topLeft.x >= b.topLeft.x &&
    this.bottomRight.y <= b.bottomRight.y &&
    this.topLeft.y >= b.topLeft.y)
  {
    return true
  }
  else
  {
    return false 
  }
}

module.exports = { Box }