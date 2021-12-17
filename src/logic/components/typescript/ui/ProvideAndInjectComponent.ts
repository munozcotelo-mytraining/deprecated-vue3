import * as vue from "vue";

import Hijo1 from "./../../vue/ui/provideinject/Hijo1.vue";

interface IProps {
}

interface IData {
    theList     : number[],
    ownProperty : string;
    random      : number;
}

interface IComputed {
}

interface IMethod  {
    changeComponent : ( component: string ) => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

interface IProvide {

    ownProperty     : string;
    valueFromParent : string;
    random          : vue.ComputedRef<number>;

}

// const ProvideAndInjectComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const ProvideAndInjectComponent  = vue.defineComponent( {

    name: "ProvideAndInjectComponent",

    components : {

        Hijo1,

    },

    provide () {

        const me : IComponent = this;

        return {

            ownProperty     : me.ownProperty,
            valueFromParent : "a value from parent ProvideAndInjectComponent",
            random          : vue.computed( () => this.theList.length ),

        } as IProvide;

    },

    props : {
    },

    data () : IData {

        return {
            theList     : [],
            ownProperty : "Property in parent",
            random      : 0,
        };

    },

    mounted () {

        const me : IComponent = this;

        setInterval( () => {
            me.theList.push( Math.random() );
        }, 2500 );

    },

    computed : {
    },

    methods : {
    },

} );

export default ProvideAndInjectComponent;
