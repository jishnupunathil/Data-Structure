class Heap {
        constructor() {
            this.data = []
        }
        getParentIndex(index) {
            return Math.floor((index - 1)/2)
        }
        getLeftChildIndex(index) {  
        
            return index * 2 + 1
        }
        getRightchlidIndex(index) {
            return index * 2 + 2
        }
        swap(index1, index2) {
            let temp = this.data[index1]
            this.data[index1] = this.data[index2]
            this.data[index2] = temp
        }
        push(value) {
            this.data[this.data.length] = value
            this.heapifyUp()
        }
        heapifyUp() {
            let curr = this.data.length - 1
            while (this.data[curr] > this.data[this.getParentIndex(curr)]) {
                this.swap(curr, this.getParentIndex(curr))
                curr = this.getParentIndex(curr)
            }
        }
        pull() {
            let maxValue = this.data[0]
            this.data[0] = this.data[this.data.length - 1]
            this.data.length--
            this.heapifyDown()
            return maxValue
        }
        heapifyDown(){
            let curr=0
            while(this.data[this.getLeftChildIndex(curr)]!==undefined){
                let biggestIndex=this.getLeftChildIndex(curr)
                if(this.data[this.getRightchlidIndex(curr)]!==undefined && this.data[this.getRightchlidIndex(curr)]>this.data[this.getLeftChildIndex(curr)]){
                     biggestIndex=this.getRightchlidIndex(curr)
                }
                if(this.data[curr]<this.data[biggestIndex]){
                    this.swap(curr,biggestIndex)
                    curr=biggestIndex
                }else{
                    return
                }
            }
        }
    }
    const heap = new Heap()
    heap.push(20)
    heap.push(30)
    heap.push(40)
    heap.push(24)
    heap.push(60)
    console.log(heap)
    heap.pull()
    console.log(heap)