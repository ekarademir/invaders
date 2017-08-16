/**
 * @module invader/Bullet
 * @author ekarademir / https://github.com/ekarademir
 */

const {Box} = require('./Box')

/**
 * 
 * @param {p5.Vector} pos 
 * @param {Board} board 
 * @param {number} width 
 * @param {number} height 
 */
function Bullet (pos, board, width, height)
{

  this.width = width || 10
  this.height = height || 10
  this.pos = pos
  this.board = board

  Box.call(this, this.pos.x, this.pos.y, this.width, this.height)

}

Bullet.prototype = Object.call(Box.prototype)
Bullet.prototype.constructor = Bullet

module.exports = { Bullet }