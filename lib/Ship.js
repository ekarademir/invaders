/**
 * @author ekarademir / https://github.com/ekarademir
 */

const {Box} = require('./Box')


/** 
 * @class
 * @classdesc Abstract ship
 * @param {Board}     board - The board this ship belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 */
function Ship (pos, board, width, height)
{
  this.board = board

  Box.call(this,
    this.board.p5,
    pos,
    width  || 30,
    height || 15
  )
}
Ship.prototype = Object.create(Box.prototype)
Ship.prototype.constructor = Ship


/**
 * @param  {Board} _b
 * @return {void}
 */
Ship.prototype.setBoard = function( _b )
{  
  this.board = _b
}

module.exports = { Ship }