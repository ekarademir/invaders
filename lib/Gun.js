/**
 * @module invader/Gun
 * @author ekarademir / https://github.com/ekarademir
 */

const { Bullet } = require('./Bullet')

/**
 * @class
 * @classdesc Gun class
 * @param {p5} p5 p5 instance of the game
 * @param {Ship} mother
 */
function Gun(p5, mother)
{
  this.p5 = p5
  this.parent = mother

  this.bullet = new Bullet(
    p5,
    mother.pos.copy(),
    null,
    null,
    mother
  )

  this.parent.board.members.push(this.bullet)
}

module.exports = { Gun }