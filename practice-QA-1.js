//preppend, append, addAtIndex, deleteHead, deleteTail, deleteByValue, deleteByIndex, search, count, findMiddle, reverseList, getSize, print.

class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    preppend(val) {
        const node = new Node(val);
        node.next = this.head;
        this.head = node;
        this.size++;
        return;
    }

    append(val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
        return;
    }

    getSize() {
        return this.size;
    }

    addAtIndex(index, val) {
        if(index>this.size || index<0) throw new Error('Invalid index');
        if(index==0){
            return this.preppend(val);
        }else{
            const node = new Node(val);
            let current = this.head;
            if(!current) return;
            let prev = null;
            let count = 0;
            while(current && count<index) {
                count++;
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
            this.size++;
            return;
        }
    }

    deleteHead() {
        if(!this.head) return;
        this.head = this.head.next;
        this.size--;
        return;
    }

    deleteTail() {
        if(!this.head) return null;
        if(!this.head.next){
            this.head = null;
        } 
        else{
            let curr = this.head;
            let prev = null;
            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }
        this.size--;
        return;
    }

    deleteByValue(val) {
        if(!this.head) return null;
        if(this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return;
        } 
        let current = this.head;
        let prev = null;
        while(current && current.val !== val) {
            prev = current;
            current = current.next;
        }
        if(!current) {
            return null;
        }
        prev.next = current.next;
        this.size--;
    }

    deleteByIndex(index) {
        if(!this.head) return null;
        if(index<0 || index>=this.size) return false;
        if(index===0) return this.deleteHead();
        if(index===this.size-1) return this.deleteTail();
        let count = 0;
        let current = this.head;
        let previous = null;
        while(count<index) {
            previous = current;
            current = current.next;
            count++;
        }
        previous.next = current.next;
        this.size--;
    }

    search(val) {
        if(!this.head) return null;
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.val === val) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    findMiddle() {
        if(!this.head) return null;
        let fast = this.head;
        let slow = this.head;
        while(fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow ? slow.val : null;
    }

    print() {
        let curr = this.head;
        let res = '';
        while(curr) {
            res += curr.val + ' -> ';
            curr = curr.next;
        }
        console.log(res + 'null');
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        while(curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    removeMiddle() {
        if(!this.head) return null;
        let fast = this.head;
        let slow = this.head;
        let prev = null;
        while(fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        const removed = slow.val;
        prev.next = slow.next;
        this.size--;
        return removed;
    }

    hasCyclic() {
        if(!this.head) return null;
        let slow = this.head;
        let fast = this.head;
        while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow === fast) return true;
        }
        return false;
    }
}

const list = new singlyLinkedList();
list.preppend(10);
list.preppend(20);
list.append(30);
list.addAtIndex(2,88);
list.append(50);
list.print()
// list.deleteHead();
// list.print();
//list.deleteByIndex(3);
list.reverse()
list.print()
console.log(list.getSize());
console.log(list.search(10));
console.log(list.findMiddle());
