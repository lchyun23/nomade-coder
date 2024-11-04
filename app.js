const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
};

calculator.add(3, 4);
calculator.divide(3, 4);
calculator.minus(5, 6);
calculator.multiply(2, 3);
calculator.powerof(5, 6);
