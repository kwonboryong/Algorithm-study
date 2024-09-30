class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.items.length === 0) {
      console.log('Queue is empty');
      return
    }

    return this.items.shift();
  }

  getSize() {
    return this.items.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q);

q.dequeue();
q.dequeue();
console.log(q);

console.log(q.getSize());
console.log(q.isEmpty());
