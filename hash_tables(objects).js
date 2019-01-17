/***********************
 ******  Creating An Object in JS
 ************************/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    };
    this.data[hash].push([key, value]);
    return this.data;
  }

  get(key) {
    let hash = this._hash(key);
    const currentBucket = this.data[hash];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    return keysArray;
  }

}

const array = new HashTable(2);
array.set('apples', 25);
array.set('grapes', 1000);
array.set('penis', 123);
array.set('genis', 987654);
array.set('benis', 0);
array.set('renis', 555);
array.keys();

/***********************
 ******  Find first recurring character in given array
 ************************/


//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Solution with Set();
function firstRecurringCharacter(input) {
  const ln = input.length;

  if (typeof input !== 'object' || ln < 2) {
    return 'Bad inputs';
  }

  const compSet = new Set();

  for (let i = 0; i < ln; i++) {
    if (compSet.has(input[i])) {
      return input[i];
    } else {
      compSet.add(input[i]);
    }
  }

  return undefined;
}

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

firstRecurringCharacter([2, 2]);

// Solution with object
function firstRecurringCharacter2(input) {
  const ln = input.length;

  if (typeof input !== 'object' || ln < 2) {
    return 'Bad inputs';
  }

  let compSet = {};

  for (let i = 0; i < ln; i++) {
    if (compSet[input[i]] !== undefined) {
      return input[i];
    } else {
      compSet[input[i]] = i;
    }
  }

  return undefined;
}

firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]);
