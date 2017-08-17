/**
 * @module invader/levels/Level1
 * @author ekarademir / https://github.com/ekarademir
 */

const {Level} = require('../Level')
const {Board} = require('../Board')


/**
 * @param {p5} p5 
 */
function Level1 (p5)
{
  this.num = 1
  this.difficulty = Level.EASY

  this.board = new Board(
    p5,
    {
      width : 400,
      height: 600,
      enemies: [4,7]
    })
}
Level1.prototype = Object.create(Level.prototype)
Level1.prototype.constructor = Level1

module.exports = {Level1}