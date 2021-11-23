import * as vue from "vue";

import OneComponent from "./vue/ui/OneComponent.vue";

interface IBook {
    name   : string;
    author : string;
}

const App = vue.defineComponent( {

    name: "App",

    components : {
        OneComponent,
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
        console.info( `App - En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    },

    created () {
        console.info( `App - En el hook de created. Ya tengo this.book ${this.book}` );
    },

    mounted () {
        console.info( "App - En el hook de mounted (12)" );
        console.info( this.book.name );
    },

    beforeMount () {
        console.info( "App - En el hook de beforeMount" );
    },

} );

export default App;

