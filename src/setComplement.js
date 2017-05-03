const setComplement = (firstSet, secondSet) => {
  const complement = new Set([...secondSet].filter(x => !firstSet.includes(x)));
  if (firstSet.length === 0 || secondSet.length === 0) {
    return undefined
  } return Array.from(complement);
};

export default setComplement;
