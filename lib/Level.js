/**
 * @module invader/Level
 * @author ekarademir / https://github.com/ekarademir
 */

const {Board} = require('./Board')


function Level ()
{
  this.EASY   = 1
  this.NORMAL = 2
  this.HARD   = 3
}

module.exports = { Level }