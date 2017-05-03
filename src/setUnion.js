const setUnion = (firstSet, secondSet) => {
  const resultSet = new Set([...firstSet, ...secondSet]);
  if (firstSet.length === 0 || secondSet.length === 0) {
    return undefined
  } return Array.from(resultSet);
};

export default setUnion;
