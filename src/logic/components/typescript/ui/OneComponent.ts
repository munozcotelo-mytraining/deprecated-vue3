import * as vue from "vue";

interface IBook {
    name   : string;
    author : string;
}

interface IItem {

    id      : number;
    name    : string;
    visible : boolean;

}

interface IData {

    contador       : number,
    rawHtml        : string,
    cancelContador : number,
    myAttribute    : string,
    index          : number,
    items          : IItem[],

}

const OneComponent : vue.DefineComponent = vue.defineComponent( {

    name: "OneComponent",

    props : {

        theName    : String,
        theSurname : String,
        theNumber  : Number,
        theBook    : Object as vue.PropType<IBook>,

    },

    data () : IData {

        return {

            contador : 10 as number,

            rawHtml: "<span style=\"color: red\">This should be red.</span>" as string,

            cancelContador : 0 as number,

            myAttribute : "class" as string,

            index : 50 as number,

            items: [
                {
                    id      : 1,
                    name    : "uno",
                    visible : true,
                },
                {
                    id      : 2,
                    name    : "dos",
                    visible : true,
                },
                {
                    id      : 3,
                    name    : "tres",
                    visible : false,
                }
            ] as IItem[],

        };

    },

    methods : {

        increment () : void {

            const me = this;

            me.index +=1;

        },

    },

    beforeCreate () : void {
        console.info( `OneComponent. En el hook de beforeCreate 1. Ya tengo this.theBook ${this.theBook}` );
    },

    created () : void {
        console.info( `OneComponent. En el hook de created. Ya tengo this.theBook ${this.theBook}` );
    },

    mounted () : void {

        console.info( "OneComponent. En el hook de mounted" );

        const me = this;

        me.cancelContador = setInterval ( () => {
            me.contador +=1;
        }, 2000 );

    },

    beforeMount () : void {
        console.info( "OneComponent. En el hook de beforeMount" );
    },

    beforeUnMount () : void {

        console.info( "OneComponent. En el hook de beforeMount" );

        clearInterval( this.cancelContador );

    },

    // template: '<div>hola y adios</div>',

} );

export default OneComponent;
