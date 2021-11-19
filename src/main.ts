import * as vue from "vue";

import * as OneComponent from "./logic/components/vue/OneComponent.vue";
import * as OneJsComponent from "./logic/components/vue/OneJsComponent.vue";


interface IBook {
    name   : string;
    author : string;
}

const RootComponent = vue.defineComponent( {

    components : {
        OneComponent,
        OneJsComponent,
    },

    data() {
        return {
            manolo : 50 as number,
            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,
        }
    },

    beforeCreate () {
        console.info( `En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    },

    created () {
        console.info( `En el hook de created. Ya tengo this.book ${this.book}` );
    },

    mounted () {
        console.info( "En el hook de mounted" );
        console.info( this.book.name );
    },

    beforeMount () {
        console.info( "En el hook de beforeMount" );
    },

    template: '<div>hola y adios<OneComponent/><OneJsComponent/></div>',

} );

//const vm : vue.ComponentPublicInstance = vue.createApp( RootComponent );
// const vm = vue.createApp( OneComponent );


const vm  = vue.createApp( {

    render : () => {
        return vue.h( RootComponent );
        // return vue.h( OneComponent );
        //return vue.h( OneJsComponent );
        //return vue.h('div', {}, "hola")
    },

} );

vm.mount( "#bootstrap");
