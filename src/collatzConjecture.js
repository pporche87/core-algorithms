const collatzConjecture = (number) => {
  let working_number = number;
  let working_array = [];


  if (number === 1) {
    return [1]; }

  while (working_number !== 1) {
    if (working_number % 2) {
      working_array.push(working_number);
      working_number = working_number * 3 + 1;
    } else {
      working_array.push(working_number);
      working_number /= 2;
    }
  }

  working_array.push(working_number);
  return working_array;
}

export default collatzConjecture
