function map (arr, callback, context = null) {
  return arr.reduce((acc, cur, index, curArr) => {
    return [...acc, callback.call(context, cur, index, curArr)]
  }, [])
}

module.exports = map
