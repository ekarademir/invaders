module.exports = exports = {Board, Enemy}

/**
 * Game board.
 * 
 * @param {number} width
 * @param {number} height 
 */

function Board(width, height){
  this.width = width
  this.height = height

  /**
   * @param {p5} p5
   */
  this.draw = (p5) => {
    p5.stroke(255)
    p5.strokeWeight(1)
    p5.noFill()
    p5.rect( 10, 10, (this.width-20), (this.height-20) )
  }
}

function Enemy() {

}

function Ship() {

}