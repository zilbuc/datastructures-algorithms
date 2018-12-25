/***********************
 ******  Factorial
 ************************/

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = 1; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

findFactorialRecursive(5);
//findFactorialIterative(5);