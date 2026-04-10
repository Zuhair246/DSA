class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        return this.items.push(val);
    }

    pop() {
        if(this.isEmpty()) return null;
        return this.items.pop();
    }

    display() {
        if(this.isEmpty()) return null;
        console.log(this.items.join(' '));
        return;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    sortStack() {
        if(this.isEmpty()) return null;
        let tempStack =[];

        while(this.items.length) {
            let temp = this.items.pop();

            while(tempStack.length && tempStack[tempStack.length-1] > temp) {
                this.items.push(tempStack.pop());
            }
            tempStack.push(temp);
        }
        this.items = tempStack;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length-1];
    }

    size() {
        return this.items.length;
    }
}

// const stack = new Stack();
// stack.push(10);
// stack.push(50);
// stack.push(30);
// stack.push(20);
// stack.push(40);
// stack.display();
// console.log(stack.peek());
// stack.sortStack();
// stack.display();
// console.log(stack.peek());
// console.log(stack.size());

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class linkStack {
    constructor() {
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

    getSize() {
        return this.size;
    }

    display() {
        if(this.isEmpty())return null;
        let curr = this.top;
        let res = [];
        while(curr) {
            res.push(curr.val);
            curr = curr.next;
        };
        console.log(res.join(' -> '));
    };
}

// const stack2 = new linkStack();
// stack2.push(11);
// stack2.push(44);
// stack2.push(33);
// stack2.display()
// console.log(stack2.getSize());
// console.log(stack2.pop());
// stack2.display()
// console.log(stack2.getSize());
// console.log(stack2.peek());

class StackUsingQueue {
    constructor() {
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
        if(this.isEmpty()) return null;
        return this.q.shift();
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.q[0];
    }

    display() {
        if(this.isEmpty()) return 'null';
        console.log(this.q.join(' '));
        return;
    }

    getSize() {
        return this.q.length;
    }

    isEmpty() {
        return this.q.length === 0;
    }
}

// const stack3 = new StackUsingQueue();
// stack3.push(33);
// stack3.push(55);
// stack3.push(77);
// stack3.push(11);
// stack3.display();
// console.log(stack3.pop());
// stack3.display();
// console.log(stack3.getSize());
// console.log(stack3.peek());
// stack3.push(22);
// stack3.display();

class maxStack{
    constructor() {
        this.items = [];
        this.maxStack = [];
    }

    push(val) {
        this.items.push(val);
        if(this.maxStack.length===0 || val >= this.maxStack[this.maxStack.length-1]){
            this.maxStack.push(val);
        }
    }

    pop() {
        if(this.isEmpty()) return null;
        let removed = this.items.pop();
        if(removed === this.maxStack[this.maxStack.length-1]) {
            this.maxStack.pop();
        }
        return removed;
    }

    getMax() {
        if(this.isEmpty()) return null;
        return this.maxStack[this.maxStack.length-1];
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.items.length-1];
    }

    getSize() {
        return this.items.length;
    }

    display() {
        if(this.isEmpty()) return null;
        console.log(this.items.join(' '));
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack4 = new maxStack();
stack4.push(45);
stack4.push(23);
stack4.push(55);
console.log(stack4.getMax());


class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  push(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size++;
  }
  
  pop() {
    if(!this.head) return null;
    let removed = this.head.val;
    this.head = this.head.next;
    this.size--;
    return removed;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
}

class UndoRedo{
  constructor() {
    this.undoStack = new Stack();
    this.redoStack = new Stack();
  }
  
  push(val) {
    this.undoStack.push(val);
    this.redoStack = new Stack();
  }
  
  undo() {
    if(this.undoStack.isEmpty()) return null;
    const removed = this.undoStack.pop();
    this.redoStack.push(removed);
    return removed;
  }
  
  redo() {
    if(this.redoStack.isEmpty()) return null;
    let restored = this.redoStack.pop();
    this.undoStack.push(restored);
    return restored;
  }
  
  display() {
    if(this.undoStack.isEmpty()) return null;
    let curr = this.undoStack.head;
    let res = [];
    while(curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    console.log(res.join(' -> ') + ' -> null');
  }
}

const stack = new UndoRedo();
stack.push(66);
stack.push(56);
stack.push(46);
stack.push(36);
stack.push(26);
stack.display();
stack.undo();
stack.undo()
stack.display();
stack.redo();
stack.display()