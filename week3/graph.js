class Graph{
    constructor(){
        this.adjacencylist={}
    }
    addvertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex]=new Set()
        }
    }
    addedge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]){
            this.addvertex(vertex1)
        }
        if(!this.adjacencylist[vertex2]){
            this.addvertex(vertex2)
        }
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
    }
    hasedge(vertex1,vertex2){
        return(this.adjacencylist[vertex1].has(vertex2)&&this.adjacencylist[vertex2].has(vertex1))
    }
    removeedge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }
    removevertex(vertex){
        if(!this.adjacencylist[vertex]){
            return
        }
        for(let adjacentvertex of this.adjacencylist[vertex]){
            this.removeedge(vertex,adjacentvertex)
        }
    }
    dfs(startingnode){
        let stack=[startingnode]
        let visited=new Set()
        while(stack.length>0){
            let curr=stack.pop()
            if(!visited.has(curr)){
                visited.add(curr)
                console.log(curr);
                for(let subnode of this.adjacencylist[curr]){
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
            for(let subnode of this.adjacencylist[curr]){
                if(!visited.has(curr)){
                    queue.push(subnode)
                    visited.add(subnode)
                }
            }
        }
    } 

}
const graph= new Graph()
graph.addvertex(23)
graph.addvertex(33)
graph.addvertex(43)
graph.addvertex(53)
console.log(graph);
graph.addedge(23,33)
graph.addedge(23,43)
graph.addedge(43,53)
console.log(graph);
// graph.removeedge(23,33)
// console.log(graph);
// graph.removevertex(23)
graph.dfs(23)
// graph.bfs(33)
// console.log(graph);