/**
 * @author ekarademir / https://github.com/ekarademir
 */

const {Box} = require('./Box')

/** 
 * @param {Board}     board - The board this ship belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 */
function Ship ( pos, board, width, height ) {

  this.width  = width  || 30
  this.height = height || 15
  this.board = board
  this.pos = pos
  this.box = new Box(
    this.pos.x-this.width/2, 
    this.pos.y-this.height/2, 
    this.width, this.height
  )

}

/**
 * @param {p5} p5
 * @class
 * @classdesc Abstract ship
 */
Ship.prototype.draw = function() {

  let p5 = this.board.p5
  
  p5.fill(15, 255, 255)
  p5.noStroke()
  p5.rect(
    this.pos.x-this.width/2, 
    this.pos.y-this.height/2, 
    this.width, this.height
  )

}

/**
 * @param  {p5.Vector} to
 * @return {this} - to daisy chain
 */
Ship.prototype.move = function(to) {

  this.pos.add(to)

  return this

}

/**
 * @param  {Board} _b
 * @return {void}
 */
Ship.prototype.setBoard = function( _b ) {
  
  this.board = _b

}

module.exports = { Ship }