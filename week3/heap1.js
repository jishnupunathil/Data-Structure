class Heap{
    constructor(){
        this.data=[]
    }

    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    getLeftchildIndex(index){
        return index*2 + 1
    }
    getRightChildIndex(index){
        return index*2 + 2
    }

    swap(index1,index2){
        let temp=this.data[index1]
        this.data[index1]=this.data[index2]
        this.data[index2]=temp
    }
    push(value){
        this.data[this.data.length]=value
        this.heapifyUp()
    }

    heapifyUp(){
        let curr=this.data.length-1
        while(this.data[curr]>this.data[this.getParentIndex(curr)]){
            this.swap(curr,this.getParentIndex(curr))
            curr=this.getParentIndex(curr)
        }
    }
}

const heap=new Heap()
heap.push(78)
heap.push(19)
heap.push(45)
console.log(heap);