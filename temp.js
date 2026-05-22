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

const tree = new BST();

tree.insert(20);
tree.insert(30);
tree.insert(7);
tree.insert(4);
tree.insert(15);
tree.insert(25);
tree.insert(50);
tree.insert(2);
tree.insert(5);
tree.insert(10);
tree.insert(18);
tree.insert(21);
tree.insert(26);
tree.insert(35);
tree.insert(55);

tree.print();

//const search = tree.contains(20);
//console.log(search);
console.log('------------------');

//tree.delete(10);
//tree.print();
/*
tree.root = new Node(15);
tree.root.left = new Node(19);
tree.root.right = new Node(20);
tree.print()
*/

//console.log(tree.isValidBST());

//console.log(tree.isBST());
console.log(tree.min());
console.log(tree.max());
console.log(tree.findRoot());
console.log(tree.findLeaves());
