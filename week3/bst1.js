class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class LinkedList{
    constructor(){
        this.root=null
    }

    insert(value){
        const newNode=new Node(value)
        if(!this.root){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    //Travers DFS

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    PostOrder(root){
        if(root){
            this.PostOrder(root.left)
            this.PostOrder(root.right)
            console.log(root.value);
        }
    }

//Travese BFS

levelOrder(){
    const queue=[]
    queue.push(this.root)
    while(queue.length){
        let curr=queue.shift()
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
}

//min

min(root){
if(!root.left){
    return root.value
}else{
    return this.min(root.left)
}
}

//max

max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
    }

    //delete

    delete(value){
        this.root=this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteNode(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteNode(root.right,value)
        }else{
            if(!root.left&&!root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteNode(root.right,root.value)
        }
        return root
    }

    
}

const bst=new LinkedList()
bst.insert(80)
bst.insert(7)
bst.insert(9)
bst.insert(10)
console.log(bst)