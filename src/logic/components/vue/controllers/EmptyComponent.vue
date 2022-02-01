<template>

    <div class="component">
        <h1>Empty component</h1>
        <h2>Meta</h2>
        <p>{{ JSON.stringify( $route.meta ) }}</p>
        <p>Numero: {{ numero }}</p>
    </div>

</template>

<script lang="ts">

import EmptyComponent from "./../../typescript/controllers/EmptyComponent";
export default EmptyComponent;

</script>
