const uuid = require('uuid/v4');

/**
 * A simple object for representing data at a given point in a graph.
 */
class Node {
  constructor(params) {
    const { id, data } = params || {};

    this.id = id || uuid();
    this.data = data || {};
  }
}

module.exports = Node;
