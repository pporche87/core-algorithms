import { expect } from 'chai';
import closestPair from '../src/closestPair';

describe('closestPair()', () => {
  it('should be a function', () => {
    expect(closestPair).to.be.a('function');
  });

  it('Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.', () => {
    const points = [[2, 1], [4, 0], [-1, 0],
    [5, 3], [-2, 5], [3, -3], [-2, 0], [3, 4], [5, -4], [0, -2]];
    expect(closestPair(points)).to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 });
  });

  it('Given a set of points on a 2-dimensional plane, return the pair of points with the least distance between them.', () => {
    const points = [[2, 1], [4, 0], [4, 0],
    [5, 3], [-2, 5], [3, -6], [-2, 0], [3, 4], [5, -4], [0, -2]];
    expect(closestPair(points)).to.deep.equal({ pair: [[4, 0], [4, 0]], distance: 0 });
  });

  it('Will not try to execute when only given one thing', () => {
    expect(closestPair([[1, 1]])).to.equal(undefined);
  });
});
