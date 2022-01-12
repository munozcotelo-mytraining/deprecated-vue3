const path                = require( "path" );
const { VueLoaderPlugin } = require( "vue-loader" );
const webpack             = require( "webpack" );
// const { CheckerPlugin } = require( "awesome-typescript-loader" );

const contextPath = path.resolve( __dirname, ".." );
const distPath    = path.resolve( contextPath, "dist" );
const srcPath     = path.resolve( contextPath, "src" );
const configPath  = path.resolve( contextPath, "config" );
const bannersPath = path.resolve( contextPath, "libs", "banners" );
//const nodeModules = path.resolve( contextPath, "node_modules" );

/* Customize these values */
const componentName = "vue-component";
const jsonpName     = "VueComponentFrontend";

const configuration = {

    context : contextPath,

    entry : { // configured below

    },

    output : {

        pathinfo      : true,
        path          : distPath,
        publicPath    : "/dist/",
        // filename      : "vue3.js",
        chunkFilename : "[name]-[contenthash].bundle.js",
        filename      : "[name]-[contenthash].js",
        uniqueName : "webpackJsonp" + jsonpName,

    },

    performance : {

        maxAssetSize : 500000,
        maxEntrypointSize : 500000,

    },

    optimization : {

        runtimeChunk : {
            name : entrypoint => `runtime-${entrypoint.name}`,
        },

        splitChunks : {

            cacheGroups : {

                vendor : {
                    test      : /[\\/]node_modules[\\/]/,
                    name      : "vendor-" + componentName,
                    chunks    : "all",
                },

                config : {
                    test    : /[\\/]config[\\/]/,
                    name    : "config-" + componentName,
                    minSize : 500,
                    chunks  : "all",
                },

            },

        },

    },

    resolve : {
        extensions : [ ".ts", ".tsx", ".js", ".vue" ],
        /*  vmlazaro - enables compiler and thus the full build
         *             instead of rutime-only build
         *  para vue2 --> https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
         *  para vue3 --> https://v3.vuejs.org/guide/installation.html#with-a-bundler
         *
         * amgarcia: Es decir:
         *  sin el alias -> se necesita vue-loader porque coge la propiedad 'template' y la convierte en una funcion 'render'. Necesitamos pues que todos nuestros componentes sean .vue
         *  con el alias -> no se neceisa vue-loader. Podemos crear componentes que sean simplemente .ts con la propiedad 'template' ( o funcion 'render', si nos gusta mas )
         */
        alias : {
            // 'vue$': path.resolve( contextPath, "node_modules", "vue", "dist", "vue.esm.js" ) /* para vue2 */
            "vue$": path.resolve( contextPath, "node_modules", "vue", "dist", "vue.esm-bundler.js" ) /* para vue3*/
        }


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

        new webpack.ids.HashedModuleIdsPlugin(),

        new webpack.DefinePlugin( {

            __VUE_OPTIONS_API__ : true,
            __VUE_PROD_DEVTOOLS__: true,

        } ),

        new VueLoaderPlugin(),

    ],


};

configuration.entry[ componentName ] = path.resolve( srcPath, "main.ts" );

module.exports = configuration;
