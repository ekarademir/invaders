/**
 * Mothership
 * @module invader/Mother
 * @author ekarademir / https://github.com/ekarademir
 */

const { Ship } = require('./Ship')

const MOVESPEED = 5

 /** 
 * @param {Board}     board - The board mothership belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {number}  width
 * @param {number} height
 * @class
 * @classdesc Player's ship
 */

function Mother ( pos, board, width, height ) {

  Ship.call(this, pos, board, width, height)

  this.velocity = 0

  this.p5 = this.board.p5
  
}

Mother.prototype = Object.create(Ship.prototype)
Mother.prototype.constructor = Mother

/**
 * @return {void}
 */
Mother.prototype.draw = function() {

  this.move( this.p5.createVector(this.velocity, 0) )
  
  this.p5.fill(42, 255, 255)
  this.p5.noStroke()
  this.p5.rect(
    this.pos.x-this.width/2,
    this.pos.y-this.height/2,
    this.width, this.height
  )

  if (this.board.debug) {
    this.p5.textSize(10)
    this.p5.text(
      `(${this.topleft.x}, ${this.topleft.y})`, 
      this.topleft.x,
      this.topleft.y
    )
    this.p5.text(
      `(${this.bottomright.x}, ${this.bottomright.y})`, 
      this.bottomright.x,
      this.bottomright.y
    )
  }
}

/**
 * @return {boolean}
 */
Mother.prototype.inBezel = function() {

  if (this.bottomright.x <= this.board.p.bezelBottomRight.x &&
      this.topleft.x >= this.board.p.bezelTopLeft.x) {

    return true

  } else {

    return false 
  
  }

}

/**
 * @return {void}
 */
Mother.prototype.pushInBezel = function() {

  if (this.bottomright.x > this.board.p.bezelBottomRight.x) {

    let dx = this.bottomright.x - this.board.p.bezelBottomRight.x

    Ship.prototype.move.call( this, this.p5.createVector(-dx, 0) )

  }
  if (this.topleft.x < this.board.p.bezelTopLeft.x) {

    let dx = this.board.p.bezelTopLeft.x - this.topleft.x

    Ship.prototype.move.call( this, this.p5.createVector(dx, 0) )

  }

}

/**
 * @param  {p5.Vector} to
 * @return {this} - to daisy chain
 */
Mother.prototype.move = function(to) {
  
  if (this.inBezel()) {

    Ship.prototype.move.call(this, to)

  } else {
    this.pushInBezel()
  }

}

/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Mother.prototype.keydown = function(key) {  
  
  if (key == 'ArrowLeft' || key == 'KeyA') {
    this.velocity = -MOVESPEED
  }
  
  if (key == 'ArrowRight' || key == 'KeyD') {
    this.velocity = MOVESPEED
  }

}

/**
 * @param {string} key - Pressed key
 * @return {void}
 */
Mother.prototype.keyup = function(key) {  
  
  if (key == 'ArrowLeft' || key == 'KeyA') {
    
    if (this.velocity < 0) {
    
      this.velocity = 0
    
    }
  
  }
  
  if (key == 'ArrowRight' || key == 'KeyD') {
    
    if (this.velocity > 0) {
    
      this.velocity = 0
    
    }

  }

}

 module.exports = { Mother }