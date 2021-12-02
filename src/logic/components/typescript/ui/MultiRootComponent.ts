import * as vue from "vue";

interface IProps {

    tag : string;

}

interface IData {
}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
    $attrs : Record<string, unknown>;
}

// const MultiRootComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const MultiRootComponent  = vue.defineComponent( {

    name: "MultiRootComponent",
    props : {

        tag : {

            required : true,
            type     : String,
        },

    },

    created () : void {

        const me : IComponent = this;
        console.info( "MultiRootComponent this.$attrs", me.$attrs );
        console.info( "MultiRootComponent this.$attrs.class", me.$attrs.class );

    },

} );

export default MultiRootComponent;


