import * as vue from "vue";

import OneComponent           from "./vue/ui/OneComponent.vue";
import CommunicationComponent from "./vue/ui/CommunicationComponent.vue";

interface IBook {

    name   : string;
    author : string;

}

interface IData {

    book            : IBook;
    clicksOnButton1 : number,
    clicksOnButton2 : number,
    clicksOnButton3 : number,
    manolo          : number;

}

interface IMethod  {

    callbackForButton : () => void;

}

interface IComponent extends IData, IMethod { }

// const App : vue.DefineComponent = vue.defineComponent( {
const App = vue.defineComponent( {

    name: "App",

    props : {

        title : String,

    },

    components : {

        OneComponent,
        CommunicationComponent,

    },

    data () : IData {

        return {

            manolo : 50 as number,
            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,

            clicksOnButton1 : 0 as number,
            clicksOnButton2 : 0 as number,
            clicksOnButton3 : 0 as number,

        }

    },

    methods : {

        callbackForButton () : void {

            const me : IComponent = this;

            me.clicksOnButton1 +=1;

            console.info( "Han hecho click en button (1) de CommunicationComponent." );

        },

        eventForButton1 ( data : unknown ) : void {

            console.info( arguments );
            const me : IComponent = this;

            me.clicksOnButton2 +=1;

            console.info( "Han hecho click en button (2) de CommunicationComponent." );
            console.info( "... with data ", data );

        },

        eventForButton2 ( data : unknown ) : void {

            console.info( arguments );
            const me : IComponent = this;

            me.clicksOnButton3 +=1;

            console.info( "Han hecho click en button (3) de CommunicationComponent." );
            console.info( "... with data ", data );

        },

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
