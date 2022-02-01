<template>

    <div class="component">
        <h1>One component</h1>
        <h2>Meta</h2>
        <p>{{ JSON.stringify( $route.meta ) }}</p>
        <h2>Property</h2>
        <p>tag: {{tag}}</p>
        <h2>Url parameters</h2>
        <p>{{ JSON.stringify( $route.params ) }}</p>
    </div>

</template>

<script lang="ts">

import OneController from "./../../typescript/controllers/OneController";
export default OneController;

</script>


