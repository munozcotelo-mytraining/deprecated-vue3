import * as vueRouter from "vue-router";

import EmptyComponent from "./../src/logic/components/vue/controllers/EmptyComponent.vue";
import OneComponent   from "./../src/logic/components/vue/controllers/OneComponent.vue";

// const EmptyComponent = () => import(
//     /* webpackChunkName: 'emptySection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/EmptyComponent.vue"
// );

// const OneComponent = () => import(
//     /* webpackChunkName: 'oneSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/OneComponent.vue"
// );

const genRoutes : () => vueRouter.RouteRecordRaw[] = () => {

    const output : vueRouter.RouteRecordRaw[] = [];

    const empty : vueRouter.RouteRecordRaw = {

        path      : "/",
        name      : "empty",
        // component : EmptyComponent,
        components : {

            default    : EmptyComponent,
            secondView : EmptyComponent,

        },
        /* Informacion propia. Accesible desde el componente y desde los navigation guards */
        meta : {

            withAuthentication : true,

        },
        beforeEnter : [ checkA, checkB ],

    };

    const one : vueRouter.RouteRecordRaw = {

        path : "/r1/:identificador/bla",
        name : "route1",

        /* Cuando hay una sola vista */
        // component : OneComponent,
        // props : {
        //     tag : "tag for r1",
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneComponent,
            secondView : EmptyComponent,

        },
        props : {

            default : {
                tag : "tag for r2",
            }
        },

        meta : {

            controlParam : "r1",

        },

        beforeEnter : [ checkA, checkB ],

    };

    const two : vueRouter.RouteRecordRaw = {

        path : "/r2/:identificador/bla",
        name : "route2",

        /* Cuando hay una sola vista */
        // component : OneComponent,
        // props : {
        //     tag : "tag for r2",
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneComponent,
            secondView : EmptyComponent,

        },
        props : {

            default : {
                tag : "tag for r2",
            }
        },

        meta : {

            controlParam : "r2",

        },

        beforeEnter : [ checkA, checkB ],

    };

    output.push( empty );
    output.push( one );
    output.push( two );

    return output;

};

function checkA( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
    console.info( "routing checkA", to, from );
}

function checkB( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
    console.info( "routing checkB", to, from );
}

export { genRoutes };
