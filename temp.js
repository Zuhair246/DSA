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

    insertAtEnd(val) {
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
    }

    display() {
        let curr = this.head;
        let res = '';
        while(curr) {
            res += curr.val + ' -> ';
            curr = curr.next;
        }
        console.log(res + 'null')
    }

    removeDups() {
        if(!this.head) return null;
        if(!this.head.next) return this.head;
        let seen = new Set();
        let curr = this.head;
        let prev = null;
        while(curr) {
            if(seen.has(curr.val)) {
                prev.next = curr.next;
                this.size--;
            }else{
                seen.add(curr.val);
                prev = curr;
            }
            curr = curr.next;
        }
        return this.head;
    }

    removeSortDups() {
        if(!this.head) return null;
        let curr = this.head;
        while(curr && curr.next) {
            if(curr.val === curr.next.val) {
                curr.next = curr.next.next;
                this.size--;
            }else{
                curr = curr.next;
            }
        }
        return this.head;
    }

    findNtFrmhEnd(n) {
        if(!this.head) return null;
        if(n<=0 || n>this.size) return null;
        let fast = this.head;
        let slow = this.head;

        for(let i=0; i<n; i++) {
            if(!fast) return null;
            fast = fast.next;
        }

        while(fast) {
            fast = fast.next;
            slow = slow.next;
        }
        return slow.val;
    }
}

const list = new singlyLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(20);
list.insertAtEnd(20);
list.insertAtEnd(40);
list.insertAtEnd(50);
list.insertAtEnd(60);
list.insertAtEnd(60);
list.insertAtEnd(100);
list.display();
// list.removeDups();
//list.removeSortDups();
// list.display()
//console.log(list.findNtFrmhEnd(-1));


setInterval(()=>{
    console.log('hi')
},1000);