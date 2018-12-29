/***********************
 ******  Bubble sort O(n^2)
 ************************/

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const bubbleSort = (arr) => {
  let temp;
  let swap = 1;;
  for (let j = 0; j < arr.length - 1; j++) {
    if (swap === 0) {
      return arr;
    }
    console.log(swap);
    swap = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap++;
      }
    }
  }
  return arr;
}

bubbleSort(array);

/***********************
 ******  Selection sort O(n^2)
 ************************/

const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

const selectionSort = (arr) => {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }

  return arr;
}

selectionSort(array);

/***********************
 ******  Insertion sort O(n^2), but very good for almost sorted arrays
 ************************/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(arr) {

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (arr[i] < arr[j] && arr[i] > arr[j - 1]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }
  return arr;
}

insertionSort(numbers);

/***********************
 ******  Merge sort O(n log n)
 ************************/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle)
  const right = array.slice(middle)
  // console.log('left:', left);
  // console.log('right:', right);


  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length &&
    rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++
    }
  }
  // console.log(left, right)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


const answer = mergeSort(numbers);
console.log(answer);

/***********************
 ******  Quick sort O(n log n)
 ************************/

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  const len = array.length;
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array, pivot, left, right) {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);