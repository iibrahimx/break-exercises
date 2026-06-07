function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }

  return a / b;
}

function squareRoot(number) {
  if (number < 0) {
    return "Cannot find square root of a negative number";
  }

  return Math.sqrt(number);
}

function power(base, exponent) {
  return base ** exponent;
}

function factorial(number) {
  if (number < 0) {
    return "Factorial cannot be negative";
  }

  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

function performOperation(operation, ...values) {
  return operation(...values);
}

console.log(performOperation(add, 5, 3));
console.log(performOperation(divide, 10, 2));
console.log(performOperation(squareRoot, 25));
console.log(performOperation(factorial, 5));
