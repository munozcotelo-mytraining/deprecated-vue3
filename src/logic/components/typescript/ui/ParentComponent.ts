import * as vue from "vue";

import { munozDirective } from "./../../../directives/munoz-directive";

interface IProps {
    value : number,
}

interface IData {
    data1    : string,
    contador : number,
}

interface IComputed {
    computed1 : string;
}

interface IMethod  {
    increment : () => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const ParentComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const ParentComponent  = vue.defineComponent( {

    name: "ParentComponent",

    directives : {

        munoz : munozDirective,
        otra  : munozDirective,

    },

    components : { },

    inject: [ "slotName" ],

    props : {

        value : {

            type     : Number,
            required : true,

        },

    },

    data () : IData {

        return {
            data1    : "Data definido en el padre" as string,
            contador : 0 as number,
        };

    },

    computed : {

        computed1() : string {

            const me : IComponent = this;
            return `${ me.data1 } -> ${ me.contador }`;

        },

    },

    methods : {

        increment() : void {

            const me : IComponent = this;
            me.contador += me.value;

        },
    },

    created () : void {

        const me : IComponent = this;

        console.info( "Parent component", me );

    },

} );

export default ParentComponent;
