/**
 * @module invader/Bullet
 * @author ekarademir / https://github.com/ekarademir
 */

const { Box } = require('./Box')

const VELOCITY = 25

/**
 * @class
 * @classdesc Base class for killing objects
 * @param {p5} p5 p5 instance of the game
 * @param {p5.Vector} pos
 * @param {number} width
 * @param {number} height
 * @param {Gun} attachedTo parent object that this bullet moves with
 */
function Bullet(p5, board, gun, hash, pos, width, height, attachedTo, targets)
{
  Box.call(this, p5, pos,
    width || 5,
    height || 5
  )

  this.parent = gun || null
  this.attachedTo = attachedTo || null
  this.board = board
  this.targets = targets
  this.hash = hash || 'bullet'
}
Bullet.prototype = Object.create(Box.prototype)
Bullet.prototype.constructor = Bullet


Bullet.prototype.update = function()
{
  if (this.attachedTo)
  // If attached to a parent
  {
    let newPos = this.attachedTo.pos.copy()

    let to = this.pos.copy().sub(newPos)

    this.updatePos(this.attachedTo.pos)
  }
  else
  {
    this.velocity = this.p5.createVector(0, -VELOCITY)
  }

  if (! this.inBezel())
  {
    this.board.members.pop(this.hash)
    this.parent.reload()
  }

  this.targets.forEach(function(e){
    if (this.hits(e))
    {
      e.destroy()
      this.board.members.pop(this.hash)
      this.parent.reload()
    }
  }, this)
  
  this.move(this.velocity)
}


Bullet.prototype.hits = function(t)
{
  /*
    Solving line segment parallel piped crossection with t as z axis.
   */
  // At the beginning of the time frame.
  // inverting y coordinate to correct the math
  let a = this.p5.createVector(t.bottomLeft.x, t.bottomLeft.y, 0.0)
  let b = this.p5.createVector(t.bottomRight.x, t.bottomRight.y, 0.0)
  let e = this.p5.createVector(this.x, this.y, 0.0)

  // At the end of the time frame
  let d = this.p5.createVector(
    t.bottomLeft.x + t.velocity.x,
    (t.bottomLeft.y + t.velocity.y),
    100.0)
  let c = this.p5.createVector(
    t.bottomRight.x + t.velocity.x,
    (t.bottomRight.y + t.velocity.y),
    100.0)
  let f = this.p5.createVector(
    this.x + this.velocity.x,
    (this.y + this.velocity.y),
    10)

  let s = f.copy().sub(e)
  let k = b.copy().sub(a)
  let l = d.copy().sub(a)

  let q = k.copy().cross(l)

  let sdotq = s.dot(q)

  if (sdotq == 0)
  {
    return this.isin(t)
  }

  let edotq = e.dot(q)
  let adotq = a.dot(q)
  
  let alpha = (adotq - edotq)/sdotq

  if (alpha < 0 || alpha > 1)
  {
    return false
  }

  // Line segment crosssects the plane. Check if it hits the parallelpiped

  let h = e.add(s.mult(alpha))

  h.sub(a)

  abs_k = k.mag()
  abs_l = l.mag()

  let beta  = k.dot(h)/abs_k
  let gamma = l.dot(h)/abs_l

  if (beta < 0 || beta > abs_k)
  {
    return false
  }
  else {
    if (gamma < 0 || gamma > abs_l)
    {
      return false
    }
  }

  return true
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