const setComplement = (firstSet, secondSet) => {
  let complement = new Set([...secondSet].filter(x => !firstSet.includes(x)))
  return Array.from(complement)
}

export default setComplement
