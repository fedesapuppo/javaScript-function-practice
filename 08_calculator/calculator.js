const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;y
};

const sum = function(array) {
	return array.reduce((a, b) => a + b, 0)
};

const multiply = function(array) {
  return array.reduce((a, b) => a * b, 1)
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(n) {
  let result = 1;
  if (n === 0 || n === 1){
    return result;
  }else{
    for(let i = n; i >= 1; i--){
      result = result * i;
    }
    return result;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
