/**
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
 * @param {Coord} topright
 * @param {Coord} bottomleft
 */
function Box (x, y, width, height) {

  this.topright = new Coord(x, y)
  this.bottomleft = new Coord(x+width, y+height)

}

/**
 * @param {Box} b
 */
Box.prototype.isin = function(b) {

 //

}

module.exports = {Box, Coord}