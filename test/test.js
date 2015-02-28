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
			true,
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

	it( 'should throw an error if provided an accessor which is not a function', function test() {
		var values = [
			'5',
			5,
			null,
			undefined,
			NaN,
			true,
			[],
			{}
		];
		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				nanrange( [], value );
			};
		}
	});

	it( 'should compute the arithmetic range', function test() {
		var data, expected;

		data = [ 3, 4, 2, 1, 4 ];
		expected = [ 1, 4 ];

		assert.deepEqual( nanrange( data ), expected );
	});

	it( 'should ignore non-numeric values', function test() {
		var data, expected;

		data = [ 3, null, 4, 2, 1, null, 4, 6 ];
		expected = [ 1, 6 ];

		assert.deepEqual( nanrange( data ), expected );
	});

	it( 'should compute the arithmetic range using an accessor function', function test() {
		var data, expected, actual;

		data = [
			[1,3],
			[2,null],
			[3,4],
			[4,2],
			[5,1],
			[6,null],
			[7,4],
			[8,6]
		];

		expected = [ 1, 6 ];
		actual = nanrange( data, getValue );

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should return null is provided either an empty array or an array without any numeric values', function test() {
		var data, expected;

		data = [
			null,
			false,
			undefined,
			'',
			NaN,
			[],
			{}
		];
		expected = null;

		assert.strictEqual( nanrange( [] ), expected );
		assert.strictEqual( nanrange( data ), expected );
	});

	it( 'should compute an arithmetic range even if only provided an array containing a single numeric value', function test() {
		var data, expected;

		data = [ 5 ];
		expected = [ 5, 5 ];

		assert.deepEqual( nanrange( data ), expected );
	});

});
