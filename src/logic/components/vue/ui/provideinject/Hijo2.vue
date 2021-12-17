<template>

    <div class="component">

        <h2>Hijo 2</h2>

        <p>Valor fijo provide from parent -> {{ valueFromParent }}</p>
        <p>No reactive property provide from parent -> {{ ownProperty }}</p>
        <p>Reactive property provide from parent -> {{ random }}</p>

    </div>

</template>

<script lang="ts">

import Hijo2 from "./../../../typescript/ui/provideinject/Hijo2";
export default Hijo2;

</script>
