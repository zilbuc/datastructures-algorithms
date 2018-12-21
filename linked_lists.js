/***********************
 ******  Creating A Custom Singly Linked List in JS
 ************************/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head,
      this.length = 1
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(value, index) {
    if (index >= this.length) {
      this.append(value);
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index - 1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
    }
    return this.printList();
  }

  remove(index) {
    if (index <= 0) {
      this.head = this.head.next;
      this.length--;
    } else if (index >= this.length - 1) {
      let leader = this.traverseToIndex(this.length - 2);
      leader.next = null;
      this.tail = leader;
      this.length--;
    } else {
      let leader = this.traverseToIndex(index - 1);
      let removable = leader.next;
      leader.next = removable.next;
      this.length--;
    }
    return this.printList();
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    let counter = 0;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
//myLinkedList.append(14);
//myLinkedList.append(9);
myLinkedList.prepend(1);
myLinkedList.insert(50, 2);
myLinkedList.remove(-5);
//myLinkedList.printList();
//console.log(myLinkedList);

/***********************
 ******  Creating A Custom Doubly Linked List in JS
 ************************/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    let newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    let newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  insert(value, index) {
    if (index <= 0) {
      this.prepend(value);
    } else if (index >= this.length - 1) {
      this.append(value);
    } else {
      const newNode = new Node(value);

      const leader = this.traverseToIndex(index - 1);
      const follower = leader.next;

      leader.next = newNode;
      follower.prev = newNode;
      newNode.next = follower;
      newNode.prev = leader;
      this.length++;
    }

    return this;
  }

  remove(index) {
    if (index <= 0) {
      let newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
    } else if (index >= this.length - 1) {
      let newTail = this.tail.prev;
      this.tail = newTail;
      this.tail.next = null;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const remainer = leader.next.next;

      remainer.prev = leader;
      leader.next = remainer;
    }
    this.length--;
    return this;
  }

  traverseToIndex(index) {
    let currentBucket = this.head;
    let counter = 0;
    while (index !== counter) {
      currentBucket = currentBucket.next;
      counter++;
    }
    return currentBucket;
  }

  printList() {
    let array = [];
    let currentBucket = this.head;

    for (let i = 0; i < this.length; i++) {
      array.push(currentBucket.value);
      currentBucket = currentBucket.next;
    }
    // check if prev works:
    /*let currentBucket = this.tail;

    for (let i = 0; i < this.length; i++) {
      array.push(currentBucket.value);
      currentBucket = currentBucket.prev;
    }*/
    return array;
  }

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(15);
myLinkedList.append(6);
myLinkedList.prepend(1);
myLinkedList.insert(99, 3);
myLinkedList.remove(5);
myLinkedList.printList();