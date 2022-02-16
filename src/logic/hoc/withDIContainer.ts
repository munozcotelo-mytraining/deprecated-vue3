import * as vue from "vue";

const withDIContainer = ( Component ) => {

    /*
     * Code here to access to the diContainer
     * How to:
     * 1. Import the diContainer here
     * 2. vue.provide the diContainer from App and use vue.inject here to access it
     */

    /*
     * Two ways to create the HoC:
     * 1. As a functional component. The function itself is the render function
     *    It has two parameters props and context
     *    Functional components does not have state nor this
     * 2. As a componento
     */

    /*
     * HoC as functional component
     * There is no way to read info "provided" from the parents (vue.provide)
     */
    // return ( props, context ) => {
    //
    //     console.info( props );
    //     console.info( context.attrs );
    //
    //     return vue.h( Component, {
    //         // ...Component.$props,
    //         ...props,
    //     } );
    //
    // }

    /*
     * HoC as a component.
     * More powerful. There is access to provide/inject
     */
    return vue.defineComponent( {

        props  : Component.$props,
        inject : [ "slotName" ],

        mounted () : void {

            // console.info( "withDIContainer 1", this.$slots);
            // console.info( "withDIContainer 2", this.slotName );

        },

        render() {

            console.info( "withDIContainer acceso al contendor a traves de provide/inject", this.slotName );

            return vue.h( Component, {

                // ...Component.$props,
               ...this.$props,

            } );

        },

    } );

};

export { withDIContainer };
