const fibonacci = (position) => {
  const answer = [0, 1];

  if (!Number.isInteger(position) || position < 1) {
    return undefined
  }
  if (position === 1) {
    return [0];
  } else if (position === 2) {
    return answer;
  }
  for (let i = 2; i < position; i += 1) {
    const holder = answer[i - 2] + answer[i - 1];
    answer.push(holder);
  }
  return answer;
};

export default fibonacci;
