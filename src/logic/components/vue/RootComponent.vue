<template>
    <div>hola</div>
</template>

<script lang="ts">

interface IBook {
    name   : string;
    author : string;
}

const RootComponent = vue.defineComponent( {

    data() {
        return {
            manolo : 50 as number,
            book   : {

                name   : "Quijote",
                author : "Cervantes",

            } as IBook,
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

export default RootComponent;

<script>
