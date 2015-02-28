/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	nanrange = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-nanrange', function tests() {

	it( 'should export a function', function test() {
		expect( nanrange ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array', function test() {
		var values = [
				'5',
				5,
				null,
				undefined,
				NaN,
				function(){},
				{}
			];
			for ( var i = 0; i < values.length; i++ ) {
				expect( badValue( values[i] ) ).to.throw( TypeError );
			}
			function badValue( value ) {
				return function() {
					nanrange( value );
				};
			}
	});

	it( 'should return the arithmetic range', function test() {
		var data = [ 3, 4, 2, 1, 4 ],
		expected = [ 1, 4 ];
		assert.deepEqual( nanrange( data ), expected );
	});

	it( 'should ignore non-numeric values', function test() {
		var data = [ 3, null, 4, 2, 1, null, 4, 6 ],
		expected = [ 1, 6 ];
		assert.deepEqual( nanrange( data ), expected );
	});

});
