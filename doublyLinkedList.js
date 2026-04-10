class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class doublyLinkedList {

    constructor () {
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    addAtHead(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = this.tail = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.size++;
    };

    addAtEnd(val) {
        const node = new Node(val);
        if(!this.tail) {
            this.head = this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    };

    addAtIndex(val, index) {
        if(index < 0 || index > this.size){
            console.log("Invalid Index");
            return;
        }
        if(index === 0) {
            this.addAtHead(val);
            return;
        };
        if(index === this.size) {
            this.addAtEnd(val);
            return;
        }
        const node = new Node(val);
        let curr = this.head;
        let prev = null;
        let count = 0;
        while(count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        node.next = curr;
        node.prev = prev;
        prev.next = node;
        curr.prev = node;
        this.size++;
    }

    deleteHead() {
        if(!this.head) {
            console.log("Empty list");
            return;
        }
        if(!this.head.next) {
            this.head = this.tail = null;
        }else{
            const next = this.head.next
            next.prev = null;
            this.head = next;
        }
        this.size--;
    }

    deleteTail() {
        if(!this.head) {
            console.log('Empty List');
            return;
        }
        if(!this.head.next) {
            this.head = this.tail = null;
        }else{
            let prevTail = this.tail.prev;
            prevTail.next = null;
            this.tail = prevTail;
        }
        this.size--;
    }

    deleteByValue(val) {
        if(!this.head) {
            console.log(("Empty list"));
            return;
        }
        let curr = this.head;
        while(curr && curr.val !== val) {
            curr = curr.next;
        }
        if(!curr) {
            console.log("Value not found");
            return;
        }
        if(curr == this.head) {
            this.deleteHead();
            return;
        }
        if(curr == this.tail) {
            this.deleteTail();
            return;
        }
        let prev = curr.prev;
        let next = curr.next;

        prev.next = next;
        next.prev = prev;

        this.size--;
    }

    search(val) {
        if(!this.head) return -1;
        if(this.head.val === val) {
            return 0;
        }
        if(this.tail.val === val) {
            return this.size-1;
        }
        let curr = this.head.next;
        let index = 1;
        while(curr) {
            if(curr.val === val) {
                return index;
            }
            index++;
            curr = curr.next;
        }
        return -1;
    }

    count() {
        let count = 0;
        let curr = this.head;
        while(curr) {
            count++;
            curr = curr.next;
        }
        return count;
    }

    reverse() {
        if(!this.head) return -1;
        if(!this.head.next) return this.head;
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

    print() {
        let curr = this.head;
        let res = '';
        while(curr){
            res += curr.val + ' <-> ';
            curr = curr.next;
        }
        console.log(res + 'null');
    }

    getSize() {
        console.log(this.size);
        return;
    }
}

const doubly = new doublyLinkedList();
doubly.addAtHead(10);
// doubly.print();
doubly.addAtEnd(20);
doubly.addAtIndex(30,1);
doubly.addAtEnd(40);
doubly.addAtEnd(50);
doubly.print();
doubly.reverse();
doubly.print()
// const index = doubly.search(40);
// if(index == -1) {
//     console.log("Value not found or List is empty!");
// }else{
//     console.log(`Value found at index: ${index}`);
// }
// const length = doubly.count();
// console.log('list length: '+length);

// doubly.deleteHead();
// doubly.print();
// doubly.deleteTail();
// doubly.print();
// doubly.deleteByValue(20);
// doubly.print();
// doubly.getSize();