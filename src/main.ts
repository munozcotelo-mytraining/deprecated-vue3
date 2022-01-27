import * as vue from "vue";

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

vm.use( myPlugin, { a : 1, b : 2 } );

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
