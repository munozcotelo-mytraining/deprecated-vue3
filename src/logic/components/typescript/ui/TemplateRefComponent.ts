import * as vue from "vue";

interface IProps {
    propInChild : string;
}

interface IData {
    dataInChild : string;
}

interface IComputed {
}

interface IMethod  {

    focusInput : () => void;
    showAlert : () => void;

}

interface IComponent extends IProps, IData, IMethod, IComputed {
    $attrs : Record<string, unknown>;
    $refs  : Record<string, HTMLInputElement>;
}

// const TemplateRefComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const TemplateRefComponent  = vue.defineComponent( {

    name  : "TemplateRefComponent",
    props : {
        propInChild : {

            required : true,
            type     : String,

        },
    },

    data () : IData {

        return {

            dataInChild : "Data en el hijo",

        };

    },

    created() : void {
        console.info( "*************************" );
    },

    computed : {

        computedInChild () : string {

            const me : IComponent = this;

            return me.propInChild + " - computed";
        },

    },

    mounted () : void {

        const me : IComponent = this;

        setTimeout( () => {
            me.focusInput();
        }, 1500 );

    },

    methods : {

        showAlert : function() : void {
            alert( "Alert en el TemplateRefComponent disparada desde App" );
        },

        focusInput : function () : void {

            const me : IComponent = this;

            me.$refs.myInputRef.focus();
            /* Tenemos acceso al elemento. Podemos:
             * - poner/quitar el foco
             * - cambiar su valor
             * - disparar eventos
             * - ...
             */
            me.$refs.myInputRef.value = "abcdefg...";

        },
    },

} );

export default TemplateRefComponent;

