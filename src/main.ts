import * as vue from "vue";

import App from "./logic/components/App.vue";

const vm = vue.createApp(App);

/* Si necesitamos pasar parametros al componente */
// const vm  = vue.createApp( {
//
//     render : () => {
//         return vue.h( App );
//     },
//
// } );

vm.mount( "#bootstrap" );
