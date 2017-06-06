function flatten (arr) {
  return arr.reduce((acc, cur) => {
    return Array.isArray(cur)
      ? [...acc, ...flatten(cur)]
      : [...acc, cur]
  }, [])
}

module.exports = flatten
