const setComplement = (firstSet, secondSet) => {
  //when working with arrays it is better to use indexOf, I believe node's next patch when it comes out is making includes unusable unless the type of the data is a string.
  const complement = new Set([...secondSet].filter(x => !firstSet.includes(x)));
  if (firstSet.length === 0 || secondSet.length === 0) {
    return undefined
  } return Array.from(complement);
};

export default setComplement;
