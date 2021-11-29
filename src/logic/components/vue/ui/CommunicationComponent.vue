<template>

    <div class="component">

        <h2>Communication Component</h2>
        <button v-on:click="clickOnButton">Click to callback</button>
        <!--<button v-on:click="callback">Click to callback</button>-->

        <button v-on:click="$emit( 'eventForClicking', 'argument_1', 20 )">Click to event</button>
        <button v-on:click="launchEvent">Click to event from code</button>

    </div>

</template>

<script lang="ts">

import CommunicationComponent from "./../../typescript/ui/CommunicationComponent";
export default CommunicationComponent;

</script>

