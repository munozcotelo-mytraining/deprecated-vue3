<template>

    <div>

        <h1>Inheritance con vue.extend</h1>

        <h2>Data en el padre</h2>
        <p>Data (en el padre) {{ data1 }}</p>
        <p>Computed (en el padre) {{ computed1 }}</p>
        <p>Prop (en el padre) {{ value }}</p>
        <p>Inject (en el padre) {{ slotName }}</p>
        <br/>
        <button v-on:click="increment">Click (método en padre)</button>
        <br/>

    </div>

</template>

<script lang="ts">

import ChildComponent from "./../../typescript/ui/ChildComponent";
export default ChildComponent;

</script>
