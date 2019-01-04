/***********************
 ******  Factorial
 ************************/

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) { //also called 'bottom-up' approach
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

function fibonacciRecursive(n) { //O(2^n)
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(7);

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

/***********************
 ******  DP, Closures
 ************************/

const memoizeFunction = (x) => {
  return memoized = (y) => {
    return x - y;
  }
}

console.log(memoizeFunction(10));

let memoize2 = memoizeFunction(2);

console.log(memoize2(10));

const memoizeFunction2 = (n) => {
  let cache = {};
  return memoized = (n) => {
    if (cache[n]) {
      console.log('cache time');
      return cache[n];
    } else {
      console.log('long time');
      cache[n] = n + 150;
      return cache[n];
    }
  }
}

const memoize = memoizeFunction2();
memoize(85);
memoize(85);

const closures = (function() {
  let count = 0;
  const counter = (n) => {
    return count += n;
  }
  return {
    increment: function() {
      counter(1);
      console.log('+1');
    },
    decrement: function() {
      counter(-1);
      console.log('+1');
    },
    printCount: function() {
      return count;
    }
  };
})();

closures.increment();
closures.increment();
closures.printCount();

let count = 0;
const fibonacci = () => { // Time complexity becomes O(n), but space comp. increases
  let cached = {};
  return function fib(n) {
    count++;
    if (n in cached) {
      return cached[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        return cached[n] = fib(n - 1) + fib(n - 2);
      }
    }
  }
}

const fibo = fibonacci();
console.log(count, ': ', fibo(100));
console.log(count);