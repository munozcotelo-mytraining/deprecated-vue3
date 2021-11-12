const path            = require( "path" );
const VueLoaderPlugin = require( "vue-loader/lib/plugin" );
const webpack         = require( "webpack" );
// const { CheckerPlugin } = require( "awesome-typescript-loader" );

var contextPath = path.resolve( __dirname, ".." );
var distPath    = path.resolve( contextPath, "dist" );
var srcPath     = path.resolve( contextPath, "src" );
var configPath  = path.resolve( contextPath, "config" );
var bannersPath = path.resolve( contextPath, "libs", "banners" );

/* Customize these values */
var componentName = "vue-component";
var jsonpName     = "VueComponentFrontend";

var configuration = {

    context : contextPath,

    entry : { // configured below

    },

    output : {

        pathinfo      : true,
        path          : distPath,
        publicPath    : "/dist/",
        filename      : "vue3.js",
        // chunkFilename : "[name]-[contenthash].bundle.js",
        // filename      : "[name]-[contenthash].js",
        // jsonpFunction : "webpackJsonp" + jsonpName,

    },

    performance : {

        maxAssetSize : 500000,
        maxEntrypointSize : 500000,

    },

    // optimization : {
    //
    //     runtimeChunk : {
    //         name : entrypoint => `runtime-${entrypoint.name}`,
    //     },
    //
    //     splitChunks : {
    //
    //         cacheGroups : {
    //
    //             vendor : {
    //                 test      : /[\\/]node_modules[\\/]/,
    //                 name      : "vendor-" + componentName,
    //                 chunks    : "all",
    //             },
    //
    //             config : {
    //                 test    : /[\\/]config[\\/]/,
    //                 name    : "config-" + componentName,
    //                 minSize : 500,
    //                 chunks  : "all",
    //             },
    //
    //         },
    //
    //     },
    //
    // },

    resolve : {
        extensions : [ ".ts", ".tsx", ".js", ".vue" ],
        //  vmlazaro - enables compiler and thus the full build
        //             instead of rutime-only build
        //  https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        // ,
        // alias : {
        //     'vue$': path.resolve( contextPath, "node_modules", "vue", "dist", "vue.esm.js" )
        // }
    },

    module : {

        rules : [

            {

                test    : /\.tsx?$/,
                include : [

                    configPath,
                    srcPath,
                    bannersPath,

                ],
                use : {

                    loader  : "ts-loader",
                    // loader : "awesome-typescript-loader",
                    options : {

                        configFile :  path.resolve( contextPath, "tsconfig.json" ),
                        appendTsSuffixTo : [ /\.vue$/ ],

                    },

                }

            },

            {

                test    : /\.vue$/,
                include : [
                    srcPath,
                    bannersPath,
                ],
                use     : {

                    loader  : "vue-loader",
                    options : {

                        esModule : true,
                        cacheDirectory : true,

                    },

                },

            },

            {

                test : /\.css$/,
                use : [
                    "vue-style-loader",
                    "css-loader",
                ],

            },

        ],

    },

    plugins : [

        // new CheckerPlugin(),

        new webpack.HashedModuleIdsPlugin(),

        new VueLoaderPlugin(),

    ],


};

configuration.entry[ componentName ] = path.resolve( srcPath, "main.ts" );

module.exports = configuration;
