/**
 * Bind the given list of function names on the Class
 * to the class.
 *
 * @param  {Object} context
 * @param  {Array<String>} functions
 */
function functions(context, functions) {
  for (const fn of functions) {
    if (! context[fn]) continue;

    context[fn] = context[fn].bind(context);
    context[fn].isBinded = true;
  }
}

/**
 * Bind every function on the given class to the class.
 *
 * @param  {Object} context
 * @param  {Class}  clss
 */
function all(context, clss) {
  const allFunctions = Object.getOwnPropertyNames(clss.prototype)
    .filter(fn => fn !== 'constructor');

  functions(context, allFunctions);
}

module.exports = {
  functions, all,
};
