module.exports = exports = {}

const {Ship} = require('./Ship')

/** 
 * @param {Board}     board - The board this enemy belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 */
exports.Enemy = function Enemy(pos, board, width, height) {

  Ship.call(this, pos, board, width, height)
  
}