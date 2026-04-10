class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if(!this.root) {
            this.root = node;
            return;
        }

        const queue = [this.root];

        while(queue.length) {
            let current = queue.shift();

            if(!current.left) {
                current.left = node;
                return;
            }else{
                queue.push(current.left);
            }

            if(!current.right) {
                current.right = node;
                return;
            }else{
                queue.push(current.right);
            }
        }
    }

    //DFS
    inorder(node) {
        if(!node) return;

        this.inorder(node.left);
        console.log(node.val);
        this.inorder(node.right);
    }

    preOrder(node) {
        if(!node) return;

        console.log(node.val);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    postOrder(node) {
        if(!node) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.val);
    }

    //BFS
    levelOrder() {
        if(!this.root) return;

        const queue = [this.root];

        while(queue.length) {
            const size = queue.length;
            let level = [];

            for(let i=0; i<size; i++) {
                let node = queue.shift();
                level.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            console.log(level.join(' '))
        }
    }

    heightUsingDFS(node) {
        if(!node) return 0;

        const leftHeight = this.heightUsingDFS(node.left);
        const rightHeight = this.heightUsingDFS(node.right);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    heightUsingBFS() {
        if(!this.root) return 0;

        let height = 0;
        const queue = [this.root];

        while(queue.length) {
            const size = queue.length;

            for(let i=0; i<size; i++) {
                const node = queue.shift();

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            height++;
        }
        return height;
    }

    getDebth(target) {
        return this.depth(this.root, target);
    }

    depth(node, target, level=1) {
        if(!node) return 0;

        if(node.val === target) return level;

        const left = this.depth(node.left, target, level+1);
        if(left !== 0) return left;

        return this.depth(node.right, target, level+1);
    }

    diameterOfTree(node = this.root) {
        let diameter = 0;

        function height(node) {
            if(!node) return -1;

            let left = height(node.left);
            let right = height(node.right);

            diameter = Math.max(diameter, left+right+2);
            return 1 + Math.max(left, right);
        }
        height(node);
        return diameter;
    }

    removeDuplicates() {
        if(!this.root) return;
        
        let queue = [this.root];
        
        let clean = new Set();
        
        let values = this.bfs();
        
        this.root = null;
        
        for(let val of values) {
        if(!clean.has(val)){
            clean.add(val);
            this.insert(val);
        }
        }
  }

  isBalanced(node = this.root) {
  return this.checkHeight(node) !== -1;
}

checkHeight(node) {
  if (!node) return 0;

  let leftHeight = this.checkHeight(node.left);
  if (leftHeight === -1) return -1;

  let rightHeight = this.checkHeight(node.right);
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

} 

const tree = new BinaryTree();
tree.root = new Node(10);
tree.root.left = new Node(20);
tree.root.right = new Node(30);
tree.root.left.left = new Node(40);
tree.root.left.right = new Node(50);
tree.root.right.left = new Node(60);
tree.root.right.right = new Node(70);
// tree.levelOrder()
// console.log(tree.heightUsingDFS(tree.root))
// console.log(tree.heightUsingBFS());

// tree.inorder(tree.root);
// tree.preOrder(tree.root);
// tree.postOrder(tree.root);
//console.log(tree.display());

//console.log(tree.getDebth(30));
tree.insert(80);
tree.insert(90);
tree.insert(100);
tree.levelOrder();
console.log(tree.diameterOfTree());