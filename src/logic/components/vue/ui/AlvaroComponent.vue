<template>
<div class="component">
        <h2>Alvaro Component - High Order Component</h2>

        <p>prop alvaro : {{ alvaro }}</p>
        <p>prop tag1   : {{ tag1 }}</p>
        <p>inject      : {{ slotName }}</p>

    </div>

</template>

<script lang="ts">

import * as vue from "vue";

export default vue.defineComponent( {

    name  : "AlvaroComponent",
    props : {

        alvaro   : {

            type    : String,
            default : "default value for alvaro",

        },
        tag1   : {

            type    : String,
            default : "default value tag1",

        },
    },

    inject : [ "slotName" ],

    mounted () : void {
        console.info( "AlvaroComponent", this.slotName );
    },

} );

// export { AlvaroComponent }

</script>

<style></style>

