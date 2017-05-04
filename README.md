# Core Algorithms

Tests and implementations for algorithms commonly used in job interviews. See the full list in the [algorithms.md](algorithms.md) file.

Base repository for the [Core Algorithms](http://jsdev.learnersguild.org/goals/123) goal.

## Installation and Setup

For this project, we created both tests and implementations of core algorithms. Begin with installing your dependencies from the package.json file.

If you have trouble with any dependencies. Use the links provided below to access them directly.

[jsdoc](http://usejsdoc.org/)<br>
[npm](https://www.npmjs.com/)<br>
[npm-documentation](https://www.npmjs.com/package/documentation)<br>
[babel](https://babeljs.io/blog/2015/10/31/setting-up-babel-6)<br>
[mocha](https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha)<br>
[chai](http://chaijs.com/)<br>
[eslint](http://eslint.org/)

Use `npm install` in order to install all dependencies.

## Usage and Examples

##### Factorial Function

This is the factorial function and unit test. The factorial function returns the factorial of a number. It returns 1 if handed a 0.

```
const factorial = (number) => {
  let answer = 1;
  if (number === 0) {
    return answer;
  }
  for (let i = number; i > 0; i -= 1) {
    answer *= i;
  }
  return answer;
};

export default factorial;
```

##### Factorial Function Unit Test   
```
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
```
##### Merge Sort Function

This is the mergeSort function and unit test. It sorts and array of numbers using the mergeSort algorithm.
```
const merge = (left, right) => {
  const result = [];
  const leftLength = left.length;
  const rightLength = right.length;
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftLength && rightIndex < rightLength) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  } return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (sortedArray) => {
  const length = sortedArray.length;
  if (length < 2) {
    return sortedArray;
  }
  const middle = Math.floor(length / 2);
  const left = sortedArray.slice(0, middle);
  const right = sortedArray.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;

```

##### Merge Sort Function Unit Test

```
import { expect } from 'chai';
import mergeSort from '../src/mergeSort';

describe('mergeSort()', () => {
  it('should be a function', () => {
    expect(mergeSort).to.be.a('function');
  });

  it('Sort an array of numbers using the merge sort algorithm.', () => {
    expect(mergeSort([10,
      2,
      7,
      5,
      8,
      3,
      6,
      1,
      4,
      9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(mergeSort([3,
      5,
      7,
      9,
      2,
      8,
      6,
      1,
      4,
      10])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
```
# Core Algorithms

## Specifications

- [x] Artifact produced is a fork of the core-algorithms repo.
- [x] Can run all tests with npm test.
- [x] makeChange() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for makeChange() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] fizzBuzz() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for fizzBuzz() exist.
- [x] isPalindrome() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for isPalindrome() exist with at least 2 unit tests using valid inputs.
- [x] factorial() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for factorial() exist with at least 2 unit tests using valid inputs.
- [x] fibonacci() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for fibonacci() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] collatzConjecture() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for collatzConjecture() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] setUnion() algorithm is implemented according to the description in algorithms.md.
- [x]Tests for setUnion() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] setIntersection() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for setIntersection() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] setComplement() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for setComplement() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] setSymmetricDifference() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for setSymmetricDifference() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] binarySearch() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for binarySearch() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] bubbleSort() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for bubbleSort() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] mergeSort() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for mergeSort() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] closestPair() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for closestPair() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] isConnectedGraph() algorithm is implemented according to the description in algorithms.md.
- [x] Tests for isConnectedGraph() exist with at least 2 unit tests using valid inputs, and at least 1 unit test using invalid inputs.
- [x] Repository includes a README file with basic installation and setup instructions.
- [x] All dependencies are properly declared in package.json.
- [x] All major features are added via pull requests with a clear description and concise commit messages.
- [x] Code uses a linter and there are no linting errors.
- [x] Variables, functions, files, etc. have appropriate and meaningful names.
- [x] Functions are small and serve a single purpose.
- [x] The artifact produced is properly licensed, preferably with the MIT license.

## Stretch

Pick a different programming language from JavaScript (e.g. Ruby, Swift, Python, C, Java…) and write tests & implementations for each.

- [ ] Can run all non-JavaScript tests with a single command.
- [ ] For each algorithm identified above, there exists:
  - [ ] a test file with multiple unit tests for each algorithm in a language other than JavaScript.
  - [ ] an implementation file with a correct implementation of the algorithm in a language other than JavaScript.
