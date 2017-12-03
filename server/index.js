const tools = require('./tools');

/**
 * "Build" the given Express app by applying
 * a tool to it.
 *
 * @param  {Object} app
 * @return {Object}
 */
function build(app) {
  this.app = app;

  this.toolbelt = tools.reduce((acc, tool) => {
    acc[tool.name] = tool.bind(this);

    return acc;
  }, {});

  this.toolbelt.app = this.app;

  return this.toolbelt;
}

/**
 * Make an express app.
 * Returns the app wrapped in a build function.
 *
 * @return {Function}
 */
function makeApp() {
  const express = require('express');
  const app = express();

  return build(app);
}

module.exports = {
  makeApp,
  build,
};

/*
TODO TOOLS:
- allow CORS requests
 */
