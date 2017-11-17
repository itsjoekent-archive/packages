const uuid = require('uuid/v4');
const bind = require('itsjoekent-bind');

/**
 * An object that contains nodes and edges.
 */
class Graph {
  constructor(params) {
    const { id, nodes, edges } = params || {};

    this.id = id || uuid();
    this.nodes = nodes || {};
    this.edges = edges || {};

    bind.all(this, Graph);
  }

  /**
   * Get an elongated response with all references filled out.
   * Useful for API's.
   *
   * @return {Object}
   */
  fill() {
    const filled = {
      id: this.id,
      edges: {},
      nodes: {},
    };

    for (const nodeId of Object.keys(this.nodes)) {
      filled.nodes[nodeId] = this.nodes[nodeId];
      filled.nodes[nodeId].edges = {};
    }

    for (const edgeId of Object.keys(this.edges)) {
      const edge = this.edges[edgeId];

      filled.edges[edgeId] = edge;

      filled.edges[edgeId].a = edge.a ? this.nodes[edge.a.id] : null;
      filled.edges[edgeId].b = edge.b ? this.nodes[edge.b.id] : null;

      const fillNode = prop => this.edges[edgeId][prop] ? (
        filled.nodes[this.edges[edgeId][prop].id].edges[edgeId] = filled.edges[edgeId]
      ) : null;

      fillNode('a');
      fillNode('b');
    }

    return filled;
  }

  /**
   * Return a serialized version of the
   * @return {[type]} [description]
   */
  serialized() {
    return JSON.serialize({
      id: this.id,
      nodes: this.nodes,
      edges: this.edges,
    });
  }

  /**
   * Add a node to the graph
   * @param {Node} node
   */
  addNode(node) {
    if (! node || ! node.id) return;

    this.nodes[node.id] = node;
  }

  /**
   * Remove the given node from the graph and all edges.
   *
   * @param  {Node} node
   */
  removeNode(node) {
    if (! node || ! node.id) return;

    this.nodes = Object.keys(this.nodes).reduce((acc, nodeId) => {
      if (node.id !== nodeId) {
        acc[nodeId] = this.nodes[nodeId];
      }

      return acc;
    }, {});

    for (const edgeId of Object.keys(this.edges)) {
      const nullify = prop => (
        this.edges[edgeId][prop] === node.id ? this.edges[edgeId][prop] = null : null
      );

      nullify('a');
      nullify('b');
    }
  }

  /**
   * Add an edge to the graph.
   *
   * @param {Edge} edge
   */
  addEdge(edge) {
    if (! edge || ! edge.id) return;

    this.edges[edge.id] = edge;
  }

  /**
   * Remove the given edge from the graph.
   *
   * @param  {Edge} edge
   */
  removeEdge(edge) {
    if (! edge || ! edge.id) return;

    this.edges = Object.keys(this.edges).reduce((acc, edgeId) => {
      if (edge.id !== edgeId) {
        acc[edgeId] = this.edges[edgeId];
      }

      return acc;
    }, {});
  }
}

/**
 * Import a serialized string and create a graph.
 *
 * @param  {String} serialized
 * @return {Graph}
 */
Graph.import = (serialized) => {
  return new Graph(JSON.parse(serialized));
};

module.exports = Graph;
