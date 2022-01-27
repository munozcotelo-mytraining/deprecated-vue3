import * as vue from "vue";

const pluginDirective : vue.Directive = {

    created ( el : HTMLElement, binding : vue.DirectiveBinding, vNode : vue.VNode ) {

        console.info( "myPlugin", "En la directiva inyectada desde el plugin" );
        el.style.border = "10px solid purple";

    },

};

const pluginMixin : vue.ComponentOptionsMixin = {

    created () : void {

        console.info( "myPlugin", "Created en mixin del plugin" );

    },

};

const componentPlugin = vue.defineComponent( {
    template : "<div><h1>Componente desde el plugin</h1></div>",
} );

const myPlugin : vue.Plugin = {

    install: ( app : vue.App, options : any ) => {

        console.info( "app", app );
        console.info( "config", app.config );

        console.info( "myPlugin", "app", app );
        console.info( "myPlugin", "options", options );

        /******************************/
        /* 1. Add variables y metodos */
        /******************************/

        Reflect.set( app.config.globalProperties, "variableFromPlugin", "A variable from the plugin" );
        // app.config.globalProperties.methodFromPlugin = "A method from the plugin";

        Reflect.set( app.config.globalProperties, "methodFromPlugin", () => {
            return "A method from the plugin";
        } );

        /************************/
        /* 2. Add una directiva */
        /************************/

        /* Valen las dos */
        // app.directive( "plugin-directive", pluginDirective );
        app.directive( "pluginDirective", pluginDirective );

        /*******************/
        /* 3. Add un mixin */
        /*******************/

        app.mixin( pluginMixin );

        /************************/
        /* 4. Add un componente */
        /************************/

        /* Valen las dos */
        // app.component( "plugin-component", componentPlugin );
        app.component( "pluginComponent", componentPlugin );

        /**************************************/
        /* 5. Provide informacion globalmente */
        /**************************************/
        app.provide( "pluginInfo", "informacion desde el plugin" );
        app.provide( "pluginOptions", options );

    },

}

export { myPlugin };
