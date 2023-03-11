class Graph{
    constructor(){
        this.adjacensyList={}
    }

    addVertex(vertex){
        if(!this.adjacensyList[vertex]){
            this.adjacensyList[vertex]=new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacensyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacensyList[vertex2]){
            this.addVertex(vertex2)
        }
    }
    removeEdge(vertex1,vertex2){
        this.adjacensyList[vertex1].delete(vertex2)
        this.adjacensyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacensyList[vertex]){
            return null
        }
        for(let adjacentvertex of this.adjacensyList[vertex]){
            this.removeEdge(vertex,adjacentvertex)
        }
        delete this.adjacensyList[vertex]
    }
    
    hasEdge(vertex1,vertex2){
        return(this.adjacensyList[vertex1].has(vertex2)&&this.adjacensyList[vertex2].has(vertex1))
    }

}