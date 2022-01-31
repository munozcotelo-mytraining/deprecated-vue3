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
    name: string;
}

// const Hijo2 : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const Hijo2  = vue.defineComponent( {

    name: "Hijo2",

    props : { },

    data () : IData {

        return {
        };

    },

    inject : [ "ownProperty", "valueFromParent", "random", "randomBis", "objProperty" ],

    computed : {
    },

    methods : {
    },

    created () : void {
        console.info( "Hijo2 created", this.$data, this.$props );
    },

    mounted () : void {
        console.info( "Hijo2 mounted", this.$el );
    },

} );

export default Hijo2;
