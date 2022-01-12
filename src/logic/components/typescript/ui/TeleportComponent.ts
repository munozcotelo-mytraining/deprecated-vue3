import * as vue from "vue";

interface IProps {
}

interface IData {

    target           : number;
    disableTelerport : boolean;

}

interface IComputed {
}

interface IMethod  {
    changeDisable : () => void;
}

interface IComponent extends IProps, IData, IMethod, IComputed {
}

// const TeleportComponent : vue.DefineComponent = vue.defineComponent<{}, {}, {}, {}>( {
const TeleportComponent  = vue.defineComponent( {

    name  : "TeleportComponent",

    props : {
    },

    data () : IData {

        return {
            target           : 0,
            disableTelerport : false,
        };

    },

    emits : [],

    computed : {

        targetTeleport () : string {

            const me : IComponent = this;
            return `#targetTeleport${ me.target }`

        },

    },

    created () : void {
    },

    mounted () : void {

        const me : IComponent = this;
        setInterval( () => {
            me.target = ( me.target + 1 )% 2 ;
        }, 2000 );

    },

    methods : {

        changeDisable () : void {

            const me : IComponent = this;
            me.disableTelerport   = !me.disableTelerport;
            console.info( "click", me.disableTelerport );

        },

    },

} );

export default TeleportComponent;
