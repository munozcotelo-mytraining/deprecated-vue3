import * as vue from "vue";

interface IData {

    message    : string;
    conflicted : string;

}
interface IProps {
}

interface IComputed {

    mycomputed        : string;
    conflictedComputed : string;

}

interface IMethod  {

    sayHello : () => void;
    sayGoodMoring : () => void;

}

interface IMixin extends IProps, IData, IMethod, IComputed {
}

const amgarciaMixin : vue.ComponentOptionsMixin = {

    data() : IData {

        return {

            message    : "hello desde mixin" as string,
            conflicted : "estoy en el mixin" as string,

        };

    },

    computed : {

        mycomputed () : string {

            const me : IMixin = this;

            return me.message + "_computed_in_mixin";
        },

        conflictedComputed () : string {

            const me : IMixin = this;

            return Math.random() + "_computed_in_mixin";
        },

    },

    methods : {

        sayHello () : void {
            console.info( "Hello from the mixin" );
        },

        sayGoodMoring : () => {
            console.info( "Good morning from the mixin" );
        },

    },

    created () : void {

        const me : IMixin = this;

        console.info( "Created del mixin - data.message", me.message );
        console.info( "Created del mixin - data.conflicted", me.conflicted );

    },

};

export { amgarciaMixin, IData, IMethod, IComputed };
