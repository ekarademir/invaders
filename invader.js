module.exports = exports = {}

/**
 * Game board.
 * 
 * @param {number} width
 * @param {number} height 
 */

exports.Board = function Board(width, height){
  this.width = width
  this.height = height

  /**
   * @param {p5} p5
   */
  this.draw = function(p5) {

    p5.stroke(255)
    p5.strokeWeight(1)
    p5.noFill()
    p5.rect( 10, 10, (this.width-20), (this.height-20) )

  }
}

/** 
 * @param {Board}     board - The board this enemy belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 */
exports.Ship = function Ship(pos, board) {

  this.board = board
  this.pos = pos
  this.width  = 20
  this.height = 7

  /**
   * @param {p5} p5
   */
  this.draw = function(p5) {
    
    p5.fill(50)
    p5.noStroke()
    p5.rect(
      this.pos.x-this.width/2, 
      this.pos.y-this.height/2, 
      this.width, this.height
    )

  }

  /**
   * @param {p5.Vector} to
   */
  this.move = function(to) {

    this.pos.add(to)

  }

  /**
   * @param {Board} _b
   */
  this.setBoard = function(_b) {
    
    this.board = _b

  }

}