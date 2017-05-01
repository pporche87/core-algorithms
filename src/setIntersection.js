const setIntersection = (firstSet, secondSet) => {
  let intersection = new Set([...firstSet].filter(x => secondSet.includes(x)))
  return Array.from(intersection)
}

export default setIntersection
