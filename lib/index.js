/**
*
*	COMPUTE: nanrange
*
*
*	DESCRIPTION:
*		- Computes the arithmetic range of an array ignoring non-numeric values.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),isNumber = require( 'validate.io-number' );


// NANRANGE //

/**
* FUNCTION: nanrange( arr[, accessor] )
*	Computes the arithmetic range of an array ignoring non-numeric values.
*
* @param {Array} arr - input array
* @param {Function} [accessor] - accessor function for accessing array values
* @returns {Array|null} arithmetic range or null
*/
function nanrange( arr, clbk ) {
	if ( !isArray( arr ) ) {
		throw new TypeError( 'range()::invalid input argument. Must provide an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 1 && typeof clbk !== 'function' ) {
		throw new TypeError( 'range()::invalid input argument. Accessor must be a function. Value: `' + clbk + '`.' );
	}
	var len = arr.length,
		min = null,
		max = min,
		flg = true,
		x;

	for ( var i = 0; i < len; i++ ) {
		x = ( clbk ) ? clbk( arr[i] ) : arr[ i ];
		if ( !isNumber( x ) ) {
			continue;
		}
		if ( flg ) {
			min = x;
			max = x;
			flg = false;
			continue;
		}
		if ( x < min ) {
			min = x;
		} else if ( x > max ) {
			max = x;
		}
	}
	return ( flg ) ? null : [ min, max ];
} // end FUNCTION nanrange()


// EXPORTS //

module.exports = nanrange;
