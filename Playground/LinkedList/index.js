const createNode = (value) => {
  return {
    value,
    next: null
  }
}

const customLinkedList = () => {
  return {
    head: null,
    tail: null,
    length: 0,
    push(value) {
      const node = createNode(value);
      this.length++;

      if (this.head === null) {
        this.head = node;
        this.tail = node;

        return node;
      }
      this.tail.next = node;
      this.tail = node;

      return node;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
        this.head = null;

        return node;
      }

      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      this.tail = current;
      this.tail.next = null;

      return node;
    },
    get(index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }

      return node;
    },
    delete (index) {
      if (index < 0 || index > this.length - 1) {
        return null;
      }

      let nodeBeforeDelete = this.head;
      let nodeToDelete;

      if (index === 0) {
        this.head = this.head.next;
        this.length--;

        return nodeBeforeDelete;
      }

      if (index === this.length - 1) {
        nodeToDelete = this.tail;
        this.tail = this.get(index - 1);
        this.tail.next = null;
        this.length--;

        return nodeToDelete;
      }

      for (let i = 0; i < index - 1; i++) {
        nodeBeforeDelete = nodeBeforeDelete.next;
      }

      nodeToDelete = nodeBeforeDelete.next;
      nodeBeforeDelete.next = nodeToDelete.next;
      this.length--;

      return nodeToDelete;

    },
    isEmpty() {
      return this.length === 0;
    }
  }
}

const newList = customLinkedList();
newList.push('first');
newList.push('second');
newList.push('third');
newList.delete(0);
// newList.pop();
newList.pop();
console.log(newList.get(0));
console.log(newList.isEmpty());
console.log(newList.length);
console.log(newList.head);
console.log(newList.tail);
