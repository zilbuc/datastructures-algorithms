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

/***********************
 ******  Factorial
 ************************/

function fibonacciIterative(n) {
  let array = [0, 1];

  for (let i = 2; i <= n; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return array[n];
}

fibonacciIterative(8);

function fibonacciRecursive(n) {

  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

//fibonacciRecursive(7);