class Node{
    constructor(value) {
      this.value = value
      this.left = null
      this.right = null
      
    }
  }
  
   function isBST(root) {
      // base case: an empty tree is a BST
      if (!root) {
        return true
      }
    
      // recursively check left and right subtrees
      if (root.left && root.left.value > root.value) {
        return false
      }
      if (root.right && root.right.value < root.value) {
        return false
      }
      return isBST(root.left)&&isBST(root.right)
    }
  
    const root = new Node(12)
    root.left = new Node(7)
    root.right = new Node(14)
    root.left.left = new Node(4)
    root.left.right= new Node(3)
  
    console.log(isBST(root));