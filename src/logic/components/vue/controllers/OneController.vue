<template>

    <div class="component">
        <h1>One component</h1>
        <h2>Meta</h2>
        <p>{{ JSON.stringify( $route.meta ) }}</p>
        <h2>Property</h2>
        <p>tag: {{tag}}</p>
        <p>identificador (route parameter <strong>injected</strong> as property): {{ identificador }}</p>
        <p>query info (<strong>injected</strong> as property): {{ JSON.stringify( query ) }}</p>

        <br/>

        <h2>Url parameters from <i>$route</i> object</h2>
        <p>{{ JSON.stringify( $route.params ) }}</p>
        <h2>Query info from <i>$route</i> object</h2>
        <p>{{ JSON.stringify( $route.query ) }}</p>

        <br/>

        <h2>Url parameters from <i>$route</i> object</h2>
        <p>{{ JSON.stringify( $route.params ) }}</p>
        <h2>Query info from <i>$route</i> object</h2>
        <p>{{ JSON.stringify( $route.query ) }}</p>

    </div>

</template>

<script lang="ts">

import OneController from "./../../typescript/controllers/OneController";
export default OneController;

</script>


