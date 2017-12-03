const gzipHelper = require('itsjoekent-express-gzip');

/**
 * Setup gzip routes for css & js files.
 *
 * @param  {String} distPath The public http path these assets are served from.
 *                           eg: '/public/dist/'
 * @param  {Boolean} productionOnly If enabled, checks the env before setup.
 * @return {Function}
 */
function gzip(distPath, productionOnly) {
  if (productionOnly && process.env.NODE_ENV !== 'production') {
    return this.toolbelt;
  }

  gzipHelper.commonRoutes(this.app, distPath);

  return this.toolbelt;
}

module.exports = gzip;
