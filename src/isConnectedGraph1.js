
let visitedPoints = []
const traverseGraph = (graphPoint, pathToGraphKeys) => {
  visitedPoints.push(graphPoint)
  for (let i = 0; i < pathToGraphKeys.length + 1; i++) {
    if (!visitedPoints.includes(pathToGraphKeys[i])) {
      return pathToGraphKeys[i]
    }
  } return false
}

const isConnectedGraph = (graph) => {
  let i = 0
  let nextPoint = true
  let resultArray = []
  let graphPoints = Object.keys(graph).map(function(key) {
    return key
  })
  let paths = Object.keys(graph).map(function(key) {
    return graph[key]
  })
  while (nextPoint !== undefined) {
    visitedPoints.push(graphPoints[i])
    nextPoint = traverseGraph(graphPoints[i], paths[i])
    if (nextPoint === false) {
      return false
    } i++
  }
  graphPoints.forEach(graphPoint => {
    if (!visitedPoints.includes(graphPoint)) {
      resultArray.push(false)
      } else {
      resultArray.push(true)
      }
  })
  if (resultArray.includes(false)) {
    resultArray = []
    visitedPoints = []
    return false
  } else {
    resultArray = []
    visitedPoints = []
    return true
  }
}

export default isConnectedGraph;
