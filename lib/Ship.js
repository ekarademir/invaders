/**
 * @author ekarademir / https://github.com/ekarademir
 */

const {Box} = require('./Box')

/** 
 * @param {Board}     board - The board this ship belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 */
function Ship ( pos, board, width, height ) {

  this.width  = width  || 30
  this.height = height || 15
  this.board = board
  this.pos = pos

  Box.call(this, 
    this.pos.x-this.width/2,
    this.pos.y-this.height/2,
    this.width, this.height
  )
  // this.box = new Box(
  //   this.pos.x-this.width/2, 
  //   this.pos.y-this.height/2, 
  //   this.width, this.height
  // )

}

Ship.prototype = Object.create(Box.prototype)
Ship.prototype.constructor = Ship

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

  if (this.board.debug) {
    p5.textSize(10)
    p5.text(
      `(${this.topleft.x}, ${this.topleft.y})`, 
      this.topleft.x,
      this.topleft.y
    )
    p5.text(
      `(${this.bottomright.x}, ${this.bottomright.y})`, 
      this.bottomright.x,
      this.bottomright.y
    )
  }

}

/**
 * @param  {p5.Vector} to
 * @return {this} - to daisy chain
 */
Ship.prototype.move = function(to) {

  this.pos.add(to)

  this.topleft.x += to.x 
  this.topleft.y += to.y 
  this.bottomright.x += to.x 
  this.bottomright.y += to.y 

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