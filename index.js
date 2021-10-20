'use strict'

var mongoose = require( 'mongoose' );
//cargar archivo app
var app = require( './app' );
// puerto de servidor
var port = 3700;
mongoose.Promise = global.Promise;

mongoose.connect( 'mongodb://localhost:27017/portafolio' )
    .then( () =>
    {
        console.log( "exitosa" );
        //creacion servidor
        app.listen( port, () =>
        {
            console.log( "servidor corriendo" );
        } );
    } )
    .catch( err => console.log( err ) );

