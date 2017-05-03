import { expect } from 'chai';
import setUnion from '../src/setUnion';

describe('setUnion()', () => {
  it('should be a function', () => {
    expect(setUnion).to.be.a('function');
  });

  it('Return the union of two sets.', () => {
    const firstSet = [1, 2, 3, 4];
    const secondSet = [2, 4, 6, 8];
    expect(setUnion(firstSet, secondSet)).to.deep.equal([1, 2, 3, 4, 6, 8]);
  });

  it('Return the union of two sets.', () => {
    const firstSet = [3, 6, 9, 12];
    const secondSet = [6, 7, 8, 9];
    expect(setUnion(firstSet, secondSet)).to.deep.equal([3, 6, 9, 12, 7, 8]);
  });

  it('Will not try to evaluate empty things', () => {
    expect(setUnion('', '')).to.equal(undefined);
  });
});
