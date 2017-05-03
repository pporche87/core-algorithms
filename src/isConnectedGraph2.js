export default function nestedCheckIsConnected(pointsSet) {
  const points = Object.keys(pointsSet);
  const traversed = [];
  traversed.push(points[0]);

  for (let i = 0; i < points.length; i += 1) {
    for (let j = 0; j < pointsSet[points[i]].length; j += 1) {
      const count = traversed.length;
      for (let k = 0; k <= count; k += 1) {
        if (pointsSet[points[i]][j] === traversed[k]) {
          k = count;
        } else if (k === count && pointsSet[points[i]][j] !== traversed[k]) {
          traversed.push(pointsSet[points[i]][j]);
        }
      }
    }
  }
  const sortedTraversed = traversed.sort()
  const sortedPoints = points.sort()
  let isSameAnswer = (sortedTraversed.length === sortedPoints.length) &&
  sortedTraversed.every(function (element, index) {
    return element === sortedPoints[index]
  })
  return isSameAnswer
}
