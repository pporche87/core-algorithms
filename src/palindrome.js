const palindrome = (palindromeString) => {
  let punctuationCompareString = palindromeString.replace(/[\W_]+/g, '').toLowerCase()
  let reversedPunctuationString = punctuationCompareString.split(' ').reverse().join('')
  let reversedString = palindromeString.split('').reverse().join('')

  if (palindromeString.indexOf(',') > -1) {
    return checkIfPalindrome(reversedPunctuationString, punctuationCompareString)
  } else {
    let reversedString = palindromeString.split('').reverse().join('')
    return checkIfPalindrome(reversedString, palindromeString)
  }
}

const checkIfPalindrome = (reversed, original) => {
  if (reversed === original) {
    return true
  } else {
    return false
  }
}

export default palindrome
