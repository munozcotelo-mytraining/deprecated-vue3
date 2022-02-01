import * as vueRouter from "vue-router";

import EmptyController from "./../src/logic/components/vue/controllers/EmptyController.vue";
import OneController   from "./../src/logic/components/vue/controllers/OneController.vue";

// const EmptyController = () => import(
//     /* webpackChunkName: 'emptySection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/EmptyController.vue"
// );

// const OneController = () => import(
//     /* webpackChunkName: 'oneSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/OneController.vue"
// );

const genRoutes : () => vueRouter.RouteRecordRaw[] = () => {

    const output : vueRouter.RouteRecordRaw[] = [];

    const empty : vueRouter.RouteRecordRaw = {

        path      : "/",
        name      : "empty",
        // component : EmptyController,
        components : {

            default    : EmptyController,
            secondView : EmptyController,

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
        // component : OneController,
        // props : {
        //     tag : "tag for r1",
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneController,
            secondView : EmptyController,

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
        // component : OneController,
        // props : {
        //     tag : "tag for r2",
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneController,
            secondView : EmptyController,

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
