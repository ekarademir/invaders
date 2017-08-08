/**
 * @module invader/Game
 * @author ekarademir / https://github.com/ekarademir
 */

const Levels = require('./Levels')

const MENU    = 1
const GAMEON  = 2
const GAMEEND = 3

/**
 * 
 * @param {p5} p5 
 */
function Game (p5) {

  this.p5 = p5

  this.state = MENU

}

/**
 * @return {void}
 */
Game.prototype.draw = function() {

  if (this.state == MENU)  {
    this.menu()
  }

  if (this.state == GAMEON) {
    this.gamePlay()
  }

}

/**
 * Draws the menu and binds keys
 */
Game.prototype.menu = function () {

  let LINEHEIGHT = 20
  let SPACE = 20

  this.p5.fill(150, 255, 255)
  
  // Title
  this.p5.textSize(30)
  this.p5.text('INVADERS', 50, 200)

  // Keys
  this.p5.textSize(12)

  let pos = 240

  this.p5.text('S - Start New Game', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('P - High Scores', 50, pos)
  pos += LINEHEIGHT + SPACE
  this.p5.text('Game Controls', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('A or Left - Move Left', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('D or Right - Move Right', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('Space - Fire', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('B - Use Extension', 50, pos)
  pos += LINEHEIGHT
  this.p5.text('Q - Quit Playing Game', 50, pos)
  pos += LINEHEIGHT

  this.bindMenuKeys()

}

/**
 * @return {void}
 */
Game.prototype.bindMenuKeys = function () {

  window.addEventListener('keydown', (e) => {

    this.keydown(e.code)

  }, true)

  window.addEventListener('keyup', (e) => {

    this.keyup(e.code)
    
  }, true)

}

/**
 * @return {void}
 */
Game.prototype.unbindMenuKeys = function () {

  window.addEventListener('keydown', null, this)
  window.addEventListener('keydup', null, true)

}

/**
 * @param {string} key
 * @return {void}
 */
Game.prototype.keydown = function (key) {

  if (this.state == MENU)  {

    if (key == 'KeyS') {

      this.state = GAMEON
      this.startGame()

    }

  }

  if (this.state == GAMEON)  {

    if (key == 'KeyQ') {

      this.state = MENU

    }

    if (this.currentLevel) {

      this.currentLevel.board.keydown(key)

    }

  }

}

/**
 * @param {string} key
 * @return {void}
 */
Game.prototype.keyup = function (key) {

  if (this.state == MENU)  {

    //

  }

  if (this.currentLevel) {

    this.currentLevel.board.keyup(key)

  }

}

/**
 * @return {void}
 */
Game.prototype.setup = function() {

  //

}

/**
 * @return {void}
 */
Game.prototype.startGame = function() {

  this.currentLevel = new Levels[0](this.p5)
  this.currentLevel.board.set()

}

Game.prototype.gamePlay = function() {

  if (this.currentLevel) {

    this.currentLevel.board.draw()

  }

}

module.exports = { Game }