import * as vue       from "vue";
import * as vueRouter from "vue-router";

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
}

// const OneComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const OneComponent  = vue.defineComponent( {

    name  : "OneComponent",
    props : {

        tag : String,

    },

    created () : void {

        const me : IComponent = this;
        console.info( "OneComponent" );

    },

    beforeRouteUpdate( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
        console.info( "OneComponent - beforeRouteUpdate", to, from );
    },

} );

export default OneComponent;
