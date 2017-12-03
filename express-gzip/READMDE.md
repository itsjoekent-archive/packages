# itsjoekent-express-gzip

Accept gzip requests on an express app.

## Usage

```js
const gzip = require('itsjoekent-express-gzip');
const express = require('express');
const app = express();

app.use('/public', express.static('public'));

if (process.env.NODE_ENV === 'production') {
  gzip.commonRoutes(app, '/public/dist/');
}
```

## Installation

```sh
$ npm install itsjoekent-express-gzip
```

## Apart of itsjoekent/packages
Very opinionated ™️ suite of NPM packages I use to quickly build cool shit.
[https://github.com/itsjoekent/packages](https://github.com/itsjoekent/packages)

## License

MIT
