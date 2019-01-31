const calculator = require('./../src/calculator');

describe('add', () => {
  it('returns 0 for an empty string', () => {
    expect(calculator.add('')).toEqual(0);
  });

  it('returns the number that has been passed', () => {
    expect(calculator.add('1')).toEqual(1);
  });

  it('returns the sum of 2 numbers', () => {
    expect(calculator.add('1, 6')).toEqual(7);
  });

  it('returns sum of multiple numbers', () => {
    expect(calculator.add('1, 3, 5, 7')).toEqual(16);
  });

  it('returns sum of arguments with a linespace', () => {
    expect(calculator.add('1 \n2, 3, 4')).toEqual(10);
  });

  it('returns negatives not allowed if negative has been passed', () => {
    function addWithNegative() {
      calculator.add('-1, 2, -3, 4');
    }

    expect(addWithNegative).toThrow('negatives not allowed. -1,-3');
  });

  it('should ignore numbers greater than 1000', () => {
    expect(calculator.add('1, 3, 1001')).toEqual(4);
  });
})
