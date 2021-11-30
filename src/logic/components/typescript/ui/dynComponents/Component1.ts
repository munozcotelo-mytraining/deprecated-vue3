import * as vue from "vue";

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

// const Component1 : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const Component1  = vue.defineComponent( {

    name: "Component1",

    props : {
    },

    data () : IData {

        return {
        };

    },

    computed : {
    },

    methods : {
    },

} );

export default Component1;
