class Queue{

    constructor() {
        this.items = [];
    }

    enqueue(val) {
        this.items.push(val);
    }

    deeque() {
        if(this.isEmpty()) return null;
        return this.items.shift();
    }

    getFront() {
        if(this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getSize() {
        return this.items.length;
    }

    display() {
        if(this.isEmpty()) return null;
        console.log(this.items.join(' '));
        return;
    }
}

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(30);
// queue.enqueue(20);
// queue.display();
// queue.deeque();
// queue.display();
// console.log(queue.getFront());
// console.log(queue.getSize());

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkQueue{
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(val) {
        const node = new Node(val);
        if(!this.front) {
            this.front = this.rear = node;
        }else{
        this.rear.next = node;
        this.rear = node;
        }
        this.size++;
    }

    isEmpty() {
        return this.front === null;
    }

    dequeue() {
        if(this.isEmpty()) return null;
        let removed = this.front.val;
        this.front = this.front.next;
        if(!this.front) this.rear = null;
        this.size--;
        return removed;
    }

    getFront() {
        if(this.isEmpty()) return null;
        return this.front.val;
    }

    getRear() {
        if(this.isEmpty()) return null;
        return this.rear.val;
    }

    display() {
        let curr = this.front;
        let res = [];
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        console.log(res.join(' '));
    }

    getSize() {
        return this.size;
    }
}

// const queue2 = new LinkQueue();
// queue2.enqueue(101);
// queue2.enqueue(202);
// queue2.enqueue(303);
// queue2.enqueue(404);
// console.log(queue2.getFront());
// console.log(queue2.getRear());
// queue2.display()
// console.log(queue2.getSize());
// console.log('removed:', queue2.dequeue())
// console.log(queue2.getFront());
// console.log(queue2.getRear());
// queue2.display()
// console.log(queue2.getSize());

class QueueUsingStack{
    constructor() {
        this.s1 = [];
        this.s2 = [];
    }

    transfer() {
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
        if(this.isEmpty()) return null;
        this.transfer();
        return this.s2.pop();
    }

    getFront() {
        if(this.isEmpty()) return null;
        this.transfer();
        return this.s2[this.s2.length-1];
    }

    getSize() {
        return this.s1.length + this.s2.length;
    }

    isEmpty() {
        return this.s1.length === 0 && this.s2.length === 0;
    }

    display() {
        if(this.isEmpty()) return null;
        return [...this.s2].reverse().concat(this.s1).join(' ');
    }
}

const queue3 = new QueueUsingStack();
queue3.enqueue(111);
queue3.enqueue(222);
queue3.enqueue(333);
console.log(queue3.display());
console.log(queue3.getFront());
console.log(queue3.getSize());

console.log(queue3.dequeue());
console.log(queue3.display());
console.log(queue3.getFront());
console.log(queue3.getSize());

class CircularQueue{
    
    constructor(size) {
        this.q = new Array(size);
        this.front = this.rear = -1;
        this.size = size;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear+1)%this.size === this.front;
    }
    
    enqueue(val) {
        if(this.isFull()) throw new Error('Queue overflow');
        if(this.front === -1) this.front = 0;
        this.rear = (this.rear+1) % this.size;
        this.q[this.rear] = val;
    }
    
    dequeue() {
        if(this.isEmpty()) throw new Error('Queue undeflow');
        const val = this.q[this.front];
        if(this.front === this.rear) {
            this.front = this.rear = -1;
        }else{
            this.front = (this.front+1) % this.size;
        }
        return val;
    }

    getFront() {
        return this.isEmpty() ? null : this.q[this.front];
    }

    getRear() {
        return this.isEmpty() ? null : this.q[this.rear];
    }

}