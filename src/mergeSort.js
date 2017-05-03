const merge = (left, right) => {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  } return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (sortedArray) => {
  const length = sortedArray.length;
  if (length < 2) {
    return sortedArray;
  }
  const middle = Math.floor(length / 2);
  const left = sortedArray.slice(0, middle);
  const right = sortedArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
