// [5,2,1,3,7,6,8]

// function inorder(node) {
//     if(!node) return;

//     inorder(node.left);
//     console.log(node.val);
//     inorder(node.right);
// }

function heapify(arr, n, i) {
    let largest = i;
    let left = 2*i +1;
    let right = 2*i+ 2;

    if(left < n && arr[left].age > arr[largest].age) {
        largest = left;
    }
    if(right < n && arr[right].age > arr[largest].age) {
        largest = right;
    }

    if(largest !== i) {
        [arr[largest], arr[i]] = [arr[i], arr[largest]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    for(let i=Math.floor(n/2)-1; i>=0; i--) {
        heapify(arr, n, i);
    }

    for(let i=n-1; i>=0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

const users = [ 
    { name: 'Alice', age: 25 }, 
    { name: 'Bob', age: 20 }, 
    { name: 'Charlie', age: 30 } ,
    { name: 'David', age: 22 },
    { name: 'Eve', age: 28 }
  ];

console.log(heapSort(users))

// function DFS(graph, start, visited=new Set()) {
//     if(!graph[start]) return;

//     visited.add(start);
// }



//2nd Attempt
/*
class Graph {
  constructor() {
    this.adjList = {};
  }
  
  addVertex(vertex) {
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  
  addEdge(v1, v2) {
    if(!this.adjList[v1]) this.addVertex(v1);
    if(!this.adjList[v2]) this.addVertex(v2);
    
    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }
  
  isCyclic() {
    
    for(let vertex in this.adjList) {
     if(this.adjList[vertex][0] === this.adjList[vertex][this.adjList.size]) return true;  
    }
    return false;
  }
  
  shortestPath(graph){
    
  }
}

const graph = new Graph();
graph.addEdge('0','1');
graph.addEdge('1','2');
graph.addEdge('2','3');

console.log(graph.isCyclic())
*/

//findClosestPrice(products, 77);

const products = [
  { id: 1, name: 'Wireless Mouse', price: 25 },
  { id: 2, name: 'Mechanical Keyboard', price: 60 },
  { id: 3, name: 'USB-C Hub', price: 40 },
  { id: 4, name: 'Gaming Chair', price: 150 },
  { id: 5, name: '4K Monitor', price: 300 },
  { id: 6, name: 'Noise Cancelling Headphones', price: 120 },
  { id: 7, name: 'Portable SSD', price: 80 },
  { id: 8, name: 'Smartwatch', price: 200 },
  { id: 9, name: 'Bluetooth Speaker', price: 50 },
  { id: 10, name: 'Webcam', price: 70 },
];

class Node{
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor() {
    this.root = null;
  }
  
  insert(val) {
    this.root = this._insert(this.root, val); 
  }
  _insert(node, val) {
    if(!node) return new Node(val);
    
    if(val < node.val) {
      node.left = this._insert(node.left, val);
    }
    if(val > node.val) {
      node.right = this._insert(node.right, val);
    }
    return node;
  }

  findClosest(target) {
    let current = this.root;
    let closest = this.root.val;

    while(current) {

      if(Math.abs(target - current.val) < Math.abs(target - closest)) {
        closest = current.val;
      }

      if(target < current.val) {
        current = current.left;
      }else if(target > current.val) {
        current = current.right;
      }else{
        return current.val;
      }
    }
    return closest;
  }
}

const bst = new BST();
for(let product of products) {
  bst.insert(product.price);
};

console.log(bst.findClosest(35));

/*
class Graph {
  constructor() {
    this.adjList = {};
  }
  
  addVertex(vertex) {
    if(!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  
  addEdge(v1, v2) {
    if(!this.adjList[v1]) this.addVertex(v1);
    if(!this.adjList[v2]) this.addVertex(v2);
    
    this.adjList[v1].add(v2);
    this.adjList[v2].add(v1);
  }
  
  isCyclic() {
    
    for(let vertex in this.adjList) {
     if(this.adjList[vertex][0] === this.adjList[vertex][this.adjList.size]) return true;  
    }
    return false;
  }
}
  */