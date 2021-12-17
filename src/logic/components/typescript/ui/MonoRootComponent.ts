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

// const MonoRootComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const MonoRootComponent  = vue.defineComponent( {

    name  : "MonoRootComponent",
    props : {

        tag : {

            required : true,
            type     : String,
        },

    },

    created () : void {

        const me : IComponent = this;
        console.info( "MonoRootComponent this.$attrs", me.$attrs );
        console.info( "MonoRootComponent this.$attrs.class", me.$attrs.class );

    },

} );

export default MonoRootComponent;
