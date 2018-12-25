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
 ******  Fibonacci
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

/***********************
 ******  Reverse a string
 ************************/


function reverseStringRec(str) {
  if (str === '') {
    return str;
  }
  return reverseStringRec(str.substr(1)) + str.charAt(0);
}

reverseStringRec('yoyo mastery')
//should return: 'retsam oyoy'

function reverseStringArr(str) {
  let array = str.split('');
  let reversedArray = [];

  function addToArray(array) {
    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
  }
  addToArray(array);

  return reversedArray.join('');
}

reverseStringArr('hello');