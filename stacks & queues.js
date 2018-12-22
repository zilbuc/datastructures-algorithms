/***********************
 ******  Creating A Stack with a Singly Linked List in JS
 ************************/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyStack {
  constructor(value) {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    const ln = this.length;

    if (ln === 0) {
      this.top = newNode;
      this.bottom = this.top;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      this.top.next = oldTop;
    }

    this.length++;
    return this;
  }

  pop() {
    const ln = this.length;

    if (ln === 0) {
      return "error - empty stack";
    } else if (ln === 1) {
      this.top = null;
      this.bottom = null;
    } else {
      /*if removed item is still needed in memory:
      const oldTop = this.top;*/
      this.top = this.top.next;
    }

    this.length--;
    return this;

  }

  peek() {
    return this.top.value;
  }

  printList() {
    const array = [];
    let currentBucket = this.top;
    while (currentBucket) {
      array.push(currentBucket.value);
      currentBucket = currentBucket.next;
    }

    return array;
  }

  isEmpty() {
    if (!this.top) {
      return true;
    }
    return false;
  }
}

const newStack = new MyStack();
newStack.push(1);
newStack.pop();
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.push(6);
newStack.push(7);

newStack.printList();
newStack.pop();
/*newStack.peek();
newStack.pop();
newStack.isEmpty();*/

/***********************
 ******  Creating A Stack with an Array in JS
 ************************/

class Stack {
  constructor() {
    this.data = [];
    //this.length = 0;
  }

  push(value) {
    this.data.push(value);
    //this.length++;
    return this;
  }

  pop() {
    this.data.pop();
    //this.length--;
    return this;
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  printStack() {
    return this;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push('ona');
myStack.push('ono');
myStack.push(99);
myStack.printStack();
//myStack.pop();
//myStack.peek();

/***********************
 ******  Creating A Queue with a LinkedList in JS
 ************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqeueu(value) {
    const item = new Node(value);

    if (!this.first) {
      this.first = item;
      this.last = item;
    } else {
      this.last.next = item;
      this.last = item;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return 'error - empty queue';
    }
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    this.length--;
    return this;
  }

  peek() {
    return this.first;
  }

  printQueue() {
    const array = [];
    let currentItem = this.first;
    while (currentItem) {
      array.push(currentItem.value);
      currentItem = currentItem.next;
    }
    return array;
  }
}

const queue = new MyQueue();
queue.enqeueu(1);
queue.enqeueu(2);
queue.enqeueu('three');
queue.enqeueu(99);
//queue.printQueue();
//queue.dequeue();
//queue.peek();