const { merge }          = require( "webpack-merge" );
const TerserPlugin   = require( "terser-webpack-plugin" );
const { WebpackManifestPlugin } = require( "webpack-manifest-plugin" );

const baseConfig = require( "./base.config.js" );
const manifestConfiguration = require( "./manifestFiles.js" );

const mergedConfiguration = merge( baseConfig, {

    // optimization : {
    //
    //     minimize  : true,
    //     minimizer : [
    //
    //         new TerserPlugin( {
    //
    //             test          : /\.js($|\?)/i,
    //             cache         : true,
    //             exclude       : /\/node_modules/,
    //             parallel      : true,
    //             sourceMap     : false,
    //             terserOptions : {
    //
    //                 warnings : false,
    //                 compress : {
    //                     drop_console : false,
    //                 },
    //
    //             },
    //
    //         } ),
    //
    //     ]
    //
    // },

    plugins : [

        new WebpackManifestPlugin( {

            fileName : "normal-manifest.json",
            generate : manifestConfiguration.generateFunction,

        } ),

    ],

} );

module.exports = mergedConfiguration;
