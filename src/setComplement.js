const setComplement = (firstSet, secondSet) => {
  const complement = new Set([...secondSet].filter(x => !firstSet.includes(x)));
  return Array.from(complement);
};

export default setComplement;
