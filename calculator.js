exports.calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiplay(a, b) {
    this.a = a;
    this.b = b;
    return this.a * this.b;
  },
  divide(a, b) {
    if (b === 0) {
      throw 'Invalid: division by zero';
    }

    return a / b;
  },
};
