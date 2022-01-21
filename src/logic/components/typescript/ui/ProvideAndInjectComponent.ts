import * as vue from "vue";

import Hijo1 from "./../../vue/ui/provideinject/Hijo1.vue";

interface IProps {
}

interface IData {

    theList     : number[],
    ownProperty : string;
    random      : number;
    randomBis   : number;
    objProperty : Record<string, any>;

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
    randomBis       : vue.Ref<number>;
    objProperty     : Record<string, any>;

}

let randomBisReactive : vue.Ref = vue.ref( 0 );

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
            randomBis       : randomBisReactive,
            objProperty     : me.objProperty,

        } as IProvide;

    },

    props : {
    },

    data () : IData {

        return {
            theList     : [],
            ownProperty : "Property in parent",
            random      : 0,
            randomBis   : 10,
            objProperty : {

                d1 : {
                    value : 0,
                },
                d2 : 2,
            },
        };

    },

    mounted () {

        const me : IComponent = this;

        setInterval( () => {

            me.ownProperty = "Mofified value";
            me.theList.push( Math.random() );
            me.randomBis += 1;
            me.objProperty.d1.value = Math.random();

            randomBisReactive.value = me.randomBis;

        }, 2500 );

    },

    computed : {
    },

    methods : {
    },

} );

export default ProvideAndInjectComponent;
