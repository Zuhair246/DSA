class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor () {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }
  
  enqueue (val) {
    const node = new Node(val);
    if(!this.front) {
      this.front = this.rear = node;
    }else{
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }
  
  dequeue() {
    if(!this.front) throw new Error ("Queue underflow");
    let removed = this.front.val;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return removed;
  }
  
  getFront() {
    if(!this.front) throw new Error ("Que is empty");
    return this.front.val;
  }
  
  display() {
    let curr = this.front;
    let res = [];
    while(curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    return res;
  }
  
  getSize() {
    return this.size;
  }
}


class QueueUsingStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  
  #transfer() {
        if(this.s2.length === 0) {
      while(this.s1.length) {
        this.s2.push(this.s1.pop());
      }
    }
  }
  
  enqueue(val) {
      this.s1.push(val);
  }
  
  dequeue() {
    if(this.isEmpty()) throw new Error("Queue underflow")
    this.#transfer();
    return this.s2.pop();
  }
  
  front() {
    if(this.isEmpty()) throw new Error("Queue is empty")
    this.#transfer();
    return this.s2[this.s2.length-1];
  }
  
  display() {
    return [...this.s2].reverse().concat(this.s1);
  }
  
  isEmpty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
  
  getSize() {
    return this.s1.length + this.s2.length;
  }
}

// const queue = new QueueUsingStack();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);
// console.log(queue.display());
// console.log(queue.front());
// console.log(queue.getSize());
// console.log(queue.dequeue());
// console.log(queue.display());
// console.log(queue.getSize());
// console.log(queue.front());

// Circular Que
class CircularQue {

  constructor (size) {
    this.q = new Array(size);
    this.front = this.rear = -1;
    this.size = size;
  }

  enqueue(val) {
    if((this.rear +1)%this.size === this.front) return 'Full';
    if(this.front === -1) this.front = 0;
    this.rear = (this.rear +1) % this.size;
    this.q[this.rear] = val;
  }

  dequeue() {
    if(this.front === -1) return 'Empty';
    if(this.front  === this.rear){
      this.front = this.front = -1;
    }else{
      this.front = (this.front+1) % this.size;
    }
    return val;
  }
}

//Double ended queue

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleEndedQueue {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  insertFront(val) {
    const node = new Node(val);
    if(!this.head) {
      this.head = this.tail = node;
    }else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }
  
  insertRear(val) {
    const node = new Node(val);
    if(!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }
  
  deleteFront() {
    if(!this.head) return null;
    let val = this.head.val;
    this.head = this.head.next;
    if(!this.head) {
      this.tail = null;
    }else{
      this.head.prev = null;
    }
    this.size--;
    return val;
  }
  
  deleteRear() {
    if(!this.tail) return null;
    let val = this.tail.val;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    this.size--;
    return val;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  getSize() {
    return this.size;
  }
  
  peekFront() {
    return this.head ? this.head.val : null;
  } 
  
  peekRear() {
    return this.tail ? this.tail.val : null;
  }
  
  display() {
    let curr = this.head;
    let res = [];
    while(curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    console.log(res.join(" <-> "))
  }
}