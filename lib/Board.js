/**
 * @module invader/Board
 * @author ekarademir / https://github.com/ekarademir
 */

const p5 = require('p5')

const { Enemy, Mother } = require('./Ships')
const { Dict } = require('./Dict')

/**@const {number[]} - Position where player spawns */
const MOTHERSPAWN = [200, 550]
/**@const {number[]} - Origin of the enemy ship spawning */
const ENEMYORIGIN = [50, 50]
/**@const {number} - Width of the bezel frame */
const BEZELMEAT = 10


/**
 * Properties of a gaming board.
 * @typedef {Object} BoardProperties
 * @property {number} width
 * @property {number} height
 * @property {p5.Vector} bezelTopLeft
 * @property {p5.Vector} bezelBottomRight
 * @property {number[]} enemies - Number of enemies in [row, col] format.
 */


/**
 * @class
 * @classdesc Game board
 * @param {BoardProperties} props
 * @param {p5} p5
 */
function Board (p5, props)
{
  this.p5 = p5
  this.p = props

  this.p.bezelTopLeft     = this.p5.createVector(BEZELMEAT, BEZELMEAT)
  this.p.bezelBottomRight = this.p.bezelTopLeft.copy().add(
    this.p5.createVector(this.p.width-BEZELMEAT*2, this.p.height-BEZELMEAT*2)
  )

  this.players = new Dict()
  this.members = new Dict()
  this.enemies = new Dict()

  this.debug = false
}


/**
 * Create the board and bind the keys.
 * @return {void}
 */
Board.prototype.set = function()
{
  this.setEnemies()

  let player1 = new Mother( this.p5.createVector(MOTHERSPAWN[0], MOTHERSPAWN[1] ), 
    this, 60, 20)

  this.members.push('mothership', player1)
  this.players.push('mothership', player1)
}


/**
 * @return {void}
 */
Board.prototype.draw = function()
{
  this.update()

  this.members.forEach(function(element)
  {
    element.draw()
  }, this);
}


Board.prototype.update = function()
{
  this.drawBezel()
}


/**
 * @param {string} key
 * @return {void}
 */
Board.prototype.keydown = function(key)
{
  this.players.forEach(function(element)
  {
    element.keydown(key)
  }, this)
}


/**
 * @param {string} key
 * @return {void}
 */
Board.prototype.keyup = function(key)
{
  this.players.forEach(function(element)
  {
    element.keyup(key)
  }, this)
}


/**
 * @return {void}
 */
Board.prototype.setEnemies = function()
{
  let origin = this.p5.createVector(ENEMYORIGIN[0], ENEMYORIGIN[1])
  let padding = 20

  let cols = this.p.enemies.pop()
  let rows = this.p.enemies.pop()

  for (let i = 0; i < rows; i++)
  {
    for (let j = 0; j < cols; j++)
    {
      hash = `enemy${i}${j}`

      let e  = new Enemy( origin.copy(), this, hash)

      e.move( this.p5.createVector( 
          j*(e.width + padding), i*(e.height + padding) 
        ) 
      )

      this.members.push(hash, e)
      this.enemies.push(hash, e)
    }
  }
}


/**
 * @return {void}
 */
Board.prototype.drawBezel = function()
{
  this.p5.stroke(255)
  this.p5.strokeWeight(1)
  this.p5.noFill()
  this.p5.rect( 
    this.p.bezelTopLeft.x, this.p.bezelTopLeft.y,
    this.p.width-BEZELMEAT*2, this.p.height-BEZELMEAT*2
  )

  if (this.debug)
  {
    this.p5.textSize(10)
    this.p5.text(
      `(${this.p.bezelTopLeft.x}, ${this.p.bezelTopLeft.y})`, 
      this.p.bezelTopLeft.x,
      this.p.bezelTopLeft.y
    )
    this.p5.text(
      `(${this.p.bezelBottomRight.x}, ${this.p.bezelBottomRight.y})`, 
      this.p.bezelBottomRight.x,
      this.p.bezelBottomRight.y
    )
  }
}

module.exports = { Board }