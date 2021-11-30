import * as vue from "vue";

interface IProps {
}

interface IData {

    info  : {

        propA : string;
        propB : string;

    };

}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const SlotComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const SlotComponent  = vue.defineComponent( {

    name: "SlotComponent",

    props : {
    },

    data () : IData {

        return {
            info   : {
                propA : "The propA",
                propB : "The propB",
            },
        };

    },

    computed : {
    },

    methods : {
    },

} );

export default SlotComponent;
