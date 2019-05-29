const { customQueue } = require('./index');

const priorityQueue = () => {
  const lowPriorityQueue = customQueue();
  const highPriorityQueue = customQueue();

  return {
    enqueue(item, priority = false) {
      priority
        ? highPriorityQueue.enqueue(item)
        : lowPriorityQueue.enqueue(item)
    },
    dequeue() {
      if (highPriorityQueue.isEmpty()) {
        return lowPriorityQueue.dequeue();
      }

      return highPriorityQueue.dequeue();
    },
    peek() {
      if (highPriorityQueue.isEmpty()) {
        return lowPriorityQueue.peek();
      }

      return highPriorityQueue.peek();
    },
    get length() {
      return highPriorityQueue.length + lowPriorityQueue.length;
    },
    isEmpty() {
      return (highPriorityQueue.length === 0 && lowPriorityQueue.length === 0);
    }
  }
}


const newQueue = priorityQueue();

newQueue.enqueue('first item');
newQueue.enqueue('second item');
newQueue.enqueue('priority item', true);
newQueue.dequeue();
console.log(newQueue.length);
console.log(newQueue.peek());
console.log(newQueue.isEmpty());
