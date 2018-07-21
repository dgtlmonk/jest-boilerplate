expect.extend({
  toBeDivisibleBy(received, argument) {
    const pass = received % argument == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${argument}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be divisible by ${argument}`,
        pass: false,
      };
    }
  },
  isNumber(received, argument) {
    return {
      message: () => `expected ${received} to be a number`,
      pass: !isNaN(received)
    }
  }
});

test('even and odd numbers', () => {
  const a = 100;
  expect(`${a}`).toBeDivisibleBy(2);
  expect(101).not.toBeDivisibleBy(2);
  expect({ apples: 6, bananas: 3 }).toEqual({
    apples: expect.toBeDivisibleBy(2),
    bananas: expect.not.toBeDivisibleBy(2),
  });
});

test('isNumber', () => {
  expect(100).isNumber()

});