//there could possibly be a more concise designation for this function, maybe isGraphConnected
export default function nestedCheckIsConnected(pointsSet) {
  //since your param being passed into the function is called pointsSet maybe a different name for this constant would add readability, maybe paths
  const points = Object.keys(pointsSet);
  const traversed = [points[0]]

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
  //overall these for loops are not sustainable, but I know you are on the right track, really use the 3 arguments you get in the for loop, there is a lot of cool things that get overlooked such as calling functions in them
  const sortedTraversed = traversed.sort()
  const sortedPoints = points.sort()
  //I really like what this is doing, don't often see every used, even though it makes such intuitive sense. Nice work
  let isSameAnswer = (sortedTraversed.length === sortedPoints.length) &&
  sortedTraversed.every(function (element, index) {
    return element === sortedPoints[index]
  })
  return isSameAnswer
}
