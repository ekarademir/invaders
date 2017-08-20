/**
 * @overview Enemy ships
 * @module invader/Enemy
 * @author ekarademir / https://github.com/ekarademir
 */

const { Ship } = require('./Ship')

/** 
 * @class
 * @classdesc Enemy ships
 * @param {Board}     board - The board this enemy belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 */
function Enemy (pos, board, hash, width, height)
{
  Ship.call(this, pos, board, width, height)

  this.hash = hash
}
Enemy.prototype = Object.create(Ship.prototype)
Enemy.prototype.constructor = Enemy


Enemy.prototype.destroy = function()
{
  this.board.members.pop(this.hash)
  this.board.enemies.pop(this.hash)
}


/**
 * @return {void}
 */
Enemy.prototype.draw = function()
{
  this.p5.fill(15, 255, 255)

  Ship.prototype.draw.call(this)
}

module.exports = { Enemy }