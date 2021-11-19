<template>
    <div>One Js component</div>
</template>

<script>

    // export default {
    //     beforeCreate () {
    //         console.info( `En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
    //     },
    // }

    import * as vue from "vue";

    const OneJsComponent = vue.defineComponent( {

        name: "OneJsComponent",

        data() {
            return {
                manolo : 50,
                book   : {

                    name   : "Quijote",
                    author : "Cervantes",

                },
            }
        },

        beforeCreate () {
            console.info( `En el hook de beforeCreate 1. Todavía no tengo this.book ${this.book}` );
        },

        created () {
            console.info( `En el hook de created. Ya tengo this.book ${this.book}` );
        },

        mounted () {
            console.info( "En el hook de mounted (12)" );
            console.info( this.book.name );
        },

        beforeMount () {
            console.info( "En el hook de beforeMount" );
        },

        template: '<div>hola y adios</div>',

    } );

    export default OneJsComponent;

</script>
