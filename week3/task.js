class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

function isBST(root){
    if(!root){
        return true
    }
    if(root.left&&root.left.value>root.value){
        return false
    }
    if(root.right&&root.right.value<root.value){
        return false 
    }
    return isBST(root.left)&&isBST(root.right)
}

const node=new Node(89)
node.left=new Node(78)
node.right=new Node(100)
node.left.left=new Node(999)

console.log(isBST(node));