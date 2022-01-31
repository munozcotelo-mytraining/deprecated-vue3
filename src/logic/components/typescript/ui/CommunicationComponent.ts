import * as vue from "vue";

interface IProps {

    callback : () => void;

}

interface IData {
}

interface IComputed {
}

interface IMethod  {

    clickOnButton : () => void;
    launchEvent   : () => void;

}

interface IComponent extends IProps, IData, IMethod, IComputed {

    "$emit" : ( ...args: unknown[] ) => void;
}

// const CommunicationComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const CommunicationComponent  = vue.defineComponent( {

    name: "CommunicationComponent",

    props : {

        callback : {

            required : true,
            type     : Function as vue.PropType<( () => void )>,
        },

    },

    data () : IData {

        return {
        };

    },

    // emits : [ "eventForClicking1", "eventForClicking2"  ],
    emits : {

        eventForClicking1( data1 : number, data2 : number ) {
            return true
        },

        eventForClicking2( data1 : number, data2 : number, data3 : number ) {
            return data1 > 0;
        },

    },

    computed : {
    },

    methods : {

        clickOnButton () : void {

            const me : IComponent = this;

            Reflect.apply ( me.callback, null, [] );

        },

        launchEvent () : void {

            const me : IComponent = this;

            me.$emit( "eventForClicking2", 1, 2, 3 );

        },

    },

} );

export default CommunicationComponent;

