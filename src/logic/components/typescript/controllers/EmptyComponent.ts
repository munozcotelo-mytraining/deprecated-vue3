import * as vue       from "vue";
import * as vueRouter from "vue-router";

interface IProps {
}

interface IData {
    numero : number;
}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const EmptyComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const EmptyComponent = vue.defineComponent( {

    name  : "EmptyComponent",
    props : { },

    data  () : IData {

        return {
            numero : 4,
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
        console.info( "EmptyComponent", this.$route.meta );

    },

} );

export default EmptyComponent;
