<template>

    <div class="component">
        <h1 ref="header">Composition Api Component</h1>


        <p>propiedad : {{ propOne }}</p>

        <p>propiedad : {{ propNumber }}</p>

        <p>dataOne : {{ dataOne }}</p>

        <p>aComputedProperty : {{ aComputedProperty }}</p>

        <p>dataObject : {{ JSON.stringify( dataObject ) }}</p>

        <p>slot en el App: {{ slotName }}</p>

        <button v-on:click="changeOtherData">click to test computed</button>

        <Hijo1 ref="reference"/>

    </div>

</template>

<script lang="ts">

import CompositionApiComponent from "./../../typescript/ui/CompositionApiComponent";
export default CompositionApiComponent;

</script>
