class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
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
            if(root.left===null){
                root.left=newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
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

    //Traverse DFS

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

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }
//traverse BFS

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
        this.min(root.left)
    }
}

//max

max(root){
    if(!root.right){
        return root.value
    }else{
        this.min(root.right)
    }
}

isBst(node,lower=-Infinity,upper=Infinity){
    if(!node){
        return true
    }
    if((node.value<=lower)||(node.value>=upper)){
        return false
    }
    return this.isBst(node.left,lower,node.value)&& this.isBst(node.right,node.value,upper)
}

findClosest(target){
    let curr = this.root;
    let closest = curr.value;
    let diff = Math.abs(curr.value - target);
    while(curr){
        if(Math.abs(curr.value-target) < diff){
            closest = curr.value;
            diff = (curr.value-target);
        }
        if(target < curr.value){
            curr = curr.left;
        }else if(target > curr.value){
            curr = curr.right;
        }else{
            return curr.value;
        }
    }
    return closest;
}

delete(value){
    this.root=this.deletNode(this.root,value)
}

deleteNode(root,value){
    if(root===null){
        return root
    }
    if(value<root.value){
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.right){
        root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left&&!root.right){
            return null
        }
        if(!root.left){
            return root.right
        }
        if(!root.right){
            return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
}

}