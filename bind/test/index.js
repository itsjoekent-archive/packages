const assert = require('chai').assert;
const bind = require('../src');

class Demo {
  hello() {
    return 'world';
  }

  foo() {
    return 'bar';
  }
}

describe('bind', function() {
  it('should bind a list of functions to the class', function() {
    const test = new Demo();

    bind.functions(test, ['hello']);

    assert.isTrue(test.hello.isBinded, 'hello is bound to the class');
    assert.isUndefined(test.foo.isBinded, 'foo is not bound to the class');

    assert.equal('world', test.hello(), 'hello returns expected output');
  });

  it('should bind a list of functions to the class even if one does not exist', function() {
    const test = new Demo();

    bind.functions(test, ['foo', 'bar']);

    assert.isTrue(test.foo.isBinded, 'foo is bound to the class');

  });

  it('should bind all functions to the class except the constructor', function() {
    const test = new Demo();
    bind.all(test, Demo);

    assert.isTrue(test.hello.isBinded, 'hello is bound to the class');
    assert.isTrue(test.foo.isBinded, 'foo is bound to the class');

    assert.equal('world', test.hello(), 'hello returns expected output');
    assert.equal('bar', test.foo(), 'foo returns as expected');
  });

  it('is actually be bound to the class', function(callback) {
    class Test {
      constructor() {
        this.ref = 'ok';

        bind.all(this, Test);
      }

      hey() {
        return 'hi';
      }

      howdy(cb) {
        return setTimeout(() => cb(this.ref), 0);
      }
    }

    const test = new Test();
    test.howdy(function (result) {
      assert.equal('ok', result, 'bound function returns correct value');
      callback();
    });
  });
});
