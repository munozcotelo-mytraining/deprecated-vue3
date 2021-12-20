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

// const ClassStyleBindingComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const ClassStyleBindingComponent  = vue.defineComponent( {

    name  : "ClassStyleBindingComponent",
    props : {

        tag : {

            required : true,
            type     : String,
        },

    },

    created () : void {

        const me : IComponent = this;
        console.info( "ClassStyleBindingComponent this.$attrs", me.$attrs );
        console.info( "ClassStyleBindingComponent this.$attrs.class", me.$attrs.class );

    },

} );

export default ClassStyleBindingComponent;

