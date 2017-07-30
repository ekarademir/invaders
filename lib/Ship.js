/** 
 * @param {Board}     board - The board this enemy belogs to
 * @param {p5.Vector} pos   - Position vector of the centre
 * @param {width}  width
 * @param {height} height
 */
Ship = Ship = function (pos, board, width, height) {

  this.width  = width  || 20
  this.height = height || 7
  this.board = board
  this.pos = pos

}

/**
 * @param {p5} p5
 */
Ship.prototype.draw = function(p5) {
  
  p5.fill(50)
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
Ship.prototype.setBoard = function(_b) {
  
  this.board = _b

}

module.exports = { Ship }