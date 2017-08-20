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

  this.reload()
}


Gun.prototype.reload = function()
{
  this.bullet = new Bullet(
    this.p5,
    this.parent.board,
    this,
    'bullet0',
    this.parent.pos.copy(),
    null,
    null,
    this.parent,
    this.parent.board.enemies.copy()
  )

  this.parent.board.members.push(this.bullet.hash, this.bullet)
}


/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Gun.prototype.keydown = function(key)
{
  if (key == 'Space')
  {
    this.bullet.attachedTo = null
  }
}


/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Gun.prototype.keyup = function(key)
{
  if (key == 'Space')
  {
    //
  }
}

module.exports = { Gun }