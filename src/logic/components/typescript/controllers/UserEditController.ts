import * as vue       from "vue";
import * as vueRouter from "vue-router";

import { genRoutes } from "./../../../../../configuration/routing";

interface IProps {
    id : string;
}

interface IData { }

interface IComputed { }

interface IMethod  { }

interface IComponent extends IProps, IData, IMethod, IComputed {

    $router : vueRouter.Router;
    $route  : vueRouter.RouteLocationNormalized;

}

// const UserEditController : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const UserEditController = vue.defineComponent( {

    name  : "UserEditController",

    // props : {
    //     identificador : String,
    // },
    props: [ "tag", "query", "identificador" ],

} );

export default UserEditController;
