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

class BST {
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
    
    print() {
        if(!this.root) return null;
        
        let queue = [this.root];
        
        while(queue.length) {
            let size = queue.length;
            let level = [];
            
            for(let i=0; i<size; i++) {
                let current = queue.shift();
                level.push(current.val);
                
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            console.log(level.join(' '));
        }
    }
    /*
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
    */
   /*
    findFloor(target) {
        let current = this.root;
        let floor = null;
        
        while(current) {
            if(current.val <= target ) {
                floor = current.val;
            };
            
            if(target < current.val) {
                current = current.left;
            }else if(target > current.val) {
                current = current.right;
            }else{
                return current.val;
            }
        }
        return floor;
    }
    */
    /*
    findCeil(target) {
        let current = this.root;
        let ceil = null;
        
        while(current) {
            if(current.val === target) {
                return current.val;
            }
            
            if(current.val > target) {
                ceil = current.val;
                current = current.left;
            }else{
                current = current.right;
            }
        }
        return ceil;
    }
    */
    /*
    kthSmallest(k) {
        let count = 0;
        let result = null;
        
        function inorder(node) {
            if(!node || result !== null) return;
            
            inorder(node.left);
            count++;
            
            if(k === count) {
                result = node.val;
                return;
            }
            
            inorder(node.right);
        }
        inorder(this.root);
        return result;
    }
    */
    kthlargest(k) {
        let largest = null;
        function inorder(node) {
            if(!node) return;
            inorder(node.right);
            k--;
            if(k==0) {
                largest = node.val;
                return;
            }
            inorder(node.left);
        }
        inorder(this.root);
        return largest;
    }
}

const bst = new BST();
for(let product of products) {
    bst.insert(product.price);
}
bst.print()
console.log('------------')
//console.log(bst.findClosest(70));
//console.log('------------')
// console.log(bst.findFloor(100));
// console.log('------------')
//console.log(bst.findCeil(300));
console.log(bst.kthlargest(3));
