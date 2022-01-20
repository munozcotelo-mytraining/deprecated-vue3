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

const otroMixin : vue.ComponentOptionsMixin = {

    data() : IData {

        return {

            message    : "hello desde otro mixin" as string,
            conflicted : "estoy en el otro mixin" as string,

        };

    },

    computed : {

        mycomputed () : string {

            const me : IMixin = this;

            return me.message + "_computed_in_OTRO_mixin";
        },

        conflictedComputed () : string {

            const me : IMixin = this;

            return Math.random() + "_computed_in_OTRO_mixin";
        },

    },

    methods : {

        sayHello () : void {
            console.info( "Hello from the otro mixin" );
        },

        sayGoodMoring : () => {
            console.info( "Good morning from the otro mixin" );
        },

    },

    created () : void {

        const me : IMixin = this;

        console.info( "Created del otro mixin - data.message", me.message );
        console.info( "Created del otro mixin - data.conflicted", me.conflicted );

    },

};

export { otroMixin, IData, IMethod, IComputed };
