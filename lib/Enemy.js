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
function Enemy (pos, board, width, height)
{
  Ship.call(this, pos, board, width, height)
}
Enemy.prototype = Object.create(Ship.prototype)
Enemy.prototype.constructor = Enemy


/**
 * @return {void}
 */
Enemy.prototype.draw = function()
{
  this.p5.fill(15, 255, 255)

  Ship.prototype.draw.call(this)
}

module.exports = { Enemy }