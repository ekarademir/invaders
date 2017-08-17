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
function Bullet(p5, board, gun, hash, pos, width, height, attachedTo)
{
  Box.call(this, p5, pos,
    width || 5,
    height || 5
  )

  this.parent = gun || null
  this.attachedTo = attachedTo || null
  this.board = board
  this.hash = hash || 'bullet'
  this.velocity = this.p5.createVector(0, 0)
}
Bullet.prototype = Object.create(Box.prototype)
Bullet.prototype.constructor = Bullet


Bullet.prototype.update = function()
{
  if (this.attachedTo)
  // If attached to a parent
  {
    // let a = this.p5.createVector(0,-10)
    let newPos = this.attachedTo.pos.copy()

    let to = this.pos.copy().sub(newPos)

    // console.log(`${to.x}-${to.y}`)
    this.updatePos(this.attachedTo.pos)
  }
  else
  {
    this.velocity = this.p5.createVector(0, -20)
  }

  if (! this.inBezel())
  {
    this.board.members.pop(this.hash)
    this.parent.reload()
  }

  this.board.enemies.forEach(function(e){
    if (this.isin(e))
    {
      e.destroy()
      this.board.members.pop(this.hash)
      this.parent.reload()
    }
  }, this)
  
  this.move(this.velocity)
}


Bullet.prototype.draw = function()
{
  this.update()

  this.p5.fill(84, 255, 255)
  Box.prototype.draw.call(this)
}


/**
 * @return {boolean}
 */
Bullet.prototype.inBezel = function()
{
  if (this.bottomRight.x <= this.board.p.bezelBottomRight.x &&
      this.topLeft.x >= this.board.p.bezelTopLeft.x &&
      this.bottomRight.y <= this.board.p.bezelBottomRight.y &&
      this.topLeft.y >= this.board.p.bezelTopLeft.y)
  {
    return true
  }
  else
  {
    return false 
  }
}

module.exports = { Bullet }