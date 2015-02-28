'use strict';

var nanrange = require( './../lib' );

var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	if ( i % 2 === 0 ){
		data[ i ] = null;
	} else {
		data[ i ] = Math.random()*100;
	}
}

console.log( nanrange( data ) );
