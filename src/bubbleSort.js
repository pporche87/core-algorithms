const bubbleSort = (sortedArray) => {
  if (!Array.isArray(sortedArray)) {
    return undefined;
  }
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < sortedArray.length; i += 1) {
      if (sortedArray[i] > sortedArray[i + 1]) {
        const temp = sortedArray[i];
        sortedArray[i] = sortedArray[i + 1];
        sortedArray[i + 1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped);
  return sortedArray;
};

export default bubbleSort;
