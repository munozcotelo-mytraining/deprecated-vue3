// const _ = require("lodash");

var componentName = "vue-component";

const manifestFiles = [

    {
        name  : componentName + ".js",
        index : 2000,
    },
    {
        name  : "config-" + componentName + ".js",
        index : 1500,
    },
    {
        name  : "vendor-" + componentName + ".js",
        index : 1000,
    },
    {
        name  : "runtime-" + componentName + ".js",
        index : 500,
    },

];

let manifest = {

    generateFunction: ( seed, files ) => {

        var manifest = {};

        for ( item of manifestFiles ) {

            const fileSeed = Reflect.ownKeys( seed ).find( ( tmp ) => { return tmp === item.name } );

            if ( fileSeed !== undefined ) {

                manifest[ item.name ] = {

                    index : item.index,
                    path  : seed[ item.name ].path,
                    // path  : "/dist/" + seed[ item.name ],

                };

            } else {

                const file = files.find( ( file ) => { return file.name === item.name } );

                if ( file !== undefined ) {

                    manifest[ item.name ] = {

                        index : item.index,
                        path  : file.path.replace( "/dist/", "" ),
                        // path  : file.path,

                    };

                }

            }

        }

        return manifest;

    },

    reduceFunction: function( manifest, data, seed ) {

        console.info( "*********************" );
        console.info( "*********************" );
        console.info( "*********************" );
        console.info( "*********************" );
        console.info( "*********************" );
        console.info( "*********************" );
        console.info( "¡¡ OJO igual hay que arreglar !!" );

        // console.info( manifes, data, seed );

        const file = manifestFiles.find( ( file ) => { return file === data.name } );

        if ( file !== undefined ) {

            manifest[ data.name ] = {

                index : file.index,
                path  : data.path,

            };

        }

        return manifest;

    },

};

module.exports = manifest;
