class Node {
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

    //Insert
    insert(val) {
        this.root = this._insert(this.root, val);
    }

    _insert(node, val) {
        if(!node) return new Node(val);

        if(val < node.val) {
            node.left = this._insert(node.left, val);
        }else if(val > node.val) {
            node.right = this._insert(node.right, val);
        }
        return node;
    }

    //Search
    contains(val) {
        return this._contains(this.root, val);
    }

    _contains(node, val) {
        if(!node) return false;

        if(node.val === val) return true;

        if(val < node.val) {
            return this._contains(node.left, val);
        }else{
            return this._contains(node.right, val);
        }
    }

    //Delete
    delete(val) {
        this.root = this._delete(this.root, val);
    }

    _delete(node, val) {
        if(!node) return;

        if(val < node.val) {
            node.left = this._delete(node.left, val);
        }else if(val > node.val){
            node.right = this._delete(node.right, val);
        }else{ //Found node to delete

            //Leaf - No child
            if(!node.left && !node.right) {
                return null;
            }

            //one child - returns right/left and that replaces delete node and reconnects
            if(!node.left) return node.right;
            if(!node.right) return node.left;

            //two child - find min val of right subtree and replace delete node with that min val;
            let successor = this._minValue(node.right);
            node.val = successor;
            node.right = this._delete(node.right, successor); //remove duplicate child bcoz that child is now root.
        }
        return node;
    }

    _minValue(node) {
        while(node.left) {
            node = node.left;
        }
        return node.val;
    }

    /*
    🧠 Why Successor Works

        Because successor is:

        Smallest value in right subtree

        Guaranteed > all left subtree

        Guaranteed < all right subtree (except itself)

        So BST property stays valid.
    */

    // Validate valid BST
    // i) Min-Max validation   
    isValidBST() {
        return this._validate(this.root, -Infinity, Infinity);
    }

    _validate(node, min, max) {
        if (!node) return true;

        if (node.val <= min || node.val >= max) {
            return false;
        }

        return (
            this._validate(node.left, min, node.val) &&
            this._validate(node.right, node.val, max)
        );
    }
    // ii) level order traversal
    isValidBST() {
        let prev = -Infinity;

        function validate(node) {
            if (!node) return true;

            if (!validate(node.left)) return false;

            if (node.val <= prev) return false;
            prev = node.val;

            return validate(node.right);
        }

        return validate(this.root);
    }



//print BFS
    levelOrder() {
        if(!this.root) return;

        const queue = [this.root];

        while(queue.length) {
            let level = [];
            let size = queue.length;

            for(let i=0; i<size; i++) {
                let current = queue.shift();
                level.push(current.val);

                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right);
            }
            console.log(level.join(' '))
        }
    }

  min() {
    if(!this.root) return;
    let current = this.root;
    while(current.left) {
      current = current.left;
    }
    return current.val;
  }
  
  max() {
    if(!this.root) return;
    let current = this.root;
    while(current.right) {
      current = current.right;
    }
    return current.val;
  }
  
//   kthSmallest(k) {
//     let stack = [];
//     let current = this.root;
    
//     while(stack.length || current) {
//       while(current) {
//         stack.push(current);
//         current = current.left;
//       }
//       current = stack.pop();
//       k--;
      
//       if(k==0) return current.val;
      
//       current = current.right;
//     }
//   }

  //Lowest common ancestor
  LCA(p, q) {
    return this.lca(this.root, p, q);
  }
  lca(node, p, q) {
    if(!node) return;

    if(p< node.val && q< node.val) {
        return this.lca(node.left, p, q);
    }else if(p> node.val && q> node.val) {
        return this.lca(node.right, p, q);
    }else{
        return node.val;
    }
  }

  kthSmallest(k) {

    let result = null;

    function inorder(node) {
        if(!node || result !== null) return;

        inorder(node.left);

        k--;
        if(k==0) {
            return result = node.val
        }

        inorder(node.right);
    }
    inorder(this.root);
    return result;
  }

}

// find kth largest

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(6);
bst.insert(20);
bst.insert(21);
bst.insert(19);

bst.levelOrder()

//console.log(bst.contains(6));
//console.log(bst.contains(7));

console.log(bst.LCA(19,21));
console.log(bst.kthSmallest(2));
