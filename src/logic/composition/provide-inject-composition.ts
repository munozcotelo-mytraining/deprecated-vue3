import * as vue from "vue";

interface IProvideInjectCompositionApi {

    ownProperty     : string;
    valueFromParent : string;
    random          : vue.ComputedRef<number>;
    randomBis       : vue.Ref<number>;
    objProperty     : Record<string, any>;
    slotName        : string,

    changeSlot      : ( newName : string ) => void

}

function provideInjectCompositionApi() : IProvideInjectCompositionApi {

    const list : vue.Ref<number[]> = vue.ref<number[]>( [] );

    let ownProperty     : string = "own property from compositionApi";
    let valueFromParent : string = "a value from parent ProvideAndInjectComponent";

    let random : vue.ComputedRef<number> = vue.computed( () => list.value.length );

    let randomBis : vue.Ref<number> = vue.ref<number>( 3 );

    // let objProperty : Record<string, any> = {
    let objProperty : Record<string, any> = vue.reactive<Record<string, any>>( {
        d1 : {
            value : 0,
        },
        d2 : 2,
    // };
    } );

    setTimeout( () => {

        randomBis.value = Math.random();
        objProperty.d1.value = Math.random();
        list.value.push( 8 );

    }, 2200 );

    vue.provide( "ownProperty", ownProperty );
    vue.provide( "valueFromParent", valueFromParent );
    vue.provide( "random", random );
    vue.provide( "randomBis", randomBis );
    vue.provide( "objProperty", objProperty );

    const slotName : string = vue.inject( "slotName", "unknown by default" );

    const changeSlot : ( newName : string ) => void = vue.inject( "changeSlot", () => {} );

    return {

        ownProperty     : ownProperty,
        valueFromParent : valueFromParent,
        random          : random,
        randomBis       : randomBis,
        objProperty     : objProperty,
        slotName        : slotName,
        changeSlot      : changeSlot,

    };

};

export { provideInjectCompositionApi };
