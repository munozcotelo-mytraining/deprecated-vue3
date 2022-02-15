import * as vue from "vue";

interface IAmgarciaCompositionApi {

    dataTwo           : vue.Ref<number>;
    dataThree         : vue.Ref<number>;
    changeData        : ( () => Promise<void> );
    aComputedProperty : vue.ComputedRef<string>;
    dataObject        : Record<string, number>;

}

function amgarciaCompositionApi() : IAmgarciaCompositionApi {

    let dataTwo   : vue.Ref<number> = vue.ref<number>( 0 );
    let dataThree : vue.Ref<number> = vue.ref<number>( 0 );

    /*
     * Los objetos, de por si, TAMPOCO con reactivos
     * Hay que utilizar vue.reactive para que lo sean
     */
    // let dataObject : Record<string, number> = {
    let dataObject : Record<string, number> = vue.reactive<Record<string, number>>( {

        k1 : 1,
        k2 : 2,
    // };
    });

    const aComputedProperty : vue.ComputedRef<string> = vue.computed( () => {
        return `El doble de dataTwo es ${ 2*dataTwo.value }`;
    } );

    const changeData : ( () => Promise<void> ) = async () : Promise<void> => {

        console.info( "click****************************************" );
        console.info( "click****************************************" );
        console.info( "click****************************************" );
        console.info( "click****************************************" );
        console.info( "click****************************************" );

        dataObject.k1 += 10;
        dataObject.k2 += 20;

        setTimeout( () => {

            // dataTwo.value   += 100;
            // dataThree.value += 1000;

            dataObject.k1 += 10;
            dataObject.k2 += 20;

        }, 2000 );

        // setTimeout( () => {
        //
        //     dataThree.value += 1000;
        //
        // }, 5000 );

        return;

    };

    /* Watch multiple variables at once */
    vue.watch( [ dataTwo, dataThree ], ( newValue : [ number, number ], oldValue : [ number, number ] ) => {
        console.info( `En el watch de [ dataTwo, dataThree ] newValue : ${ newValue }, oldValue : ${ oldValue }` );
    } );

    return {

        aComputedProperty : aComputedProperty,
        changeData        : changeData,
        dataTwo           : dataTwo,
        dataThree         : dataThree,
        dataObject        : dataObject,

    };


};

export { amgarciaCompositionApi };
