"use strict";

var router = require( 'express' ).Router(),
    Busboy = require( 'busboy' ),
    //submission = require( '../models/submission' ),
    debug = require( 'debug' )( 'submission controller' );

module.exports = function( app ) {
    app.use( '/submission', router );
};

router.post( '/', function( req, res, next ) {
    var xmlData, files,
        busboy = new Busboy( {
            headers: req.headers
        } );

    // TODO: add check for X-OpenRosa header
    // TODO: add max submssion size check and config
    // TODO: return max submission size header 
    // TODO: respond to HEAD request

    busboy.on( 'file', function( fieldname, stream, filename, transferEncoding, mimeType ) {
        if ( fieldname === 'xml_submission_file' ) {

        }
        debug( 'file:', fieldname, filename, mimeType, stream );
    } );

    busboy.on( 'finish', function() {
        /*return submission.set( xmlData, files)
            .then( function( response ) {
                res.set( {
                    'Content-Type': 'text/xml'
                } );
                res.status(response.status)
                res.send( response.xml );
            } )
            .catch( next );*/
    } );

    req.pipe( busboy );

} ).all( '*', function( req, res, next ) {
    res.status = 405;
    res.send( 'you is bad!' );
} );
