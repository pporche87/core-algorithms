const setUnion = (firstSet, secondSet) => {
  const resultSet = new Set([...firstSet, ...secondSet])
  return Array.from(resultSet) 
}

export default setUnion
