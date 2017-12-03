/**
 * Request handler to accept file requests and append a gzip extension.
 *
 * @param  {Object}   req
 * @param  {Object}   res
 * @param  {Function} next
 */
function gzip(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
}

/**
 * Setup js & css gzip routes on an express app.
 *
 * @param  {Object} app
 * @param  {String} publicPath
 */
function commonRoutes(app, publicPath) {
  app.get(`${publicPath}*.js`, gzip);
  app.get(`${publicPath}*.css`, gzip);
}

module.exports = {
  gzip,
  commonRoutes,
};
