/**
 * @module invader/Dict
 * @author ekarademir / https://github.com/ekarademir
 */


function Dict(o)
{
  this.length = 0
  this.items = {}

  for (let p in o)
  {
    if (o.hasOwnPropperty(p))
    {
      this.items[p] = obj[p]
      this.length++
    }
  }
}


Dict.prototype.has = function(key)
{
  return this.items.hasOwnProperty(key)
}

Dict.prototype.remove = function(key)
{
  if (this.has(key))
  {
    delete this.items[key]
    this.length--
  }
}


Dict.prototype.get = function(key, def)
{
  return this.has(key) ? this.items[key] : def
}


Dict.prototype.pop = function(key, def)
{
  let r = this.get(key, def)
  this.remove(key)
}


Dict.prototype.push = function(key, val)
{
  this.items[key] = val
  this.length++
}

Dict.prototype.forEach = function(fn, ctx)
{
  if (ctx)
  {
    for (let k in this.items)
    {
    
      fn.call(ctx, this.items[k])
    }
  }
  else
  {
    for (let k in this.items)
    {
    
      fn(this.items[k])
    }
  }
}


Dict.prototype.keys = function()
{
  return Object.keys(this.items)
}


Dict.prototype.values = function()
{
  return Object.values(this.items)
}

module.exports = { Dict }