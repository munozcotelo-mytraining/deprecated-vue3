import * as vue from "vue";

import Component1 from "./../../vue/ui/dynComponents/Component1.vue";
import Component2 from "./../../vue/ui/dynComponents/Component2.vue";

interface IProps {
}

interface IData {
    componentName : string;
}

interface IComputed {
}

interface IMethod  {
    changeComponent : ( component: string ) => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const DynamicComponents : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const DynamicComponents  = vue.defineComponent( {

    name: "DynamicComponents",

    components : {

        Component1,
        Component2,

    },

    props : {
    },

    data () : IData {

        return {
            componentName : "Component1",
        };

    },

    computed : {
    },

    methods : {

        changeComponent ( component : string ) : void {

            const me : IComponent = this;

            me.componentName = component;

        },
    },

} );

export default DynamicComponents;
