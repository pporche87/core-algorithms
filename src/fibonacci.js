const fibonacci = (position) => {
  let answer = [0,1];
  if (position === 1) {
    return [0];
  } else if (position === 2) {
    return answer;
  } else {
    for (i = 2; i < position; i++){
      let holder = answer[i-2] + answer[i-1];
      answer.push(holder);
    }
    return answer;
  }
}

export default fibonacci
