/**
 * @module invader/Game
 * @author ekarademir / https://github.com/ekarademir
 */

const Levels = require('./Levels')

/**
 * 
 * @param {p5} p5 
 */
function Game (p5) {

  this.p5 = p5

  this.currentLevel = new Levels[0](p5)

}

Game.prototype.setup = function() {

  this.currentLevel.board.set()

}

Game.prototype.update = function() {

  this.currentLevel.board.draw()

}

module.exports = { Game }