const setIntersection = (firstSet, secondSet) => {
  const intersection = new Set([...firstSet].filter(x => secondSet.includes(x)));
  if (firstSet.length === 0 || secondSet.length === 0) {
    return undefined
  } return Array.from(intersection);
};

export default setIntersection;
