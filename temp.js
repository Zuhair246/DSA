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
//list.display();
// list.removeDups();
//list.removeSortDups();
// list.display()
//console.log(list.findNtFrmhEnd(-1));

function quickSort(arr) {
    if(arr.length === 0) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
const arr = [5,9,3,1,4,6,8,2,7,0,78,35,45,12,23,79,35,21];

function sortMiddle(arr) {
    let mid = Math.floor(arr.length/2);
    let start = Math.max(0, mid-5);
    let end = Math.min(arr.length, mid+5);
    return [...arr.slice(0, start), ...quickSort(arr.slice(start, end)), ...arr.slice(end)];
}
//console.log(sortMiddle(arr));

function bubbleSort(arr) {
    let swaped;
     for(let i=0; i<arr.length; i++) {
        swaped = false;
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swaped = true;
            }
        }
        if(!swaped) break;
     }
     return arr;
}

function insertionSort (arr) {
    for(let i=1; i<arr.length; i++){
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

function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]<arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

function QuickSort (arr) {
    if(arr.length === 1) return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i]<=pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)];
}

function mergeSort (arr) {
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i=0; j=0;
    while(i<left.length && j<right.length) {
        if(left[i] <= right[j]) {
            result.push(left[i++]);
        }else{
            result.push(right[j++]);
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort(arr));