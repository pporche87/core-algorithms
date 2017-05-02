const closestPair = (coordinateSet) => {
  let answer = {};
  answer.pair = [];
  answer.distance = Infinity

  for (let i = 0; i < coordinateSet.length - 1; i++) {
    let compare = coordinateSet[i];
    for (let j = i + 1; j < coordinateSet.length; j++ ) {
      let current = coordinateSet[j];
      if (Math.sqrt(Math.pow((current[0] - compare[0]), 2) + Math.pow((current[1] - compare[1]),2) < answer.distance)) {
        answer.pair = [compare, current];
        answer.distance = Math.sqrt(Math.pow((current[0] - compare[0]), 2) + Math.pow((current[1] - compare[1]),2))
      }
    }
  }
  return answer;
}

export default closestPair
