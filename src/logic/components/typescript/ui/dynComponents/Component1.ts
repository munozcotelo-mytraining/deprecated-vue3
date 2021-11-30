import * as vue from "vue";

interface IProps {
    tag: string;
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

// const Component1 : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const Component1  = vue.defineComponent( {

    name: "Component1",

    props : {

        tag : {

            required : true,
            type     : String,
        },

    },

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

        console.info( `Component1 - tag: ${ me.tag }` )

    },

} );

export default Component1;
