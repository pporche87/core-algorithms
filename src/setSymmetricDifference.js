import setUnion from '../src/setUnion'

const setSymmetricDifference = (firstSet, secondSet) => {
  let compareFirst = new Set([...firstSet].filter(x => !secondSet.includes(x)))
  let compareSecond = new Set([...secondSet].filter(x => !firstSet.includes(x)))
  return setUnion(compareFirst, compareSecond)
}

export default setSymmetricDifference
