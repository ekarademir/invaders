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

  

}

Game.prototype.draw = function() {

  this.p5.fill(150, 255, 255)
  this.p5.textSize(30)
  this.p5.text('INVADERS', 50, 200)

}

Game.prototype.setup = function() {

  //

}

Game.prototype.start = function() {

  this.currentLevel = new Levels[0](this.p5)
  this.currentLevel.board.set()

}

Game.prototype.update = function() {

  if (this.currentLevel) {

    this.currentLevel.board.draw()

  }

}

module.exports = { Game }