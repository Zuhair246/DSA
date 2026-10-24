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

    print() {
        if(!this.root) return null;
        const queue = [this.root];
        while(queue.length) {
            const size = queue.length;
            let level = [];
            for(let i=0; i<size; i++) {
                let curr = queue.shift();
                level.push(curr.val);

                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
            console.log(level.join(' '));
        }
    }

    insert(val) {
        this.root = this._insert(this.root, val);
    }
    _insert(node, val) {
        if(!node) return new Node(val);
        
        if(val < node.val) {
            node.left = this._insert(node.left, val);
        }else{
            node.right = this._insert(node.right, val);
        }
        return node;
    }

    contains(val) {
        return this._contains(this.root, val);
    }
    _contains(node, val) {
        if(!node) return false;
        if(val < node.val) {
            return this._contains(node.left, val);
        }else if(val > node.val) {
            return this._contains(node.right, val);
        }else {
            return true;
        }
    }

    delete(val) {
        this.root = this._delete(this.root, val);
    }
    _delete(node, val) {
        if(!node) return;

        if(val < node.val) {
            node.left = this._delete(node.left, val);
        }else if(val > node.val) {
            node.right = this._delete(node.right, val);
        }else{
            if(!node.left && !node.right) return null;

            if(!node.left) return node.right;
            if(!node.right) return node.left;

            let successor = this.findMin(node.right);
            node.val = successor;
            node.right = this._delete(node.right, successor);
        }
        return node;
    }
    findMin(node) {
        while(node.left) {
            node = node.left;
        }
        return node.val;
    }

    isValidBST() {
        return this.validate(this.root, -Infinity, Infinity);
    }
    validate(node, min, max) {
        if(!node) return true;

        if(node.val <= min || node.val >= max) return false;

        return (
            this.validate(node.left, min, node.val) && this.validate(node.right, node.val, max)
        );
    }

    isBST() {
        let prev = -Infinity;
        
        function validate(node) {
            if(!node) return true;

            if(!validate(node.left)) return false;

            if(node.val <= prev) return false;
            prev = node.val;

            return validate(node.right);
        }
        return validate(this.root);
    }

    min() {
        if(!this.root) return undefined;
        let node = this.root;
        while(node.left) {
            node = node.left;
        }
        return node.val;
    }

    max() {
        if(!this.root) return undefined;
        let node = this.root;
        while(node.right) {
            node = node.right;
        }
        return node.val;
    }

    findRoot() {
        if(!this.root) return null;
        return this.root.val;
    }

    findLeaves() {
        const leaves = [];
        function dfs(node){
            if(!node) return;

            if(!node.left && !node.right) {
                leaves.push(node.val);
                return;
            }

            dfs(node.left);
            dfs(node.right);
        }
        dfs(this.root);
        return leaves;
    }
}

class binaryTree {
    constructor() {
        this.root = null;
    }

    print() {
        if(!this.root) return;
        const queue = [this.root];
        while(queue.length) {
            const size = queue.length;
            let level = [];
            for(let i=0; i<size; i++) {
                const curr = queue.shift();
                level.push(curr.val);
                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);
            }
            console.log(level.join(' '));
        }
    }

    insert(val) {
        const node = new Node(val);
        if(!this.root) {
            this.root = node;
            return;
        }
        const queue = [this.root];
        while(queue.length) {
            const curr = queue.shift();
            if(!curr.left) {
                curr.left = node;
                return;
            }else{
                queue.push(curr.left);
            }

            if(!curr.right) {
                curr.right = node;
                return;
            }else{
                queue.push(curr.right);
            }
        }
    }

    inOrder(node=this.root) {
        if(!node) return;

        this.inOrder(node.left);
        console.log(node.val);
        this.inOrder(node.right);
    }

    preOrder(node = this.root) {
        if(!node) return;

        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node = this.root) {
        if(!node) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.val);
    }

    heightDFS(node=this.root) {
        if(!node) return 0;

        let left = this.heightDFS(node.left);
        let right = this.heightDFS(node.right);

        return 1+Math.max(left, right);
    }

    heightBFS() {
        let height = 0;
        function dfs(node) {
            if(!node) return 0;
            let queue = [node];
            while(queue.length) {
                const size = queue.length;
                for(let i=0; i<size; i++) {
                    let curr = queue.shift();
                    if(curr.left) queue.push(curr.left);
                    if(curr.right) queue.push(curr.right);
                }
                height++;
            }
            return height;
        }
        return dfs(this.root);
    }

    getDepth(target) {
        return this._depth(this.root, target);
    }
    _depth(node, target, level=1) {
        if(!node) return 0;

        if(node.val === target) return level;

        let left = this._depth(node.left, target, level+1);
        if(left !== 0) return left;

        return this._depth(node.right, target, level+1);
    }

    diameter() {
        let diameter = 0;
        function height(node) {
            if(!node) return -1;

            let left = height(node.left);
            let right = height(node.right);

            diameter = Math.max(diameter, left+right+2);
            return 1+Math.max(left, right);
        }
        height(this.root);
        return diameter;
    }

    isBalanced(node = this.root) {
        return this.checkHeight(node) !== -1;
    }
    checkHeight(node) {
        if(!node) return 0;
        
        let left = this.checkHeight(node.left);
        if(left === -1) return -1;

        let right = this.checkHeight(node.right);
        if(left === -1) return -1;

        if(Math.abs(left-right)>1) return -1;

        return 1+Math.max(left, right);
    }
}

const bt = new binaryTree();
bt.insert(90);
bt.insert(10);
bt.insert(50);
bt.insert(20);
bt.insert(6);
bt.insert(18);
bt.insert(31);
bt.insert(43);
bt.insert(56);
bt.insert(68);
bt.insert(81);
bt.insert(93);
/*
bt.root = new Node(90);
bt.root.left = new Node (30);
bt.root.right = new Node(20);
bt.root.left.left = new Node (50);
bt.root.left.right = new Node(40);
bt.root.right.left = new Node (70);
bt.root.right.right = new Node (60);
*/
bt.print()
console.log('------------------');
//bt.inOrder();
//bt.preOrder();
//bt.postOrder();
//console.log(bt.heightDFS());
//console.log(bt.heightBFS());
console.log(bt.getDepth(20));
console.log(bt.diameter());
console.log(bt.isBalanced());


const bst = new BST();

bst.insert(20);
bst.insert(30);
bst.insert(7);
bst.insert(4);
bst.insert(15);
bst.insert(25);
bst.insert(50);
bst.insert(2);
bst.insert(5);
bst.insert(10);
bst.insert(18);
bst.insert(21);
bst.insert(26);
bst.insert(35);
bst.insert(55);

//bst.print();

//const search = bst.contains(20);
//console.log(search);
//console.log('------------------');

//bst.delete(10);
//bst.print();
/*
bst.root = new Node(15);
bst.root.left = new Node(19);
bst.root.right = new Node(20);
bst.print()
*/

//console.log(bst.isValidBST());

//console.log(bst.isBST());
//console.log(bst.min());
//console.log(bst.max());
//console.log(bst.findRoot());
//console.log(bst.findLeaves());