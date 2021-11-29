<template>

    <div class="component">

        <h2>App Component</h2>

        <p>Hola {{ title }}</p>

        <div>
            <p>Clicks on button1 inside CommunicationComponent : {{ clicksOnButton1 }}</p>
            <p>Clicks on button2 inside CommunicationComponent : {{ clicksOnButton2 }}</p>
            <p>Clicks on button3 inside CommunicationComponent : {{ clicksOnButton3 }}</p>
        </div>

        <CommunicationComponent
            v-bind:callback="callbackForButton"
            @eventForClicking1="eventForButton1"
            @eventForClicking2="eventForButton2"
        />
        <!-- @event-for-clicking="eventForButton" -->

        <!-- como pasar un
            valor dinamico v-bind:xxx
            valor dinamico (formato corto) :xxx
            o estatico
        -->
        <OneComponent
            v-bind:theSurname="book.name"
            :theName="book.author"
            theNumber="101"
            v-bind:theBook="book"
        />

    </div>

</template>

<script lang="ts">

import App from "./App";
export default App;

</script>

<style></style>
