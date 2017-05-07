const checkIfPalindrome = (reversed, original) => {
  if (reversed === original) {
    return true;
  }
  return false;
};

const isPalindrome = (palindromeString) => {
  const punctuationCompareString = palindromeString.replace(/[\W_]+/g, '').toLowerCase();
  const reversedPunctuationString = punctuationCompareString.split(' ').reverse().join('');

  console.log(reversedPunctuationString, punctuationCompareString);
  if (palindromeString.indexOf(',') > -1) {
    //you can just use a ternary here like:
    //return reversedPunctuationString === punctuationCompareString ? true : false
    return checkIfPalindrome(reversedPunctuationString, punctuationCompareString);
  }
  const reversedString = palindromeString.split('').reverse().join('');
  //same here
  return checkIfPalindrome(reversedString, palindromeString);
};

export default isPalindrome;
