function heapify(arr, n, i) {
    let smallest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left < n && arr[left] < arr[smallest]){
        smallest = left;
    }

    if(right < n && arr[right] < arr[smallest]){
        smallest = right;
    }

    if(smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

function buildMinHeap(arr) {
    let n = arr.length;
    for(let i = Math.floor(n/2) - 1; i>=0; i--) {
        heapify(arr, n, i);
    }
}

function insert(heap, val) {
    heap.push(val);
    let i = heap.length-1;

    while(i > 0) {
        let parent = Math.floor((i-1)/2);

        if(heap[parent] > heap[i]) {
            [heap[parent], heap[i]] = [heap[i], heap[parent]];
            i = parent;
        }else break;
    }
}

function removeRoot(heap) {
    if(heap.length === 0) return null;
    if(heap.length === 1) return heap.pop();

    let root = heap[0];
    heap[0] = heap.pop();

    heapify(heap, heap.length, 0);
    return heap;    
}

let heap = [10, 20, 15, 30, 40];

console.log(removeRoot(heap));