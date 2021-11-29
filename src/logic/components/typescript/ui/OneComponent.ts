import * as vue from "vue";

type Timer = ReturnType<typeof setInterval> | null;

interface IBook {

    author : string;
    name   : string;

}

interface IItem {

    id      : number;
    name    : string;
    visible : boolean;

}

interface IProps {

    theBook    : IBook,
    theName    : string,
    theNumber  : number,
    theSurname : string,

}

interface IData {

    apellido       : string,
    answer         : string,
    cancelContador : Timer,
    contador       : number,
    index          : number,
    items          : IItem[],
    myAttribute    : string,
    nombre         : string,
    question       : string,
    rawHtml        : string,

}

interface IComputed {

    fullName          : string;
    indexPlusContador : number;

}

interface IMethod  {

    changeFullName : () => void;
    getAnswer      : () => void;
    increment      : () => void;

}

interface IComponent extends IProps, IData, IMethod, IComputed { }

// const OneComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const OneComponent  = vue.defineComponent( {

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

            nombre : "Vue" as string,

            apellido : "tres" as string,

            rawHtml: "<span style=\"color: red\">This should be red.</span>" as string,

            cancelContador : null,

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

            question : "" as string,

            answer : "" as string,

        };

    },

    computed : {

        indexPlusContador () : number {

            const me : IComponent = this;

            return me.index + me.contador;

        },

        fullName : {

            get () : string {

                const me : IComponent = this;
                return `${ me.nombre } ${me.apellido }`;

            },

            set ( fullName : string ) : void {

                const me : IComponent = this;

                const partes : string[] = fullName.split( " " );

                me.nombre    = partes[ 1 ];
                me.apellido = partes[ 0 ];

            },

        },

    },

    watch : {

        question( newQuestion : string, oldQuestion : string ) {

            const me : IComponent = this;

            if ( newQuestion.indexOf( "?" ) > -1 ) {
                me.getAnswer()
            }

        }

    },

    methods : {

        increment () : void {

            const me : IComponent = this;

            me.index += 1;

        },

        changeFullName ( fullName : string ) : void {

            const me : IComponent = this;

            me.fullName = fullName;

        },

        getAnswer( ) : void {

            const me : IComponent = this;

            me.answer ="Estoy pensando...";

            setTimeout( () => {
                me.answer = `Random answer ${ Math.random() }`;
            }, 2500 );

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

        const me : IComponent = this;

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
