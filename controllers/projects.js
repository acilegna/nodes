//CONTROLADOR

var controller = {
    home: function ( req, res )
    {
        return res.status( 200 ).send( {
            message: "soy la home"
        } );
    },
    test: function ( req, res )
    {
        return res.status( 200 ).send( {
            message: "soy la test"
        } );
    },
}

module.exports = controller;