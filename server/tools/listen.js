function defaultOnListen(port) {
  console.log(`Listening on port ${port}`);
}

/**
 * Tell the app to listen on an http port.
 *
 * @param  {Function} onListen  Called after the app starts listening.
 *                              Default behavior is to print a console message.
 * @param  {Integer} defaultPort If `process.env.PORT` is undefined, supply a custom port.
 *                               Defaults to 5000.
 * @return {Function}
 */
function listen(onListen, defaultPort) {
  const port = process.env.PORT || defaultPort || 5000;

  this.app.listen(port, () => {
    const listener = onListen || defaultOnListen;

    listener(port);
  });

  return this.toolbelt;
}

module.exports = listen;
