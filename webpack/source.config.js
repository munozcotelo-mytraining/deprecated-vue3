const merge          = require( "webpack-merge" );
const TerserPlugin   = require( "terser-webpack-plugin" );
const ManifestPlugin = require( "webpack-manifest-plugin" );

const baseConfig = require( "./base.config.js" );
const manifestConfiguration = require( "./manifestFiles.js" );

const mergedConfiguration = merge( baseConfig, {

    /* dev-tool para tener codigo original */
    /* No funciona */
    // devtool : "cheap-module-source-map",
    // devtool : "inline-cheap-module-source-map",
    // devtool: "inline-source-map",
    // devtool: "hidden-source-map",

    /* Funciona */
    devtool : "cheap-module-eval-source-map",
    // devtool : "eval-source-map",

    /* Ha dejado de funcionar */
    // devtool: "source-map",
    // devtool: "#source-map",

    output : {

        sourceMapFilename : "[file].map",
        chunkFilename     : "source-[name]-[chunkhash].bundle.js",
        filename          : "source-[name]-[chunkhash].js",

    },

    optimization : {

        minimize  : true,
        minimizer : [

            new TerserPlugin( {

                test          : /\.js($|\?)/i,
                cache         : true,
                exclude       : /\/node_modules/,
                parallel      : true,
                sourceMap     : true,
                terserOptions : {

                    warnings : false,
                    compress : {
                        drop_console : false,
                    },

                },

            } ),

        ]

    },

    plugins : [

        new ManifestPlugin( {

            fileName : "source-manifest.json",
            generate : manifestConfiguration.generateFunction,

        } ),

    ],

} );

module.exports = mergedConfiguration;
