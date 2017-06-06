function curry (fn) {
  const arity = fn.length

  return function f1 (...args) {
    if (args.length >= arity) {
      return fn(...args)
    } else {
      return function f2 (...args2) {
        return f1(...args, ...args2)
      }
    }
  }
}

module.exports = curry
