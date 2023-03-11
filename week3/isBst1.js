class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}


function isBst(root){
    if(!root){
        return true
    }
    if(root.left&&root.left.value>root.value){
        return false
    }

    if(root.right&&root.right.value<root.value){
        return false
    }

    return isBst(root.left)&&isBst(root.right)
}

const root=new Node(8)
root.left=new Node(7)
root.right=new Node(9)
root.right.left=new Node(9)

console.log(isBst(root));