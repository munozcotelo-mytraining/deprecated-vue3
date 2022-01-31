import * as vue from "vue";

import Hijo1 from "./provideinject/Hijo1";

import { amgarciaCompositionApi }      from "./../../../composition/amgarcia-composition";
import { hooksComposition }            from "./../../../composition/hooks-composition";
import { provideInjectCompositionApi } from "./../../../composition/provide-inject-composition";
import { templateRefCompositionApi }   from "./../../../composition/template-ref-composition";

interface IProps {
    propOne : string;
}

interface IComposition {

    dataOne           : vue.Ref<string>;
    changeData        : () => Promise<void>;
    changeOtherData   : () => Promise<void>;
    aComputedProperty : vue.ComputedRef<string>;
    dataObject        : Record<string, number>,
    slotName          : string,

    changeSlot        : ( newName : string ) => void;

    reference : ReturnType<typeof templateRefCompositionApi>[ "reference" ],
    header    : ReturnType<typeof templateRefCompositionApi>[ "header" ],

}

interface IData {

    /* la seteo como opcional porque viene del composition api */
    dataOne   ?: string;
    reference ?: typeof Hijo1; //ReturnType<typeof templateRefCompositionApi>[ "reference" ],
    header    ?: HTMLElement;  //ReturnType<typeof templateRefCompositionApi>[ "header" ],

}

interface IComputed {
}

interface IMethod  {

    changeData      : () => Promise<void>;
    changeOtherData : () => Promise<void>;
    changeSlot      : ( newName : string ) => void;

}

interface IComponent extends IProps, IData, IMethod, IComputed {
    $refs  : Record<string, HTMLElement | vue.Component>;
}

// const CompositionApiComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const CompositionApiComponent  = vue.defineComponent( {

    name: "CompositionApiComponent",

    // setup ( props : Record<string, unknown> ) : IComposition {

    setup ( props : vue.ComponentCustomProperties, context : vue.SetupContext ) : IComposition {

        /* El código escrito aqui va antes del beforeCreate y el created del componente en el que se aplica */
        console.info( "setup - en el setup", props, context );
        console.info( "No tengo acceso al this porque setup ocurre antes del created", this );

        /* Hay que usar vue.toRefs y no el destructuring de ES6 porque el props es reactivo */
        const { propOne : _propOne, propNumber : _propNumber } = vue.toRefs( props ) as { propOne : vue.Ref<string>, propNumber : vue.Ref<number> };
        console.info( "setup - props (reactivo)", props, vue.toRefs( props ), _propOne, _propNumber );

        /* Si hay una propiedad 'opcional' se usa vue.toRef( props, ANY-VALUE ) */
        const noExisting : vue.Ref<string> = vue.toRef( props, "noExisting" as never );
        const propOne : vue.Ref<string> = vue.toRef( props, "propOne" as never );
        console.info( `setup - vue.toRef when optional property, '${ noExisting.value }', when existing, '${ propOne.value }'` );

        vue.watch( props, ( newValue : vue.ComponentCustomProperties, oldValue : vue.ComponentCustomProperties ) => {
            console.info( "Watch sobre props", newValue, oldValue );
        } );

        /* Con context se puede ES6 destructuring porque es un javascript plano normal */
        console.info( "setup - context (no reactivo)", context );
        console.info( "setup - context (no reactivo)", context );
        console.info( "setup - context.attributes", context.attrs );
        console.info( "setup - context.attributes.id", context.attrs.id );
        console.info( "setup - context.slots", context.slots );
        console.info( "setup - context.emit", context.emit );
        console.info( "setup - context.expose", context.expose );

        /* Variables y metodos */
        let dataOne : vue.Ref<string> = vue.ref<string>( "Message at the beggining. Should change" );

        const changeData : ( () => Promise<void> ) = async () : Promise<void> => {

            setTimeout( () => {
                dataOne.value = "Message has changed!!!!";
            }, 2000 );

            return;

        };

        /* Watch */
        vue.watch( dataOne, ( newValue : string, oldValue : string ) => {
            console.info( `En el watch de 'dataOne' newValue : ${ newValue }, oldValue : ${ oldValue }` );
        } );

        /* Hooks */
        // const trace : ( ( from : string ) => void  ) = ( from : string) : void => {
        //     console.info( `\t===> ${ from } from compositionAPI` );
        // };
        // vue.onBeforeMount( () => trace( "onBeforeMount" ) );
        // vue.onMounted( () => trace( "onMounted" ) );
        // vue.onBeforeUpdate( () => trace( "onBeforeUpdate" ) );
        // vue.onUpdated( () => trace( "onUpdated" ) );
        // vue.onBeforeUnmount( () => trace( "onBeforeUnmount" ) );
        hooksComposition();

        /* ===> todos los hooks se van añadiendo, como con los mixins.
         * Se ejecuta lo que hay en hooksComposition y tambien este. Y lo mismo con tantos como se definan
         */
        vue.onMounted( () => console.info( "setup - onMounted en el componente" ) );

        // let dataTwo   : vue.Ref<number> = vue.ref<number>( 0 );
        // let dataThree : vue.Ref<number> = vue.ref<number>( 0 );
        //
        // /* Watch multiple variables at once */
        // vue.watch( [ dataTwo, dataThree ], ( newValue : [ number, number ], oldValue : [ number, number ] ) => {
        //     console.info( `En el watch de [ dataTwo, dataThree ] newValue : ${ newValue }, oldValue : ${ oldValue }` );
        // } );
        //
        // const aComputedProperty : vue.ComputedRef<string> = vue.computed( () => {
        //     return `El doble de dataTwo es ${ 2*dataTwo.value }`;
        // } );
        //
        // const changeOtherData : ( () => Promise<void> ) = async () : Promise<void> => {
        //
        //     setTimeout( () => {
        //
        //         dataTwo.value   += 100;
        //         dataThree.value += 1000;
        //
        //     }, 2000 );
        //
        //     setTimeout( () => {
        //
        //         dataThree.value += 1000;
        //
        //     }, 5000 );
        //
        //     return;
        //
        // };

        const { aComputedProperty, changeData : changeOtherData, dataTwo, dataThree, dataObject } : ReturnType<typeof amgarciaCompositionApi> = amgarciaCompositionApi();

        const { slotName : slotName, changeSlot : changeSlot } = provideInjectCompositionApi();

        const { reference, header } : ReturnType<typeof templateRefCompositionApi> = templateRefCompositionApi();

        console.info( "------", reference );

        /*
         * Limitar la visibilidad del componente.
         * App tiene una referencia a este componente. Como se puede ver en la consola, sólo hay acceso a 'dataOne'
         */
        context.expose( {
            dataOne : dataOne,
        } );

        return {

            dataOne           : dataOne,
            changeData        : changeData,
            changeOtherData   : changeOtherData,
            aComputedProperty : aComputedProperty,
            dataObject        : dataObject,
            slotName          : slotName,
            changeSlot        : changeSlot,

            /*
             * hasta que se expone en el setup no toma valor
             * al exponerlo aqui podemos acceder a la referencia como this.header, this.reference
             */
            reference : reference,
            header    : header,

        };

    },

    mixins : [],

    directives : { },

    components : {

        Hijo1 : Hijo1,

    },

    props : {

        propOne    : String,
        propNumber : Number,

    },

    data () : IData {

        return {
        };

    },

    computed : {
    },

    methods : {
    },

    beforeCreate() : void {
        console.info( "CompositionApiComponent - before create" );
    },

    beforeMount() : void {
        console.info( "CompositionApiComponent - before mount" );
    },

    created () : void {
        const me : IComponent = this;

        console.info( "CompositionApiComponent - created", me );
        me.changeSlot( "Cambio en el nombre desde CompositionApiComponent" );

    },

    mounted () : void {

        const me : IComponent = this;

        console.info( "CompositionApiComponent - mounted", me );
        me.changeData();
        me.changeOtherData();

        /*
         * al exponer las referencias en el compositionAPI podemos acceder a las referencia como this.header, this.reference
         * evitamos de este modo el uso de this.$refs
         */
        console.info( "#########################", me.$refs );
        console.info( "#########################", me.$refs.reference );
        console.info( "#########################", me.reference  );
        console.info( "#########################", me.header  );
        ( me.reference as typeof Hijo1 ).sayHello();
        ( me.$refs.reference as typeof Hijo1 ).sayHello();

    },

} );

export default CompositionApiComponent;
