nanrange
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the arithmetic range of an array ignoring non-numeric values.

## Installation

``` bash
$ npm install compute-nanrange
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var nanrange = require( 'compute-nanrange' );
```

#### nanrange( arr[, accessor] )

Computes the range of an `array` ignoring non-numeric values. For primitive `arrays`,

``` javascript
var arr = [ 2, null, 3, 4, null, 1 ];

var r = range( arr );
// returns [1,4]
```

For object `arrays`, provide an accessor `function` for accessing `array` values

``` javascript
var arr = [
	[1,2],
	[2,null],
	[3,3],
	[4,4],
	[5,null],
	[6,1]
];

function getValue( d ) {
	return d[ 1 ];
}

var r = range( arr, getValue );
// returns [1,4]
```

__Note__: if an input `array` does not contain any `numeric` values, the function returns `null`.



## Examples

``` javascript
var nanrange = require( 'compute-nanrange' );

var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
  if( i % 2 === 0 ){
    data[ i ] = null;
  } else {
    data[ i ] = Math.random()*100;
  }
}
console.log( nanrange( data ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-nanrange.svg
[npm-url]: https://npmjs.org/package/compute-nanrange

[travis-image]: http://img.shields.io/travis/compute-io/nanrange/master.svg
[travis-url]: https://travis-ci.org/compute-io/nanrange

[coveralls-image]: https://img.shields.io/coveralls/compute-io/nanrange/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/nanrange?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/nanrange.svg
[dependencies-url]: https://david-dm.org/compute-io/nanrange

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/nanrange.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/nanrange

[github-issues-image]: http://img.shields.io/github/issues/compute-io/nanrange.svg
[github-issues-url]: https://github.com/compute-io/nanrange/issues
