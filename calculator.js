class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  static add() {
    return this.a + this.b;
  }

  static substract() {
    return this.a - this.b;
  }

  static divide() {
    return this.a / this.b;
  }

  static multiply() {
    return this.a * this.b;
  }
};

const calculator = { Calculator };

module.exports = calculator;
