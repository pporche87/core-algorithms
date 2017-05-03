const checkIfPalindrome = (reversed, original) => {
  if (reversed === original) {
    return true;
  }
  return false;
};

const isPalindrome = (palindromeString) => {
  const punctuationCompareString = palindromeString.replace(/[\W_]+/g, '').toLowerCase();
  const reversedPunctuationString = punctuationCompareString.split(' ').reverse().join('');

  if (palindromeString.indexOf(',') > -1) {
    return checkIfPalindrome(reversedPunctuationString, punctuationCompareString);
  }
  const reversedString = palindromeString.split('').reverse().join('');
  return checkIfPalindrome(reversedString, palindromeString);
};

export default isPalindrome;
