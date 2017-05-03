import { expect } from 'chai';
import collatzConjecture from '../src/collatzConjecture';

describe('collatzConjecture()', () => {
  it('should be a function', () => {
    expect(collatzConjecture).to.be.a('function');
  });

  it('should give you an array of [1] when handed 1', () => {
    expect(collatzConjecture(1)).to.deep.equal([1]);
  });

  it('should give you a lengthy array when handed 7', () => {
    expect(collatzConjecture(7)).to.deep.equal([7,
      22,
      11,
      34,
      17,
      52,
      26,
      13,
      40,
      20,
      10,
      5,
      16,
      8,
      4,
      2,
      1]);
  });
});
