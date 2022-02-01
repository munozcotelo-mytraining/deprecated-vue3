<template>

    <div class="component">
        <h1>Empty component</h1>
        <h2>Meta</h2>
        <p>{{ JSON.stringify( $route.meta ) }}</p>
        <p>Numero: {{ numero }}</p>

        <br/>
        <br/>
        <p v-if="routesCreated===true">Click en las rutas funciona</p>
        <p v-else>Click en las rutas NO funciona</p>
        <br/>
        <button v-on:click="removeRoutes()">Remove routes</button>
        <br/>
        <button v-on:click="addRoutes()">Add routes</button>
    </div>

</template>

<script lang="ts">

import EmptyComponent from "./../../typescript/controllers/EmptyComponent";
export default EmptyComponent;

</script>
