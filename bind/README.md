# itsjoekent-bind

Automatically bind all functions of a class to itself.

## Usage

```js
const bind = require('itsjoekent-bind');

class Example {
  constructor() {
    this.ref = 'ok';

    bind.all(this, Example);
  }

  howdy(cb) {
    return setTimeout(() => cb(this.ref), 0);
  }
}

new Example().howdy(console.log); // 'ok'
```

## Installation

```sh
$ npm install itsjoekent-bind
```

## Tests

```sh
$ npm install
$ npm test
```

## Apart of itsjoekent/packages
Very opinionated ™️ suite of NPM packages I use to quickly build cool shit.
[https://github.com/itsjoekent/packages](https://github.com/itsjoekent/packages)

## License

MIT
