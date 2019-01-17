/*Given a list of numbers and a number k, return whether any two numbers from the
list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?*/

const array = [10, 15, 3, 7];
const k = 17;

const findSum = (arr, k) => {
  // check inputs
  if (typeof(arr) !== 'object' || arr.length < 2 || typeof(k) !== 'number') {
    return 'Bad inputs';
  }

  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return true;
    } else {
      set.add(k - arr[i]);
    }
  }

  return false;
}

findSum(array, k);

/*This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i
of the new array is the product of all the numbers in the original array except
the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be
[2, 3, 6].

Follow-up: what if you can't use division?*/

const array = [1, 2, 3, 4, 5];

const newArray = arr => {
  // check inputs
  if (typeof(arr) !== 'object' && !(arr instanceof Array) && arr.length < 2) {
    return 'Bad inputs';
  }

  let mult = 1;

  for (let i = 0; i < array.length; i++) {
    mult *= array[i];
  }

  return arr.map(num => mult / num);
}

newArray(array);

const newArrayNoDivision = arr => {
  //check inputs

  const ln = arr.length;
  const container = [{ product: 1, item : arr[0]}];

  for (let i = 1; i < ln; i++) {
    const product = container[i-1].product * container[i-1].item;
    container.push({ product: product, item: arr[i]});
  }

  let remainer = 1;
  for (let i = ln-1; i >= 0; i--) {
    container[i].product = container[i].product * remainer;
    remainer = remainer * container[i].item;
  }

  return container.map(({product}) => product);
}

newArrayNoDivision(array);

/*This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the
tree into a string, and deserialize(s), which deserializes the string back into
the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'*/
