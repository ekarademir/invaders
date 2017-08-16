/**
 * Enemy ships
 * @module invader/Enemy
 * @author ekarademir / https://github.com/ekarademir
 */

const { Ship } = require('./Ship')

/** 
 * @param {Board}     board - The board this enemy belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 * @class
 * @classdesc Enemy ships
 */
function Enemy ( pos, board, width, height ) {

  Ship.call(this, pos, board, width, height)
  
}

Enemy.prototype = Object.create(Ship.prototype)
Enemy.prototype.constructor = Enemy

module.exports = { Enemy }