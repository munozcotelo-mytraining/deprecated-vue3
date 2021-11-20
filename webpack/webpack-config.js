const path                = require( "path" );
const { VueLoaderPlugin } = require( "vue-loader" );
// const { VueLoaderPlugin } = require( "vue-loader/lib/plugin" );
const webpack             = require( "webpack" );

const contextPath = path.resolve( __dirname, ".." );
const distPath    = path.resolve( contextPath, "dist" );
const srcPath     = path.resolve( contextPath, "src" );

const configuration = {

    context : contextPath,

    entry: path.resolve( srcPath, "main.ts" ),

    output : {

        pathinfo      : true,
        path          : distPath,
        publicPath    : "/dist/",
        filename      : "vue3.js",

    },

    resolve : {
        extensions : [ ".ts", ".tsx", ".js", ".vue" ],
        alias : {
            "vue$": path.resolve( contextPath, "node_modules", "vue", "dist", "vue.esm-bundler.js" ),
            // "vue$": path.resolve( contextPath, "node_modules", "vue", "dist", "vue.runtime.esm-bundler.js" ),
        }
    },

    module : {

        rules : [

            {

                //test    : /\.tsx?$/,
                test    : /\.ts$/,
                include : [

                    srcPath,

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

                test    : /\.tsx?$/,
                include : [

                    srcPath,

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
                ],
                use     : {
                    loader  : "vue-loader",
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

        new webpack.DefinePlugin( {

            __VUE_OPTIONS_API__ : true,
            __VUE_PROD_DEVTOOLS__: true,

        } ),

        new VueLoaderPlugin(),

    ],


};

module.exports = configuration;
