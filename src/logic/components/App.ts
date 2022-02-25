import * as vue from "vue";

import ClassStyleBindingComponent from "./vue/ui/ClassStyleBindingComponent.vue";
import CommunicationComponent     from "./vue/ui/CommunicationComponent.vue";
import CompositionApiComponent    from "./vue/ui/CompositionApiComponent.vue";
import DirectivesComponent        from "./vue/ui/DirectivesComponent.vue";
import DynamicComponents          from "./vue/ui/DynamicComponents.vue";
import FormulariosComponent       from "./vue/ui/FormulariosComponent.vue";
import MixinsComponent            from "./vue/ui/MixinsComponent.vue";
import MonoRootComponent          from "./vue/ui/MonoRootComponent.vue";
import MultiRootComponent         from "./vue/ui/MultiRootComponent.vue";
import OneComponent               from "./vue/ui/OneComponent.vue";
import ProvideAndInjectComponent  from "./vue/ui/ProvideAndInjectComponent.vue";
import SlotComponent              from "./vue/ui/SlotComponent.vue";
import TeleportComponent          from "./vue/ui/TeleportComponent.vue";
import TemplateRefComponent       from "./vue/ui/TemplateRefComponent.vue";

import ChildComponent from "./vue/ui/ChildComponet.vue";


import { withDIContainer } from "./../hoc/withDIContainer";
import AlvaroComponent from "./vue/ui/AlvaroComponent.vue";

interface IBook {

    name   : string;
    author : string;

}

interface ISlot {
    name    : string;
    content : string;
}

interface IData {

    classObject : {

        isActive    : boolean,
        hasError    : boolean,

    },
    isActive    : boolean,
    hasError    : boolean,

    book            : IBook;
    clicksOnButton1 : number,
    clicksOnButton2 : number,
    clicksOnButton3 : number,
    aNumber         : number;
    theSlots        : ISlot[];
    slotName        : string;

    propToCompositionApi : number;

}

interface IMethod  {

    callbackForButton : () => void;
    showAlertInRef : () => void;

}

interface IComponent extends IData, IMethod {
    $refs  : Record<string, HTMLInputElement | typeof TemplateRefComponent | typeof CompositionApiComponent>;
}

// const App : vue.DefineComponent = vue.defineComponent( {
const App = vue.defineComponent( {

    name: "App",

    props : {

        title : String,

    },

    inject : [ "pluginInfo", "pluginOptions" ],

    components : {

        AlvaroComponent : withDIContainer( AlvaroComponent ),
        // AlvaroComponent : AlvaroComponent,

        ClassStyleBindingComponent,
        CompositionApiComponent,
        CommunicationComponent,
        DirectivesComponent,
        DynamicComponents,
        FormulariosComponent,
        MixinsComponent,
        MonoRootComponent,
        MultiRootComponent,
        OneComponent,
        ProvideAndInjectComponent,
        SlotComponent,
        TeleportComponent,
        TemplateRefComponent,

        ChildComponent,

    },

    data () : IData {

        return {

            classObject : {
                isActive : true,
                hasError : false,
            } as IData[ "classObject" ],

            isActive : true as boolean,
            hasError : false as boolean,

            aNumber : 50 as number,

            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,

            clicksOnButton1 : 0 as number,
            clicksOnButton2 : 0 as number,
            clicksOnButton3 : 0 as number,

            slotName : "slot1" as string,

            propToCompositionApi : 33 as number,

            theSlots : [

                { name : "slot1", content: "contenido slot1 desde el padre" },
                { name : "slot2", content: "contenido slot2 desde el padre" },

            ] as ISlot[],

        }

    },

    provide () {

        const me : IComponent = this;

        return {
            /* hacemos computada la variable en el provide para convertirla en reactiva para los componentes que la van a injectaar */
            slotName   : vue.computed( () => me.slotName ),
            /* ofrecemos a traves de provide una función que puede ser llamada por los hijos y que modifica el valor el valor de la propiedad en el padre */
            changeSlot : ( newName :  string ) => {
                setTimeout( () => {
                    me.slotName = newName;
                }, 1200 );
            },
        };

    },

    methods : {

        callbackForButton () : void {

            const me : IComponent = this;

            me.clicksOnButton1 +=1;

            console.info( "Han hecho click en button (1) de CommunicationComponent." );

        },

        eventForButton1 ( data : unknown ) : void {

            console.info( arguments );
            const me : IComponent = this;

            me.clicksOnButton2 +=1;

            console.info( "Han hecho click en button (2) de CommunicationComponent." );
            console.info( "... with data ", data );

        },

        eventForButton2 ( data : unknown ) : void {

            console.info( arguments );
            const me : IComponent = this;

            me.clicksOnButton3 +=1;

            console.info( "Han hecho click en button (3) de CommunicationComponent." );
            console.info( "... with data ", data );

        },

        showAlertInRef ( data : unknown ) : void {

            const me : IComponent = this;

            me.$refs.refToComponent.showAlert();

            console.info( "%%%%%%%%%%%%%%%%%%%%%%%%%" );
            console.info( me.$refs.refToComponent );
            console.info( me.$refs.refToComponent.showAlert );
            console.info( me.$refs.refToComponent.dataInChild );
            console.info( me.$refs.refToComponent.propInChild );
            console.info( me.$refs.refToComponent.computedInChild );
            console.info( "%%%%%%%%%%%%%%%%%%%%%%%%%" );

        }

    },

    beforeCreate () : void {
        console.info( `App - En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}`, this.slotName );
    },

    created () : void {

        const me : IComponent = this;

        console.info( `App - En el hook de created. Ya tengo this.book ${this.book}`, this.slotName );

        setTimeout( () => {
            me.propToCompositionApi += 1000;
        }, 8000 );

        console.info( "App - check plugin", ( me as any ).variableFromPlugin );
        console.info( "App - check plugin", ( me as any ).methodFromPlugin(), ( me as any ).methodFromPlugin );
        console.info( "*****", ( me as any ) );

    },

    mounted () : void {
        console.info( "App - En el hook de mounted (12)", this.slotName );
        console.info( this.book.name );

        console.info( "====> ¿que expone CompositionApiComponent?", this.$refs.refToCompositionApiComponent );

    },

    beforeMount () : void {
        console.info( "App - En el hook de beforeMount", this.slotName );
    },

} );

export default App;
