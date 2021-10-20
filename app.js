var express = require( "express" );
var bodyParser = require( "body-parser" );

var app = express();

//MIDDLEWARE capa q se ejecuta antes de jecutar accion de un controlador
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );

//cors
//rutas
app.get( '/test', ( req, res ) =>
{
    res.status( 200 ).send( {
        message: "hola"
    } )
} )


app.post( '/test2/:id', ( req, res ) =>
{
    console.log( ( req.body.nombre ) );
    //http://localhost:3700/test2?web=hola
    console.log( ( req.query.web ) );
    //http://localhost:3700/test2/88?web=hola
    console.log( req.params.id );
    res.status( 200 ).send( {
        message: "hola envio  por post"

    } )
} )
//exportar
module.exports = app;
