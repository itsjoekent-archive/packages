const uuid = require('uuid/v4');

/**
 * A simple object for representing a connection between two nodes.
 */
class Edge {
  constructor(params) {
    const { id, a, b, weight, data } = params || {};

    this.id = id || uuid();
    this.a = a || null;
    this.b = b || null;
    this.weight = weight || null;
    this.data = data || {};
  }
}

module.exports = Edge;
