const { merge }                 = require( "webpack-merge" );
const TerserPlugin              = require( "terser-webpack-plugin" );
const { WebpackManifestPlugin } = require( "webpack-manifest-plugin" );
const HtmlWebpackPlugin         = require( "html-webpack-plugin" );

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

        /*
         * https://webpack.js.org/guides/code-splitting/
         * https://github.com/jantimon/html-webpack-plugin#configuration
         * https://github.com/jaketrent/html-webpack-template/blob/master/index.ejs#L56-L58
         * */
        new HtmlWebpackPlugin( {

            filename : "./../index.html",
            template : "./src/index-template.html",
            inject   : false,

        } ),

        new WebpackManifestPlugin( {

            fileName : "normal-manifest.json",
            generate : manifestConfiguration.generateFunction,

        } ),

    ],

} );

module.exports = mergedConfiguration;
