/**
 * Create a single page app route.
 *
 * @param  {String} templatePath Path to html template file.
 *                               EG: `${__dirname}/template.html`
 * @return {Function}
 */
function spa(templatePath) {
  this.app.get('*', (req, res) => {
    res.sendFile(templatePath);
  });

  return this.toolbelt;
}

module.exports = spa;
