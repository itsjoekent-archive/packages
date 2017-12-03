const express = require('express');

/**
 * Setup a public path directory on the app.
 *
 * @param  {String} httpPath   The route used to serve public assets.
 *                             eg: `/public`
 * @param  {String} folderPath The file path on the system where the assets live.
 *                             eg: `${__dirname}/public`
 * @return {Function}
 */
function public(httpPath, folderPath) {
  this.app.use(httpPath, express.static(folderPath));

  return this.toolbelt;
}

module.exports = public;
