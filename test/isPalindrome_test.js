import { expect } from 'chai';
import isPalindrome from '../src/isPalindrome';

describe('isPalindrome()', () => {
  it('should be a function', () => {
    expect(isPalindrome).to.be.a('function');
  });

  it('Determine if a string is a palindrome. Return true or false.Ignore punctuation, spacing, and case sensitivity.)', () => {
    expect(isPalindrome('radar')).to.equal(true);
    expect(isPalindrome('bananas')).to.equal(false);
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.equal(true);
  });
});
