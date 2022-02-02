import * as vue       from "vue";
import * as vueRouter from "vue-router";

import { genRoutes } from "./../../../../../configuration/routing";

interface IProps {
}

interface IData { }

interface IComputed { }

interface IMethod  { }

interface IComponent extends IProps, IData, IMethod, IComputed {

    $router : vueRouter.Router;
    $route  : vueRouter.RouteLocationNormalized;

}

// const UserHomeController : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const UserHomeController = vue.defineComponent( {

    name  : "UserHomeController",

} );

export default UserHomeController;
