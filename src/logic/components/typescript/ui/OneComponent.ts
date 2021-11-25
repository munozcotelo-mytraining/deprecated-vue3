import * as vue from "vue";

interface IBook {
    name   : string;
    author : string;
}

interface IItem {
    id      : number,
    name    : string,
    visible : boolean,
};

const OneComponent = vue.defineComponent( {

    name: "OneComponent",

    props : {

        theName    : String,
        theSurname : String,
        theNumber  : Number,

    },

    data() {

        return {

            contador : 10 as number,

            rawHtml: "<span style=\"color: red\">This should be red.</span>",

            cancelContador : 0 as number,

            myAttribute : "class" as string,

            index : 50 as number,
            book   : {

                name   : "Quijote xx",
                author : "Cervantes",

            } as IBook,

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

        }

    },

    beforeCreate () {
        console.info( `En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    },

    created () {
        console.info( `En el hook de created. Ya tengo this.book ${this.book}` );
    },

    mounted () {

        console.info( "En el hook de mounted (12)" );
        console.info( this.book.name );

        const me = this;

        this.cancelContador = setInterval ( () => {
            this.contador +=1;
        }, 2000 );

    },

    beforeMount () {
        console.info( "En el hook de beforeMount" );
    },

    beforeUnMount () {

        console.info( "En el hook de beforeMount" );

        clearInterval( this.cancelContador );

    },

    // template: '<div>hola y adios</div>',

} );

export default OneComponent;
