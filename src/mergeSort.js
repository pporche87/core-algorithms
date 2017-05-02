const mergeSort = (sortedArray) => {
  let length = sortedArray.length
  if (length < 2) {
    return sortedArray
  }
  let middle = Math.floor(length / 2)
  let left = sortedArray.slice(0, middle)
  let right = sortedArray.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
  let result = []
  let leftLength = left.length
  let rightLength = right.length
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++])
    } else {
      result.push(right[rightIndex++])
    }
  } return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

export default mergeSort
