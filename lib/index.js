/**
*
*	COMPUTE: nanrange
*
*
*	DESCRIPTION:
*		- Computes the arithmetic range of an array of values ignoring all non-numeric elements.
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

var isArray = require( 'validate.io-array' );
var isNumber = require( 'validate.io-number' );

// FUNCTIONS //

/**
* FUNCTION: nanrange( arr )
* Computes the arithmetic range of an array of values ignoring all
* non-numeric elements
*/
function nanrange( arr ) {
  if ( !isArray( arr ) ) {
    throw new TypeError( 'range()::invalid input argument. Must provide an array.' );
  }
  var len = arr.length,
  min = null,
  max = min,
  x;
  for ( var i = 1; i < len; i++ ) {
    x = arr[ i ];

    if ( !isNumber( x ) ) {
      continue;
    }
    if ( min === null || x < min ) {
      min = x;
    }
    if ( max === null || x > max ) {
      max = x;
    }
  }
  return [ min, max ];
} // end FUNCTION nanrange()


// EXPORTS //
module.exports = nanrange;
