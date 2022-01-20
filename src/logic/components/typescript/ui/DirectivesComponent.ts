import * as vue from "vue";

import { munozDirective } from "./../../../directives/munoz-directive";

interface IProps {
}

interface IData {

    argNameForDirective : string;
    argValueForDirective : number;

}

interface IComputed {
}

interface IMethod  {
    changeComponent : ( component: string ) => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const DirectivesComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const DirectivesComponent  = vue.defineComponent( {

    name: "DirectivesComponent",

    directives : {

        munoz : munozDirective,
        otra  : munozDirective,

    },

    components : { },

    props : { },

    data () : IData {

        return {

            argNameForDirective  : "paramUno" as string,
            argValueForDirective : 0 as number,

        };

    },

    computed : {
    },

    methods : {
    },

    created () : void {

        const me : IComponent = this;

        console.info( me );

        // setInterval( () => {
        setTimeout( () => {
            me.argValueForDirective +=1;
        }, 2000 );

    },

} );

export default DirectivesComponent;

