
class Graph {
    constructor () {
        this.adjList = {};
    }

    addVertex(vertex) {
        if(!this.adjList[vertex]){
            this.adjList[vertex] = new Set();
        }
    }

    addEdge(v1, v2) {
        if(!this.adjList[v1]) this.addVertex(v1);
        if(!this.adjList[v2]) this.addVertex(v2);

        this.adjList[v1].add(v2);
        this.adjList[v2].add(v1);
    }

    printGraph() {
        for(let vertex in this.adjList) {
            console.log(vertex, '->' , [...this.adjList[vertex]]);
        }
    }
    /*
    bfs(start) {
        if(!this.adjList[start]) return;
        let visited = new Set();
        let queue = [start];

        visited.add(start);

        while(queue.length) {
            let node = queue.shift();
            console.log(node);
          
            for(let neighbour of this.adjList[node]) {
                if(!visited.has(neighbour)) {
                    visited.add(neighbour);
                    queue.push(neighbour);
                }
            }
        }
    }
    */
    /*
    dfs(node, visited=new Set()) {
        if(!this.adjList[node] || visited.has(node)) return;

        visited.add(node);
        console.log(node);

        for(let neighbour of this.adjList[node]) {
            this.dfs(neighbour, visited);
        }
    }
    */
    countVertices() {
        return Object.keys(this.adjList).length;
    }

    countEdges() {
        let count = 0;
        for(let vertex in this.adjList) {
            count += this.adjList[vertex].size;
        }  
        return count/2;
    }
    /*
    isCyclic() {
        const visited = new Set();
        const dfs = (vertex, parent) => {
            visited.add(vertex);

            for(let neighbour of this.adjList[vertex]) {
                if(!visited.has(neighbour)){
                    if(dfs(neighbour, vertex)) return true;
                }else if(neighbour !== parent) return true;
            }
            return false;
        }

        for(let vertex in this.adjList) {
            if(!visited.has(vertex)) {
                if(dfs(vertex, null)) return true;
            }
        }
        return false;
    }
    */
   /*
    shortestPath(start, end) {
       if(!this.adjList[start] || !this.adjList[end]) return null;

       let visited = new Set();
       let queue = [start];
       let parent = {};

       visited.add(start);
       parent[start] = null;

       while(queue.length) {
        let node = queue.shift();
        for(let neighbour of this.adjList[node]) {
            if(!visited.has(neighbour)) {
                visited.add(neighbour);
                parent[neighbour] = node;
                queue.push(neighbour);
            }
        }
       }

       let path = [];
       let current = end;
       while(current !== null) {
        path.push(current);
        current = parent[current];
       }
       return path.reverse();
    }
    */


    dfs(node, visited=new Set()) {
        if(!this.adjList[node] || visited.has(node)) return;

        visited.add(node);
        console.log(node);

        for(let neighbour of this.adjList[node]) {
            if(!visited.has(neighbour)) {
                this.dfs(neighbour, visited);
            }
        }
        
    }
        
}

//Dijkstra's algorythm

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addEdge('A','B');
graph.addVertex('Z');
graph.addEdge('B','C');
graph.addEdge('C','D');
graph.addEdge('B','D');
graph.printGraph()

//graph.bfs('C')
console.log('-------------------');
graph.dfs('C')

// console.log(graph.countVertices());
// console.log((graph.countEdges()));
// console.log(graph.isCyclic());
 //console.log(graph.shortestPath('A','D'));
