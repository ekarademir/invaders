/**
 * @module invader/Bullet
 * @author ekarademir / https://github.com/ekarademir
 */

const { Box } = require('./Box')

/**
 * @class
 * @classdesc Base class for killing objects
 * @param {p5} p5 p5 instance of the game
 * @param {p5.Vector} pos
 * @param {number} width
 * @param {number} height
 * @param {Gun} attachedTo parent object that this bullet moves with
 */
function Bullet(p5, pos, width, height, attachedTo)
{
  Box.call(this, p5, pos,
    width || 5,
    height || 5
  )

  this.parent = attachedTo || null
}
Bullet.prototype = Object.create(Box.prototype)
Bullet.prototype.constructor = Bullet


Bullet.prototype.update = function()
{
  if (this.parent)
  // If attached to a parent
  {
    let to = this.p5.createVector(0,-40)

    this.pos = this.parent.pos.copy().add(to)
  }
}


Bullet.prototype.draw = function()
{
  this.update()

  this.p5.fill(84, 255, 255)
  Box.prototype.draw.call(this)
}

module.exports = { Bullet }