const factorial = (number) => {
  let answer = 1;
  if (number === 0) {
    return answer;
  }
  for (let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

export default factorial
