class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class linkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }
    
    preppend(val) {
        let node = new Node (val);
        node.next = this.head;
        this.head = node;
        this.size++;
    }

    append(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    addAtIndex(val, index) {
        if(index < 0 || index > this.size) {
            console.log("Invalid Index");
            return;
        }
        if(index == 0) {
            return this.preppend(val);
        }else{
            const node = new Node(val);
            let curr = this.head;
            let prev = null;
            let count = 0;
            while (curr && count < index) {
                prev = curr;
                curr = curr.next;
                count++;
            }
            node.next = curr;
            prev.next = node;
            this.size++;
            return;
        }
    }

    deleteHead() {
        if(!this.head) {
            console.log("List is empty!");
            return;
        }
        this.head = this.head.next;
        this.size--;
    }

    deleteTail() {
        if(!this.head) {
            console.log("List is empty;");
            return;
        }
        if(this.head.next == null) {
            this.head = null;
        }else{
            let curr = this.head;
            let prev = null;
            while(curr.next) {
                prev = curr;
                curr = curr.next;
            }
            prev.next = null;
        }
        this.size--;
    }

    deleteByValue(val) {
        if(!this.head) {
            console.log("List is empty");
            return;
        }
        if(this.head.val == val) {
            this.head = this.head.next;
            this.size--;
            return;
        }
        let curr = this.head;
        let prev = null;
        while(curr && curr.val !== val) {
            prev = curr;
            curr = curr.next;
        }
        if(!curr) {
            console.log("Value not found!");
            return;
        }
        prev.next = curr.next;
        this.size--;
    }

    deleteByIndex(index) {
        if(index < 0 || index >= this.size) {
            console.log("Invalid Index");
            return;
        }
        if(!this.head) return undefined;
        if(index === 0) {
            this.deleteHead();
            return;
        }
        let curr = this.head;
        let count = 0;
        while(count < index-1) {
            curr = curr.next;
            count++;
        }
        curr.next = curr.next.next;
        this.size--;
    }

    search(val) {
        if(!this.head) return -1;
        let curr = this.head;
        let index = 0;
        while(curr) {
            if(curr.val == val) {
                return index;
            }
            curr = curr.next;
            index++;
        }
        return -1;
    }
    
    count() {
        let curr = this.head;
        let count = 0;
        while(curr) {
            count++;
            curr = curr.next;
        }
        return count;
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

    reverseList() {
        if(!this.head) return -1;
        if(!this.head.next) return this.head;
        let curr = this.head;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        let curr = this.head;
        let res = '';
        while(curr) {
            res += curr.val + ' -> ';
            curr = curr.next;
        }
        console.log(res + 'null');
        return;
    }

    getSize() {
        console.log(this.size);
        return;
    }
}

const list = new linkedList();
list.preppend(10);
list.preppend(20);
list.append(30);
list.append(40);
list.addAtIndex(50,2);
// list.append(70);
// list.print();
// list.deleteByIndex(3);
list.print();
list.getSize();

// const index = list.search(30);
// if(index==-1) {
//     console.log("Value not found!");
// }else{
//     console.log(`Value found at index: ${index}`)   
// };
// const length = list.count();
// if(length == -1) {
//     console.log("Empty List!");
// }else{
//     console.log(`Size of list is: ${length}`);
// }
// const middleElement = list.findMiddle();
// if(middleElement == null) {
//     console.log("Empty list");
// } else {
//     console.log(`Middle Element is: ${middleElement}`);
// }
// list.reverseList();
// list.print();
// list.deleteHead();
// list.print();
// list.getSize();
// list.deleteTail();
// list.print();
// list.getSize();
// list.deleteByValue(10);
// list.print();
// list.getSize();

