class stackUsingQueue{
    constructor(){
        this.queue=[]
        this.tempQueue=[]
    }

    push(elem){
        this.tempQueue.push(elem)

        while(this.queue.length!==0){
            this.tempQueue.push(this.queue.shift())
        }
        [this.primaryQueue, this.tempQueue] = [this.tempQueue, this.primaryQueue];
    }

    pop() {
        if (this.primaryQueue.length === 0) {
          return undefined;
        }
        return this.primaryQueue.shift();
      }
    
}
