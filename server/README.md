# itsjoekent-server

Quickly spin-up an express server.

## Usage

```js
const server = require('itsjoekent-server');

const app = server
  .makeApp()
  .public('/public', path.join(__dirname, 'public'))
  .gzip('/public/dist/', true)
  .spa(`${__dirname}/template.html`)
  .listen()
  .app;
```

## Installation

```sh
$ npm install itsjoekent-server
```

## Apart of itsjoekent/packages
Very opinionated ™️ suite of NPM packages I use to quickly build cool shit.
[https://github.com/itsjoekent/packages](https://github.com/itsjoekent/packages)

## License

MIT
