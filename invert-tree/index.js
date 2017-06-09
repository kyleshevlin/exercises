function invertTree (node) {
  if (!node) {
    return
  }

  const { left, right } = node

  left ? (node.right = left) : delete node.right
  right ? (node.left = right) : delete node.left

  invertTree(left)
  invertTree(right)
}

module.exports = invertTree
