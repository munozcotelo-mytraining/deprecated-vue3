import * as vue from "vue";

const trace : ( ( from : string ) => void  ) = ( from : string) : void => {
    console.info( `\t===> ${ from } from compositionAPI` );
};

function hooksComposition() : void {

    vue.onBeforeMount( () => trace( "onBeforeMount" ) );
    vue.onMounted( () => trace( "onMounted" ) );
    vue.onBeforeUpdate( () => trace( "onBeforeUpdate" ) );
    vue.onUpdated( () => trace( "onUpdated" ) );
    vue.onBeforeUnmount( () => trace( "onBeforeUnmount" ) );

};

export { hooksComposition };
