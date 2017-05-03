import { expect } from 'chai';
import factorial from '../src/factorial';

describe('factorial()', () => {
  it('should be a function', () => {
    expect(factorial).to.be.a('function');
  });

  it('return the factorial of a number.', () => {
    expect(factorial(5)).to.equal(120);
  });

  it('returns 1 if handed 0', () => {
    expect(factorial(0)).to.equal(1);
  });
});
