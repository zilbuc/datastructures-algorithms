const createNode = (key) => {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  }
}

const createGraph = (directed = false) => {
  const nodes = [];
  const edges = [];

  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdges(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);
      node1.addNeighbor(node2);
      edges.push(`${node1key} - ${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print() {
      return nodes.map(( { key, neighbors }) => {
        let result = key;

        if (neighbors.length) {
          result += ` => ${neighbors.map(neighbor => neighbor.key).join(' ')}`
        }

        return result;
      }).join('\n')
    }
  }
}

const graph = createGraph(true);

graph.addNode('Tim');
graph.addNode('Sally');
graph.addNode('Odor');
graph.addNode('Wookie');

graph.addEdges('Tim', 'Sally');
graph.addEdges('Sally', 'Tim');
graph.addEdges('Tim', 'Odor');
graph.addEdges('Tim', 'Wookie');
graph.addEdges('Sally', 'Odor');
graph.addEdges('Sally', 'Wookie');
graph.addEdges('Odor', 'Tim');
graph.addEdges('Wookie', 'Sally');

console.log(graph.print());
