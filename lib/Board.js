const p5 = require('p5')

const {Enemy} = require('./Enemy')

/**
 * Game board.
 * 
 * @param {number} width
 * @param {number} height 
 * @param {p5} p5
 */
function Board (width, height, p5){

  this.width = width
  this.height = height
  this.p5 = p5

  this.members = []

}

/**
 * @return {void}
 */
Board.prototype.draw = function() {

  this.p5.stroke(255)
  this.p5.strokeWeight(1)
  this.p5.noFill()
  this.p5.rect( 10, 10, (this.width-20), (this.height-20) )

  this.members.forEach(function(element) {
    element.draw(this.p5)
  }, this);

}

/**
 * @return {void}
 */
Board.prototype.set = function() {
  let e = new Enemy( this.p5.createVector(50, 50), this)

  this.members.push( e )

}

module.exports = { Board }