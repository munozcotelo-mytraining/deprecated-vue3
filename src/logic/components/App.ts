import * as vue from "vue";

import OneComponent from "./vue/ui/OneComponent.vue";

interface IBook {

    name   : string;
    author : string;

}

interface IData {

    manolo : number;
    book   : IBook;

}

const App : vue.DefineComponent = vue.defineComponent( {

    name: "App",

    props : {

        title : String,

    },

    components : {
        OneComponent,
    },

    data () : IData {

        return {

            manolo : 50 as number,
            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,

        }

    },

    beforeCreate () : void {
        console.info( `App - En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    },

    created () : void {
        console.info( `App - En el hook de created. Ya tengo this.book ${this.book}` );
    },

    mounted () : void {
        console.info( "App - En el hook de mounted (12)" );
        console.info( this.book.name );
    },

    beforeMount () : void {
        console.info( "App - En el hook de beforeMount" );
    },

} );

export default App;
