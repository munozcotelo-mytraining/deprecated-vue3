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

interface IComposition {
}

// const OneController : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const OneController  = vue.defineComponent( {

    name  : "OneController",

    setup ( props : any, context : vue.SetupContext ) : IComposition {

        vueRouter.onBeforeRouteUpdate( ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {
            console.info( "OneController Composition Api onBeforeRouteUpdate" );
        } );

        vueRouter.onBeforeRouteLeave( async ( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) => {

            console.info( "OneController Composition Api onBeforeRouteLeave" );

            return new Promise( ( resolve : () => void, reject : ( error : Error ) => void ) => {

                setTimeout( () => {

                    console.info( "OneController - onBeforeRouteLeave promise" );
                    resolve();

                }, 2000 );

            } );

        } );

        return {};

    },

    props : {

        tag : String,

    },

    created () : void {

        const me : IComponent = this;
        console.info( "OneController" );

    },

    beforeRouteUpdate( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
        console.info( "OneController - beforeRouteUpdate", to, from );
    },

} );

export default OneController;
