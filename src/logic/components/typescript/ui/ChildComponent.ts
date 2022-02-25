import * as vue from "vue";

import ParentComponent from "./../../vue/ui/ParentComponent.vue";

// import { munozDirective } from "./../../../directives/munoz-directive";

interface IProps {
}

interface IData {
}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const ChildComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const ChildComponent  = vue.defineComponent( {

    name: "ChildComponent",

    extends: ParentComponent,

    // directives : {
    //
    //     munoz : munozDirective,
    //     otra  : munozDirective,
    //
    // },

    components : { },

    props : { },

    data () : IData {

        return {
        };

    },

    computed : {
    },

    methods : {
    },

    created () : void {

        const me : IComponent = this;

        console.info( "Child component", me );

    },

} );

export default ChildComponent;
