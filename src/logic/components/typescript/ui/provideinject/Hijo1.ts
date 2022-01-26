import * as vue from "vue";

import Hijo2 from "./../../../vue/ui/provideinject/Hijo2.vue";

interface IProps {
}

interface IData {
}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
    name: string;
}

// const Hijo1 : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const Hijo1  = vue.defineComponent( {

    name: "Hijo1",

    components : {

        Hijo2,

    },

    props : { },

    data () : IData {

        return {
        };

    },

    computed : {
    },

    methods : {

        sayHello () : void {
            alert( "Hello from Hijo1" );
        },

    },

    created () : void { },

} );

export default Hijo1;
