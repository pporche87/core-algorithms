const binarySearch = (numbersArray, targetNumber) => {
  let mininumIndex = 0
  let maximumIndex = numbersArray.length - 1;
  let currentIndex,
      currentElement

  if (numbersArray.indexOf(targetNumber) === -1) {
    return undefined
  }

  while (mininumIndex <= maximumIndex) {
    currentIndex = (mininumIndex + maximumIndex) / 2 | 0
    currentElement = numbersArray[currentIndex]
    if (currentElement < targetNumber) {
      mininumIndex = currentIndex + 1
    } else if (currentElement > targetNumber) {
      maximumIndex = currentIndex - 1
    } else {
      return currentIndex
    }
  } return maximumIndex
}

export default binarySearch
