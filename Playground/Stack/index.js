const customStack = () => {
  const stack = [];

  return {
    push(item) {
      return stack.push(item);
    },
    pop() {
      return stack.pop();
    },
    peek() {
      return stack[stack.length - 1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return stack.length === 0;
    }
  }
}


const newStack = customStack();

newStack.push('first');
newStack.push('second');
newStack.push('third');
newStack.pop();
console.log(newStack.length);
console.log(newStack.peek());
console.log(newStack.isEmpty());
