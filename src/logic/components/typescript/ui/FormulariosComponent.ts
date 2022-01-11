import * as vue from "vue";

import CustomInputComponent from "./../../vue/ui/CustomInputComponent.vue";

interface IProps {
}

interface IData {

    text_message         : string;
    area_message         : string;
    theCheckbox          : boolean;
    checkedNames         : string[];
    theRadio             : string;
    theSelect            : string;
    theMultipleSelect    : string[];
    theMultipleSelectFor : string[];
    optionsFor           : { text : string, value : string}[];

    theCheckboxBind            : string;
    theRadioBind               : string,
    aValueForRadio             : number,
    theMultipleSelectObjectFor : string[];
    optionsObjectFor           : { text : string, value : {p : number}}[];

    customInput : string;

}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
    $refs  : Record<string, HTMLInputElement>;
}

// const FormulariosComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const FormulariosComponent  = vue.defineComponent( {

    name  : "FormulariosComponent",

    components : {

        CustomInputComponent,

    },

    props : {
    },

    data () : IData {

        return {

            text_message         : "",
            area_message         : "",
            theCheckbox          : false,
            checkedNames         : [],
            theRadio             : "",
            theSelect            : "",
            theMultipleSelect    : [],
            theMultipleSelectFor : [],
            optionsFor           : [
                { text : "Uno"  , value : "One" },
                { text : "Dos"  , value : "Two" } ,
                { text : "Tres" , value : "Three" },
            ],

            theCheckboxBind            : "nope",
            theRadioBind               : "",
            aValueForRadio             : Math.random(),
            theMultipleSelectObjectFor : [],
            optionsObjectFor           : [
                { text : "Uno"  , value : {p : 1} },
                { text : "Dos"  , value : {p : 2} },
                { text : "Tres" , value : {p : 3} },

            ],

            customInput : "hola juan",

        };

    },

    computed : {
    },

    mounted () : void {
    },

    methods : {
    },

} );

export default FormulariosComponent;
