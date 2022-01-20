import * as vue from "vue";

import ClassStyleBindingComponent from "./vue/ui/ClassStyleBindingComponent.vue";
import CommunicationComponent     from "./vue/ui/CommunicationComponent.vue";
import DirectivesComponent        from "./vue/ui/DirectivesComponent.vue";
import DynamicComponents          from "./vue/ui/DynamicComponents.vue";
import FormulariosComponent       from "./vue/ui/FormulariosComponent.vue";
import MonoRootComponent          from "./vue/ui/MonoRootComponent.vue";
import MultiRootComponent         from "./vue/ui/MultiRootComponent.vue";
import OneComponent               from "./vue/ui/OneComponent.vue";
import ProvideAndInjectComponent  from "./vue/ui/ProvideAndInjectComponent.vue";
import SlotComponent              from "./vue/ui/SlotComponent.vue";
import TeleportComponent          from "./vue/ui/TeleportComponent.vue";
import TemplateRefComponent       from "./vue/ui/TemplateRefComponent.vue";

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

}

interface IMethod  {

    callbackForButton : () => void;
    showAlertInRef : () => void;

}

interface IComponent extends IData, IMethod {
    $refs  : Record<string, HTMLInputElement | typeof TemplateRefComponent>;
}

// const App : vue.DefineComponent = vue.defineComponent( {
const App = vue.defineComponent( {

    name: "App",

    props : {

        title : String,

    },

    components : {

        ClassStyleBindingComponent,
        CommunicationComponent,
        DirectivesComponent,
        DynamicComponents,
        FormulariosComponent,
        MonoRootComponent,
        MultiRootComponent,
        ProvideAndInjectComponent,
        OneComponent,
        SlotComponent,
        TeleportComponent,
        TemplateRefComponent,

    },

    data () : IData {

        return {

            classObject : {
                isActive : true,
                hasError : false,
            },

            isActive : true,
            hasError : false,

            aNumber : 50 as number,

            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,

            clicksOnButton1 : 0 as number,
            clicksOnButton2 : 0 as number,
            clicksOnButton3 : 0 as number,

            slotName : "slot1" as string,

            theSlots : [

                { name : "slot1", content: "contenido slot1 desde el padre" },
                { name : "slot2", content: "contenido slot2 desde el padre" },

            ] as ISlot[],

        }

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
        console.info( `App - En el hook de created. Ya tengo this.book ${this.book}`, this.slotName );
    },

    mounted () : void {
        console.info( "App - En el hook de mounted (12)", this.slotName );
        console.info( this.book.name );

    },

    beforeMount () : void {
        console.info( "App - En el hook de beforeMount", this.slotName );
    },

} );

export default App;
