class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    return this.items.at(-1);
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s);
console.log(s.peek());

s.pop();
s.pop();
console.log(s);

console.log(s.getSize());
console.log(s.isEmpty());
