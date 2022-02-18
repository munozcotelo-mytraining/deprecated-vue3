import * as vueRouter from "vue-router";

import EmptyController    from "./../src/logic/components/vue/controllers/EmptyController.vue";
import OneController      from "./../src/logic/components/vue/controllers/OneController.vue";
import UserController     from "./../src/logic/components/vue/controllers/UserController.vue";
import UserHomeController from "./../src/logic/components/vue/controllers/UserHomeController.vue";
import UserInfoController from "./../src/logic/components/vue/controllers/UserInfoController.vue";
import UserEditController from "./../src/logic/components/vue/controllers/UserEditController.vue";

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

// const UserController = () => import(
//     /* webpackChunkName: 'userSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/UserController.vue"
// );

// const UserInfoController = () => import(
//     /* webpackChunkName: 'userSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/UserInfoController.vue"
// );

// const UserEditController = () => import(
//     /* webpackChunkName: 'userSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/UserEditController.vue"
// );

// const UserHomeController = () => import(
//     /* webpackChunkName: 'userSection' */
//     /* webpackMode: "lazy" */
//     "./components/vue/controllers/UserHomeController.vue"
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
        // props : ( route : vueRouter.RouteLocationNormalized ) => {
        //
        //     console.info( "onecontroller", route.params.identificador );
        //
        //     return {
        //
        //         tag : "tag for r2",
        //         query         : route.query,
        //         identificador : route.params.identificador
        //
        //     }
        //
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneController,
            secondView : EmptyController,

        },
        props : {

            default : (  route : vueRouter.RouteLocationNormalized ) => {

                return {

                    tag           : "tag for r2",
                    query         : route.query,
                    identificador : route.params.identificador

                };

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
        // props : ( route : vueRouter.RouteLocationNormalized ) => {
        //
        //     console.info( "onecontroller", route.params.identificador );
        //
        //     return {
        //
        //         tag : "tag for r2",
        //         query         : route.query,
        //         identificador : route.params.identificador
        //
        //     }
        //
        // },

        /* Cuando hay varias vistas */
        components : {

            default    : OneController,
            secondView : EmptyController,

        },
        props : {

            default : ( route : vueRouter.RouteLocationNormalized ) => {

                return {

                    tag           : "tag for r2",
                    query         : route.query,
                    identificador : route.params.identificador

                };

            }

        },

        meta : {

            controlParam : "r2",

        },

        beforeEnter : [ checkA, checkB ],

    };

    const user : vueRouter.RouteRecordRaw = {

        path : "/user/:id",
        name : "user",

        /* Cuando hay varias vistas */
        components : {
            default    : UserController,
        },

        children : [

           {

                path      : "",
                // component : UserHomeController,
                components : {

                    default     : UserHomeController,
                    anotherView : EmptyController,

                },
                props : {

                    default : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    },

                    anotherView : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    }

                },

           },

            {

                path      : "info",
                name      : "userInfo",
                // component : UserInfoController,
                components : {

                    default     : UserInfoController,
                    anotherView : UserHomeController,

                },

                props : {

                    default : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    },

                    anotherView : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    }

                },

            },

            {

                path      : "edit",
                name      : "userEdit",
                // component : UserEditController,
                components : {

                    default     : UserEditController,
                    anotherView : UserHomeController,

                },

                props : {

                    default : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    },

                    anotherView : ( route : vueRouter.RouteLocationNormalized ) => {

                        return {

                            tag           : "tag for r2",
                            query         : route.query,
                            identificador : route.params.id

                        };

                    }

                },

            }

        ],

        props : {

            default : ( route : vueRouter.RouteLocationNormalized ) => {

                return {

                    id : route.params.id,

                };

            }

        },

        meta : { },


    };

    output.push( empty );
    output.push( one );
    output.push( two );
    output.push( user );

    return output;

};

function checkA( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
    console.info( "routing checkA", to, from );
}

function checkB( to : vueRouter.RouteLocationNormalized, from : vueRouter.RouteLocationNormalized ) {
    console.info( "routing checkB", to, from );
}

export { genRoutes };
