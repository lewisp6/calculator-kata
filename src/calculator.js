const R = require('ramda');

const hasNegativeNumbers = function hasNegativeNumbers(negativeNumbers) {
  return R.gt(negativeNumbers.length, 0);
}

const extractNegativeNumbers = function extractNegativeNumbers(numbers) {
  return R.filter(R.gt(0), numbers)
}

const convertStringToInt = R.compose(
  R.filter(R.gt(1000)),
  R.map(parseInt),
  R.split(/[\s,]+/)
);

const calculator = {
  add: function add(numbers) {
    const numberArray = convertStringToInt(numbers);
    const negativeNumbers = extractNegativeNumbers(numberArray);

    if (hasNegativeNumbers(negativeNumbers)) {
      throw 'negatives not allowed. ' + negativeNumbers;
    }

    return numbers ? R.sum(numberArray) : 0;
  }
}

module.exports = calculator;
