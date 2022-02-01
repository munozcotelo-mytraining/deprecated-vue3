import * as vue       from "vue";
import * as vueRouter from "vue-router";

import { genRoutes } from "./../../../../../configuration/routing";

interface IProps {
}

interface IData {

    numero        : number;
    routesCreated : boolean;

}

interface IComputed {
}

interface IMethod  {

    removeRoutes : () => void;
    addRoutes    : () => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {

    $router : vueRouter.Router;
    $route  : vueRouter.RouteLocationNormalized;

}

// const EmptyComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const EmptyComponent = vue.defineComponent( {

    name  : "EmptyComponent",
    props : { },

    data  () : IData {

        return {

            numero        : 4 as number,
            routesCreated : true as boolean,

        };

    },

    beforeRouteEnter( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized, next : vueRouter.NavigationGuardNext ) {

        /* beforeRouteEnter no tiene acceso al this porque ocurre antes de todo
         * pero gracias al argumento 'next', que es un callback podemos acceder al this
         */

        next ( ( instance ) => {

            console.info( "EmptyComponent - acceso al this gracias a next", instance );
            // instance.$router.push( { name : "route2" } );
            ( instance as any as IComponent ).numero = Math.random();

        } );

        console.info( "EmptyComponent - beforeRouteEnter", to, from );

    },

    beforeRouteUpdate( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
        console.info( "EmptyComponent - beforeRouteUpdate", to, from );
    },

    beforeRouteLeave( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
        console.info( "EmptyComponent - beforeRouteLeave", to, from );
    },

    created () : void {

        const me : IComponent = this;

        console.info( "EmptyComponent", me.$route.meta );

        console.info( me.$route );

    },

    methods : {

        removeRoutes() : void {

            const me : IComponent = this;
            me.routesCreated      = false;

            ( me.$router ).removeRoute( "route1" );
            ( me.$router ).removeRoute( "route2" );
            ( me.$router ).removeRoute( "empty" );

        },

        addRoutes() : void {

            const me : IComponent = this;
            me.routesCreated      = true;

            genRoutes().forEach( ( route : vueRouter.RouteRecordRaw ) => {
                ( me.$router ).addRoute( route );
            } );

        },

    },

} );

export default EmptyComponent;
