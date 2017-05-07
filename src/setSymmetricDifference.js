import setUnion from '../src/setUnion';

const setSymmetricDifference = (firstSet, secondSet) => {
  if (firstSet.length === 0 || secondSet.length === 0) {
    return undefined
  }
  //same with previous comment regarding includes, otherwise logic looks good
  const compareFirst = new Set([...firstSet].filter(x => !secondSet.includes(x)));
  const compareSecond = new Set([...secondSet].filter(x => !firstSet.includes(x)));
  return setUnion(compareFirst, compareSecond);
};

export default setSymmetricDifference;
