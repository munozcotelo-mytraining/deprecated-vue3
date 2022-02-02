import * as vue       from "vue";
import * as vueRouter from "vue-router";

import { genRoutes } from "./../configuration/routing";
// import { genRoutes } from "./logic/routing";

import { myPlugin }          from "./logic/plugins/myPlugin";
import { amgarciaDirective } from "./logic/directives/amgarcia-directive";

import App from "./logic/components/App.vue";

// const vm : vue.App = vue.createApp(App);

/* Si necesitamos pasar parametros/propiedades al componente */
const vm : vue.App = vue.createApp( {

    render : () => {
        return vue.h( App, {

            title : "Training Vue3",

        } );
    },

} );

vm.config.errorHandler = ( error : unknown, instance : vue.ComponentPublicInstance | null, info : string ) => {

    console.info( "main errorHandler error", error );
    console.info( "main errorHandler instance", instance );
    console.info( "main errorHandler info", info );

};

vm.config.warnHandler = ( message : string, instance : vue.ComponentPublicInstance | null, trace : string ) => {

    console.info( "main warnHandler message", message );
    console.info( "main warnHandler instance", instance );
    console.info( "main warnHandler trace", trace );

};

const router : vueRouter.Router = vueRouter.createRouter( {

    // history : vueRouter.createWebHistory(),
    history : vueRouter.createWebHashHistory(),
    routes  : genRoutes(),

} );

router.beforeEach( ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {

    console.info( "En el main beforeEach", to, from );

    /* Cancelar */
    // return false;

    /* Redirigir */
    // if ( to.name !== "route2" ) {
    //     router.push( { name : "route2" } );
    // }

    /* No devolver implica dejar pasar */

} );

router.beforeEach( ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {

    console.info( "En el main beforeEach 2", to, from );

} );

router.beforeEach( async ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {

    console.info( "En el main beforeEach async", to, from );

    try {

        await simulateAsync();
        console.info( "En el main beforeEach async - ok" );

        /* Redirigir */
        // if ( to.name !== "route2" ) {
        //     router.push( { name : "route2" } );
        // }

    } catch( error ) {

        console.info( "En el main beforeEach async - error", error );
        /* Cancelar */
        return false;

    }

} );

router.beforeResolve( ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {
    console.info( "En el main beforeResolve", to, from );
} );

router.afterEach( ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized, failure : vueRouter.NavigationFailure | void ) => {

    /* failure indica si hubo error al rutear y de que tipo */

    console.info( "En el main afterEach", to, from );
    console.info( "En el main afterEach failure???", failure );

} );

/* Router guards
 * beforeEach:
 *  puede ser sincrono o asincrono
 *  ocurre cuando comienza el cambio de ruta
 *  puede haber n-funciones
 * beforeResolve:
 *  puede ser sincrono o asincrono
 *  ocurre después de los router guards del propio componente
 *  puede haber n-funciones
 * afterEach:
 *  puede ser sincrono o asincrono
 *  ocurre al final del todo
 *  puede haber n-funciones
 *  no afecta a la navegacion, no se puede hacer nada para impedir el ruteo
 */

vm.use( myPlugin, { a : 1, b : 2 } );
vm.use( router );

// vm.directive( "amgarcia", amgarciaDirective );

// vm.mixin( {
//
//     created () : void {
//
//         console.info( "Created en mixin global");
//         console.info( "Created en mixin global");
//         console.info( "Created en mixin global");
//
//     },
//
// } );

/* Avoid warning message. The message indicates set this config to not show it */
vm.config.unwrapInjectedRef = true;

vm.mount( "#bootstrap" );

function simulateAsync() : Promise<void>{

    return new Promise( ( resolve : () => void, reject : ( error : Error ) => void ) => {

        setTimeout( () => {

            /* Permitir */
            return resolve();

            /* Rechazar */
            // return reject( new Error("Fake error en beforeEach" ) ) ;

        }, 2000 );

    } );
}
