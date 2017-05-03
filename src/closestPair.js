const closestPair = (coordinateSet) => {
  const answer = {};
  answer.pair = [];
  answer.distance = Infinity;

  for (let i = 0; i < coordinateSet.length - 1; i += 1) {
    const compare = coordinateSet[i];
    for (let j = i + 1; j < coordinateSet.length; j += 1) {
      const current = coordinateSet[j];
      if (Math.sqrt(((current[0] - compare[0]) ** 2) + ((current[1] - compare[1]) ** 2) < answer.distance)) {
        answer.pair = [compare, current];
        answer.distance = Math.sqrt(((current[0] - compare[0]) ** 2) + ((current[1] - compare[1]) ** 2));
      }
    }
  }
  return answer;
};

export default closestPair;
