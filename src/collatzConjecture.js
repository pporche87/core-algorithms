const collatzConjecture = (number) => {
  let workingNumber = number;
  const workingArray = [];

  if (!Number.isInteger(number)) {
    return undefined
  }

  if (number === 1) {
    return [1];
  }

  while (workingNumber !== 1) {
    if (workingNumber % 2) {
      workingArray.push(workingNumber);
      workingNumber = (workingNumber * 3) + 1;
    } else {
      workingArray.push(workingNumber);
      workingNumber /= 2;
    }
  }

  workingArray.push(workingNumber);
  return workingArray;
};

export default collatzConjecture;
