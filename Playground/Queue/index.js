const kju = {};

kju.customQueue = () => {
  const queue = [];

  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      return queue.pop();
    },
    peek() {
      return queue[queue.length - 1];
    },
    get length() {
      return queue.length;
    },
    isEmpty() {
      return queue.length === 0;
    }
  }
}

// const newQueue = kju.customQueue();
//
// newQueue.enqueue('first item');
// newQueue.enqueue('second item');
// newQueue.dequeue();
// console.log(newQueue.length);
// console.log(newQueue.peek());
// console.log(newQueue.isEmpty());



module.exports = kju;
