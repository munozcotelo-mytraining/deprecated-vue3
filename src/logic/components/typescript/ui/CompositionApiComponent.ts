import * as vue from "vue";

interface IProps {

    dataOne : string;

}

interface IData {
}

interface IComputed {
}

interface IMethod  {
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const CompositionApiComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const CompositionApiComponent  = vue.defineComponent( {

    name: "CompositionApiComponent",

    // setup ( props : IProps ) : void {

    setup ( props : vue.ComponentCustomProperties ) : any {
        console.info( "CompositionApiComponent - en el setup", props );

        let hola : vue.Ref<string> = vue.ref( "Message at the beggining. Should change" );

        setTimeout( () => {
            hola.value = "Message has changed";
        }, 2000 );

        return {

            hola : hola,

        };

    },

    mixins : [],

    directives : { },

    components : { },

    props : {
        dataOne : String,
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
        console.info( "CompositionApiComponent - created", this );
    },

    mounted () : void {
        console.info( "CompositionApiComponent - mounted", Reflect.ownKeys( this ) );
    },

} );

export default CompositionApiComponent;
