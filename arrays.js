/***********************
 ******  Array methods and BigO
 ************************/
const array = ['a', 'b', 'c', 'd'];

array.push('e');

// .pop - opposite to .push, both O(1)

array.pop();

// .unshift - add to beginning, so O(n) - changes all indexes

array.unshift('x');

// .splice - O(n) - delete + insert and certain index

array.splice(2, 0, 'z');

console.log(array);

/***********************
 ******  forEach vs for ... of for array
 ************************/
const array = [1, 2, 3, 4, 5, 'nemo'];
const large = new Array(10000).fill('nemo');

const findNemo = arr => {
  arr.forEach((num, ind) => {
    if (num === 'nemo') {
      console.log('found it - ', ind + 1, 'th item in the array!');
    }
  })
}

findNemo(array);
//findNemo(large);

const findNemo2 = arr => {
  for (let num of arr) {
    if (num === 'nemo') {
      console.log('found it!', num);
    }
  }
}

findNemo2(array);

/***********************
 ******  Find matching item pair in 2 arrays
 ************************/
const array1 = ['a', 'f'];
const array2 = ['f', 'c', 'z'];


const findMatch = (arr1, arr2) => {
  const map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

//findMatch(array1, array2);

const findMatch2 = (arr1, arr2) => {
  return arr1.some(item => arr2.includes(item));
}

//findMatch2(array1, array2);

/***********************
 ******  Find if there is certain sum of 2 numbers in an array
 ************************/
const array3 = [1, 9, 5, 8];
const num = 9;
// O(n)
const isSum = (arr, sum) => {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      console.log(set);
      return true;
    }
    set.add(sum - arr[i]);
  }
  return false;
}

isSum(array3, num);

/***********************
 ******  Find if there is certain sum of 2 numbers in an array and return their indexes
 ************************/
/*Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

const nums = [2, 7, 11, 15];
const target = 17;

const indexes = (arr, sum) => {
  //check inputs
  if (typeof sum !== 'number' || arr.length < 2) {
    return 'Bad inputs';
  }

  //assign variables
  const answer = [];
  const set = new Set;

  //solution
  for (let j = 0; j < nums.length; j++) {
    if (set.has(arr[j])) {
      const an = [...set];
      answer[1] = j;
      answer[0] = an.indexOf(arr[j]);
      return answer;
    }
    set.add(sum - arr[j]);
  }

  return 'No such 2 numbers'
}

indexes(nums, target);

/***********************
 ******  Creating an array in JS
 ************************/

class myArray {
  constructor(length, data) {
    this.length = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem; //this is what JS arrays do
  }

  delete(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  // How JS does it:
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const array = new myArray();

array.push(2);
array.push(5);
array.push(5);
array.push(5);
array.push(5);
array.pop();
//array.delete(3);
array.deleteAtIndex(1);

console.log(array);

/***********************
 ******  Reverse a string
 ************************/

const string = 'Someone coming';
const string2 = 'a';
const string3 = 'ab';
const string4 = 2;
const string5 = null;


function reverse(input) {
  // check input
  if (!input || input.length < 2 || typeof input !== 'string') {
    return "Pffff, pffff, fffff....sssss..ffffff";
  }

  const array = [];
  const array2 = [];

  for (let i = 0; i < input.length; i++) {
    array.push(input[input.length - 1 - i]);
  }

  return array.join(''); // .toString would do with commas in between letters
}

//everse(string);
//reverse(string2);
//reverse(string3);
//reverse(string4);
//reverse(string5);

//OR
const reverse2 = str => str.split('').reverse().join('');
//OR
const reverse3 = str => [...str].reverse().join('');

//reverse2(string);
reverse3(string3);

/***********************
 ****** Merge Arrays
 ************************/

const array1 = [0, 3, 4, 35];
const array2 = [3, 4, 6, 33];
const a3 = [];

const mergeArrays = (arr1, arr2) => {
  if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
    return 'Bad input';
  }

  const merged = arr1.concat(arr2).sort((a, b) => a - b);
  return merged;
}

//mergeArrays(array1, a3);

const mergeArrays2 = (arr1, arr2) => {

  arr1.forEach((item, ind) => {
    arr2.push(arr1[ind]);
  })
  return arr2.sort((a, b) => a - b);
  // or write a loop?
}

//mergeArrays2(array1, array2);

const mergeArrays3 = (arr1, arr2) => {
  const merged = [];
  let firstArrayItem = arr1[0];
  let secondArrayItem = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (firstArrayItem || secondArrayItem) {
    if (firstArrayItem === undefined || firstArrayItem > secondArrayItem) {
      merged.push(secondArrayItem);
      secondArrayItem = arr2[j];
      j++
    } else {
      merged.push(firstArrayItem);
      firstArrayItem = arr1[i];
      i++;
    }
  }
  return merged;
}

mergeArrays3(array1, array2);

/***********************
 ****** Merge Arrays
 ************************/