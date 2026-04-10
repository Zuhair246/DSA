class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;       
    }

    prepend(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    }

    append(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    addAtIndex(index, val) {
        if(index<0 || index>this.size) return -1;
        if(!this.head) return null;
        if(index===0) return this.prepend(val);
        if(index===this.size) return this.append(val);
        const node = new Node(val);
        let curr = this.head;
        let prev = null;
        let count = 0;
        while(count<index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        node.next = curr;
        node.prev = prev;
        curr.prev = node;
        prev.next = node;
        this.size++;
    }

    deleteHead() {
        if(!this.head) return null;
        if(!this.head.next) {
            this.head = this.tail = null;
            this.size--;
            return;
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
    }

    deleteTail() {
        if(!this.head) return null;
        if(!this.head.next){
            this.head = this.tail = null;
        }else{
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    deleteByValue(val) {
        if(!this.head) return null;
        let curr = this.head;
        if(curr.val === val) {
            return this.deleteHead();
        }
        while(curr && curr.val !== val) {
            curr = curr.next;
        }
        if(!curr) {
            return -1;
        }
        if(curr === this.tail) {
            return this.deleteTail();
        }
        let prevNode = curr.prev;
        let nextNode = curr.next;

        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        this.size--;
    }

    print() {
        let curr = this.head;
        let res = '';
        while(curr) {
            res += curr.val + ' <-> ';
            curr = curr.next;
        }
        console.log(res + 'null');
        return;
    }

    reverse() {
        if(!this.head) return null;
        let curr = this.head;
        let temp = null;

        while(curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;

            curr = curr.prev;
        }
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    reverseii() {
      if(!this.head) return null;
      if(!this.head.next) return this.head;
      let curr = this.head;
      let prev = null;
      while(curr) {
        let next = curr.next;
        
        curr.next = prev;
        curr.prev = next;
        
        prev = curr;
        curr = next;
      }
      let temp = this.head;
      this.head = this.tail;
      this.tail = temp;
    }

    isPalindrome() {
        if(!this.head) return null;
        if(!this.head.next) return true;
        let start = this.head;
        let end = this.tail;
        while(start !== end && start.prev !== end) {
            if(start.val !== end.val) return false;
            start = start.next;
            end = end.prev;
        }
        return true;
    }

    removeMiddle() {
      if(this.isEmpty()) return null;
      if(this.size === 1) {
        let removed = this.head.val;
        this.head = this.tail = null;
        this.size--;
        return removed;
      }
      let fast = this.head;
      let slow = this.head;
      while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
      let removed = slow.val;
      let prevNode = slow.prev;
      let nextNode = slow.next;
      
      if(prevNode) prevNode.next = nextNode;
      if(nextNode) nextNode.prev = prevNode;
      
      if(slow === this.head) this.head = nextNode;
      if(slow === this.tail) this.tail = prevNode;
      this.size--;
      return removed;
    }
}

const list = new doublyLinkedList();
// list.prepend(30);
// list.apend(10);
// list.apend(20);
// list.prepend(40);
// list.addAtIndex(3, 50);
list.append(10);
list.append(20);
list.append(30);
list.append(20);
list.append(10);
list.print();
list.reverse();
list.print()
console.log(list.isPalindrome());
