function memoize (fn) {
  return function memoizedFunction (...args) {
    if (!memoizedFunction.cache) {
      memoizedFunction.cache = {}
    }

    if (memoizedFunction.cache[args]) {
      return memoizedFunction.cache[args]
    } else {
      const value = fn(...args)
      memoizedFunction.cache[args] = value

      return value
    }
  }
}

module.exports = memoize
