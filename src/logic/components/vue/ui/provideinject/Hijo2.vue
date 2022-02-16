<template>

    <div class="component">

        <h2>Hijo 2</h2>
        <p>--->{{ slotName }}</p>

        <p>Valor fijo provide from parent -> {{ valueFromParent }}</p>
        <p>No reactive property (because is a primitive type ) provide from parent -> {{ ownProperty }}</p>
        <p>Reactive property because is an object provide from parent -> {{ JSON.stringify( objProperty ) }}</p>
        <p>Reactive property provide from parent using <strong>computed</strong> -> {{ random }}</p>
        <p>Reactive property provide from parent using <strong>ref</strong> -> {{ randomBis }}</p>

    </div>

</template>

<script lang="ts">

import Hijo2 from "./../../../typescript/ui/provideinject/Hijo2";
export default Hijo2;

</script>
