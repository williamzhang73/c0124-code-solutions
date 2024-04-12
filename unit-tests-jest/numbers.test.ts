import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';
describe('evenNumbers', () => {
  it('return [] when input array is [] ', () => {
    const empty = evenNumbers([]);
    expect(empty).toEqual([]);
  });
  it('return only even numbers', () => {
    const result = evenNumbers([0, 1, 2, 3, 4, 5]);
    expect(result).toEqual([0, 2, 4]);
  });
  it('input value should be integer', () => {
    const result = evenNumbers([50.5, 2, 6, 5]);
    expect(result).toEqual([2, 6]);
  });
});

describe('toDollars', () => {
  it('dollar value should be positive', () => {
    const result = toDollars(-5);
    expect(result).toEqual('bigger than 0');
  });
  it('dollar value should be integer', () => {
    const result = toDollars(20.5);
    expect(result).toEqual('undefined');
  });
});

describe('divideBy', () => {
  it('return [] when input value is []', () => {
    const result = divideBy([], 5);
    expect(result).toEqual([]);
  });
  it('each element in new array should be divided by divisor', () => {
    const result = divideBy([4, 6, 8], 2);
    expect(result).toEqual([2, 3, 4]);
  });
  it('original array not modified', () => {
    const input = [4, 6, 8];
    divideBy(input, 2);
    expect(input).toEqual([4, 6, 8]);
  });
});

describe('multiplyBy', () => {
  it('return {} when input value is {} ', () => {
    const result = multiplyBy({}, 5);
    expect(result).toEqual({});
  });
  it('no modification if value not a number', () => {
    const result = multiplyBy({ key1: 'value' }, 5);
    expect(result).toEqual({ key1: 'value' });
  });
  it('value should be multiplied', () => {
    const result = multiplyBy({ key: 5 }, 5);
    expect(result).toEqual({ key: 25 });
  });
});
