/**
 * @module invader/Board
 * @author ekarademir / https://github.com/ekarademir
 */

/**
 * Properties of a gaming board.
 * @typedef {Object} BoardProperties
 * @property {number} width
 * @property {number} height
 * @property {number[]} enemies - Number of enemies in [row, col] format.
 */

const p5 = require('p5')

const {Enemy} = require('./Enemy')

/**
 * Game board.
 * 
 * @param {BoardProperties} props
 * @param {p5} p5
 */
function Board (p5, props){

  this.p5 = p5
  this.p = props
  this.members = []

}

/**
 * @return {void}
 */
Board.prototype.draw = function() {

  this.bezel()

  this.members.forEach(function(element) {
    element.draw(this.p5)
  }, this);

}

/**
 * @return {void}
 */
Board.prototype.set = function() {

  this.members.push( new Enemy( this.p5.createVector(50, 50), this) )

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