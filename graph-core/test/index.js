const assert = require('chai').assert;
const core = require('../src');

describe('graph core', function() {
  it ('should add a node', function() {
    const graph = new core.Graph();
    const node = new core.Node();

    graph.addNode(node);

    assert.equal(graph.nodes[node.id], node, 'node added to graph');
  });

  it ('should replace a node', function() {
    const graph = new core.Graph();
    const node = new core.Node();

    node.data.test = 'hello';
    graph.addNode(node);

    assert.equal(graph.nodes[node.id].data.test, 'hello', 'node added to graph');

    node.data.test = 'world';
    graph.addNode(node);

    assert.equal(graph.nodes[node.id].data.test, 'world', 'node replaced in graph');
  });

  it ('should delete a node', function() {
    const graph = new core.Graph();
    const node = new core.Node();

    graph.addNode(node);

    assert.equal(graph.nodes[node.id], node, 'node added to graph');

    graph.removeNode(node);

    assert.notEqual(graph.nodes[node.id], node, 'node removed from graph');
  });

  it ('should add an edge', function() {
    const graph = new core.Graph();
    const edge = new core.Edge();

    graph.addEdge(edge);

    assert.equal(graph.edges[edge.id], edge, 'edge added to graph');
  });

  it ('should replace an edge', function() {
    const graph = new core.Graph();
    const edge = new core.Edge();

    edge.data.test = 'hello';
    graph.addEdge(edge);

    assert.equal(graph.edges[edge.id].data.test, 'hello', 'edge added to graph');

    edge.data.test = 'world';
    graph.addEdge(edge);

    assert.equal(graph.edges[edge.id].data.test, 'world', 'edge replaced in graph');
  });

  it ('should delete an edge', function() {
    const graph = new core.Graph();
    const edge = new core.Edge();

    graph.addEdge(edge);

    assert.equal(graph.edges[edge.id], edge, 'edge added to graph');

    graph.removeEdge(edge);

    assert.notEqual(graph.edges[edge.id], edge, 'edge removed from graph');
  });

  it ('should fill the graph', function() {
    const graph = new core.Graph();
    const a = new core.Node({ data: "a" });
    const b = new core.Node({ data: "b" });
    const edge = new core.Edge({ a, b });

    graph.addNode(a);
    graph.addNode(b);
    graph.addEdge(edge);

    const filled = graph.fill();

    assert.equal(filled.id, graph.id, 'graph id equals');
    assert.deepEqual(filled.edges[edge.id].a, a, 'nodes are equal');
    assert.deepEqual(filled.edges[edge.id].a.edges[edge.id].b, b, 'nodes are equal');
  });

  it ('should serialize the graph', function() {

  });

  it ('should import the graph', function () {

  });
});
