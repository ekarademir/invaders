/**
 * @module invader/Board
 * @author ekarademir / https://github.com/ekarademir
 */

const p5 = require('p5')

const { Enemy, Mother } = require('./Ships')

/**@const {number[]} - Position where player spawns */
const MOTHERSPAWN = [200, 500]
/**@const {number[]} - Origin of the enemy ship spawning */
const ENEMYORIGIN = [50, 50]


/**
 * Properties of a gaming board.
 * @typedef {Object} BoardProperties
 * @property {number} width
 * @property {number} height
 * @property {number[]} enemies - Number of enemies in [row, col] format.
 */

/**
 * @param {BoardProperties} props
 * @param {p5} p5
 * @class
 * @classdesc Game board
 */
function Board ( p5, props ){

  this.p5 = p5
  this.p = props
  this.players = []
  this.members = []

}

/**
 * @return {void}
 */
Board.prototype.set = function() {

  this.setEnemies()

  let player1 = new Mother( this.p5.createVector(MOTHERSPAWN[0], MOTHERSPAWN[1] ), 
      this, 60, 20)

  this.members.push( player1 )
  this.players.push( player1 )

}

/**
 * @return {void}
 */
Board.prototype.draw = function() {

  this.bezel()

  this.members.forEach(function(element) {

    element.draw()

  }, this);

}

/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Board.prototype.keypress = function(key) {
  
  this.players.forEach(function(element) {

    element.keypress(key)

  }, this)
  
}

/**
 * @return {void}
 */
Board.prototype.setEnemies = function() {

  let origin = this.p5.createVector(ENEMYORIGIN[0], ENEMYORIGIN[1])
  let padding = 20

  let cols = this.p.enemies.pop()
  let rows = this.p.enemies.pop()

  for (let i = 0; i < rows; i++) {

    for (let j = 0; j < cols; j++) {

      let e  = new Enemy( origin.copy(), this)

      e.move( this.p5.createVector( 
          j*(e.width + padding), i*(e.height + padding) 
        ) 
      )

      this.members.push( e )

    }

  }


}

/**
 * @return {void}
 */
Board.prototype.bezel = function() {

  this.p5.stroke(255)
  this.p5.strokeWeight(1)
  this.p5.noFill()
  this.p5.rect( 10, 10, (this.p.width-20), (this.p.height-20) )

}

module.exports = { Board }