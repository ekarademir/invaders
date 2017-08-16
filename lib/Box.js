/**
 * @module invader/Box
 * @author ekarademir / https://github.com/ekarademir
 */

/**
 * Coordinate
 * @param {number} x
 * @param {number} y
 */
function Coord (x, y) {

  this.x = x
  this.y = y

}


/**
 * @param {Coord} topleft
 * @param {Coord} bottomright
 */
function Box (x, y, width, height) {

  this.topleft = new Coord(x, y)
  this.bottomright = new Coord(x+width, y+height)
  this.x = x
  this.y = y
  this.width = width
  this.height = height

}

/**
 * @param {Box} b
 */
Box.prototype.isin = function(b) {

 //

}

module.exports = {Box, Coord}