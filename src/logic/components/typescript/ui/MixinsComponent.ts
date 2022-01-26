import * as vue from "vue";

import { amgarciaMixin }                       from "./../../../mixins/amgarcia-mixin";
import { IData as IAmgarciaMixinData }         from "./../../../mixins/amgarcia-mixin";
import { IMethod as IAmgarciaMixinMethod }     from "./../../../mixins/amgarcia-mixin";
import { IComputed as IAmgarciaMixinComputed } from "./../../../mixins/amgarcia-mixin";

import { otroMixin }                       from "./../../../mixins/otro-mixin";
import { IData as IOtroMixinData }         from "./../../../mixins/otro-mixin";
import { IMethod as IOtroMixinMethod }     from "./../../../mixins/otro-mixin";
import { IComputed as IOtroMixinComputed } from "./../../../mixins/otro-mixin";

interface IProps {
}

interface IData {

    ownproperty : number;
    conflicted  : string;

}

interface IComputed {

    owncomputed        : string;
    conflictedComputed : string;

}

interface IMethod  {

    sayHello : () => void;
    sayBye : () => void;

}

interface IComponent extends IProps, IData, IMethod, IComputed, IAmgarciaMixinData, IAmgarciaMixinMethod, IAmgarciaMixinComputed, IOtroMixinData, IOtroMixinMethod, IOtroMixinComputed {
}

// const MixinsComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const MixinsComponent  = vue.defineComponent( {

    name: "MixinsComponent",

    mixins : [ otroMixin, amgarciaMixin ],

    directives : { },

    components : { },

    props : { },

    data () : IData {

        return {

            ownproperty : 25 as number,
            conflicted  : "estoy en el componente" as string,

        };

    },

    computed : {

        owncomputed () : string {

            const me : IComponent = this;

            return me.ownproperty + "_computed_in_component";
        },

        conflictedComputed () : string {

            const me : IComponent = this;

            return Math.random() + "_computed_in_component";
        },

    },

    methods : {

        sayHello () : void {
            console.info( "Hello from the component" );
        },

        sayBye : () => {
            console.info( "Bye bye from the component" );
        },

    },

    created () : void {

        const me : IComponent = this;

        console.info( "Created del componente - data.ownproperty", me.ownproperty );
        console.info( "Created del componente - data.message", me.message );
        console.info( "Created del componente - data.conflicted", me.conflicted );

    },

    mounted () : void {

        const me: IComponent = this;

        me.sayHello();
        me.sayGoodMoring();
        me.sayBye();

    },

} );

export default MixinsComponent;
