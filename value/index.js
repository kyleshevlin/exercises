function value (x) {
  return typeof x === 'function' ? value(x()) : x
}

module.exports = value
