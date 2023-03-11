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
        this.adjacensyList[vertex1].add(vertex2)
        this.adjacensyList[vertex2].add(vertex1)

    }

    hasEdge(vertex1,vertex2){
        return (this.adjacensyList[vertex1].has(vertex2) && this.adjacensyList[vertex2].has(vertex1))
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

    dfs(startingnode){
        let stack=[startingnode]
        let visited=new Set()
        while(stack.length>0){
            let curr=stack.pop()
            if(!visited.has(curr)){
                visited.add(curr)
                console.log(curr);
                for(let subnode of this.adjacensyList[curr]){
                    stack.push(subnode)
                }
            }
        }
    }

    

   bfs(startingnode){
    let queue=[startingnode]
    let visited=new Set()
    visited.add(startingnode)
    while(queue.length>0){
        let curr=queue.shift()
        console.log(curr);
        for(let subnode of this.adjacensyList[curr]){
            if(!visited.has(subnode)){
                queue.push(subnode)
                visited.add(subnode)
            }
        }
    }
   }
}
const graph= new Graph()
graph.addVertex(23)
graph.addVertex(33)
graph.addVertex(43)
graph.addVertex(53)
console.log(graph);
graph.addEdge(23,33)
graph.addEdge(23,43)
graph.addEdge(43,53)
console.log(graph);
console.log(graph.hasEdge(23,43));
// graph.removeEdge(23,43)
console.log(graph.hasEdge(23,43));
// graph.removeVertex(33)
console.log(graph);
// graph.dfs(23)
graph.bfs(53)