function sort (arr) {
  const { length } = arr

  if (length < 2) {
    return arr
  }

  const middle = Math.floor(length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  function stitch (left, right) {
    const results = []

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        results.push(left.shift())
      } else {
        results.push(right.shift())
      }
    }

    while (left.length) {
      results.push(left.shift())
    }

    while (right.length) {
      results.push(right.shift())
    }

    return results
  }

  return stitch(sort(left), sort(right))
}

module.exports = sort
