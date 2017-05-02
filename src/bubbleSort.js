const bubbleSort = (sortedArray) => {
  if (!Array.isArray(sortedArray)) {
    return undefined
  }
  let swapped
  do {
    swapped = false
    for (let i = 0; i < sortedArray.length; i++) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        let temp = sortedArray[i]
        sortedArray[i] = sortedArray[i + 1]
        sortedArray[i + 1] = temp
        swapped = true
      }
    }
  }
  while (swapped)
  return sortedArray
}

export default bubbleSort
