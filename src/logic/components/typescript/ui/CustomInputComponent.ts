import * as vue from "vue";

interface IProps {
    modelValue : string;
}

interface IData {

    password   : string;
    repassword : string;

}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {

    "$emit" : ( ...args: unknown[] ) => void;

}

// const CustomInputComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const CustomInputComponent  = vue.defineComponent( {

    name  : "CustomInputComponent",

    props : {

        modelValue   : {

            required : true,
            type     : String,

        },

    },

    data () : IData {

        return {

            password   : "",
            repassword : "",

        };

    },

    emits : [ "update:modelValue"  ],

    computed : {
    },

    created () : void {

        const me : IComponent = this;

        me.password = me.modelValue;
    },

    mounted () : void {
    },

    methods : {

        checkPassword () : void {

            const me : IComponent = this;

            if ( me.password === me.repassword ) {
                me.$emit( "update:modelValue", me.password );
            }

        },

    },

} );

export default CustomInputComponent;
