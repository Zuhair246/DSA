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

    findNtFrmEnd(n) {
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
//list.display();
// list.removeDups();
//list.removeSortDups();
// list.display()
//console.log(list.findNtFrmEnd(-1));

function bubbleSort(arr) {
    let swapped;
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        swaped = false;
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
                count++;
            }
        }
        if(!swapped) break;
    }
    return {
        sorted_array: arr,
        swap_count: count
    }
}

const arr = [5,9,3,1,4,8,6,2,7,0,78,35,45,12,23,79,35,21];

console.log(bubbleSort(arr));

function insertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>temp) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
//console.log(insertionSort(arr));


function SelectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}
//console.log(SelectionSort(arr));
