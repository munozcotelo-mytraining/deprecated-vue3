<template>

    <div>
        <p>Hola App</p>

        <!-- como pasar un
            valor dinamico v-bind:xxx
            valor dinamico (formato corto) :xxx
            o estatico
        -->
        <OneComponent
            v-bind:theSurname="book.name"
            :theName="book.author"
            theNumber="101"
        />

    </div>

</template>

<script lang="ts">

import App from "./App";
export default App;

</script>

<style></style>
