/**
 * Mothership
 * @module invader/Mother
 * @author ekarademir / https://github.com/ekarademir
 */

 const { Ship } = require('./Ship')

 /** 
 * @param {Board}     board - The board mothership belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 * @class
 * @classdesc Player's ship
 */

 function Mother ( pos, board, width, height ) {

  Ship.call(this, pos, board, width, height)

 }

 Mother.prototype = Object.create(Ship.prototype)
 Mother.prototype.constructor = Mother

 Mother.prototype.draw = function() {

  let p5 = this.board.p5

  p5.fill(42, 255, 255)
  p5.noStroke()
  p5.rect(
    this.pos.x-this.width/2,
    this.pos.y-this.height/2,
    this.width, this.height
  )

 }

 module.exports = { Mother }