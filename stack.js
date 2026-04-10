class Stack {
    constructor () {
        this.items = [];
    }

    push(val) {
        return this.items.push(val);
    }

    pop() {
        if(this.items.length==0) return null;
        return this.items.pop();
    }

    display() {
        console.log(this.items.join(' '));
        return;
    }
}

// const stack = new Stack();
// stack.push(10);
// stack.display();
// stack.push(20);
// stack.display();

//Insert, remove, find maximum with O(1).
class Stack2 {
    constructor () {
        this.items = [];
        this.maximumStack = [];
    }

    push(val) {
        this.items.push(val);
        if(this.maximumStack.length === 0 || val >= this.maximumStack[this.maximumStack.length-1]){
            this.maximumStack.push(val);
        }
        return;
    }

    pop() {
        if(this.items.length==0) return null;
        let remove = this.items.pop();
        if(remove === this.maximumStack[this.maximumStack.length-1]){
            this.maximumStack.pop();
        }
    }

    getMax() {
        if(this.items.length===0) return null;
        const largest = this.maximumStack[this.maximumStack.length-1];
        console.log('Largest value: ' +largest);
        return;
    }

    display() {
        console.log(`Original: ${this.items.join(' ')}`);
        console.log(`Maximum: ${this.maximumStack.join(' ')}`);
        return;
    }
    
}

// const stack = new Stack2();
// stack.push(33);
// stack.display();
// stack.push(22);
// stack.display();
// stack.push(44);
// stack.display();
// stack.getMax();
// stack.pop();
// stack.display();
// stack.pop();
// stack.display();


//Undo-Redo;
class Stack3 {
    constructor () {
        this.items = [];
        this.redoStack = [];
    }

    push(val) {
        this.items.push(val);
        this.redoStack = [];
        return;
    }

    undo() {
        if(this.items.length == 0) return null;
        let removed = this.items.pop();
        this.redoStack.push(removed);
        return;
    }

    redo() {
        if(this.redoStack.length == 0) return null;
        let restored = this.redoStack.pop();
        this.items.push(restored);
        return;
    }

    display() {
        if(this.items.length == 0) return null;
        console.log(this.items.join(' '));
        return;
    }
}

const stack = new Stack3();
stack.push(55);
stack.display();
stack.push(66);
stack.push(77);
stack.display();
stack.undo();
stack.display();
stack.redo();
stack.display();
stack.redo();
stack.display();
stack.push(88);
stack.display();
stack.redo();
stack.display();


class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class Stack4 {
    constructor () {
        this.top = null;
        this.size = 0;
    }

    isEmpty() {
        return this.top === null;
    }

    push(val) {
        const node = new Node(val);
        node.next = this.top;
        this.top = node;
        this.size++;
    }

    pop() {
        if(this.isEmpty()) return null;
        const removed = this.top.val;
        this.top = this.top.next;
        this.size--;
        return removed;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.top.val;
    }

    display() {
        if(this.isEmpty()) return null;
        let curr = this.top;
        let res = [];
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res.join(' -> ')
    }
}


//Implement stack using queue;
class StackUsingQueue {
  
  constructor () {
    this.q = [];
  }
  
  push(val) {
    this.q.push(val);
    
    let size = this.q.length;
    for(let i=0; i<size-1; i++) {
      this.q.push(this.q.shift());
    }
  }
  
  pop() {
    if(this.isEmpty()) throw new Error("Stack underflow");
    return this.q.shift();
  }
  
  peek() {
    if(this.isEmpty()) throw new Error("Empty Stack");
    return this.q[0];
  }
  
  isEmpty() {
    return this.q.length === 0;
  }
  
  display() {
    return this.q;
  }
  
  getSize() {
    return this.q.length;
  }
}

const stack5 = new StackUsingQueue();
stack5.push(10);
stack5.push(20);
stack5.push(30);
console.log(stack5.display());
console.log(stack5.isEmpty());
console.log(stack5.getSize());
console.log(stack5.peek());
console.log(stack5.pop());
console.log(stack5.display());