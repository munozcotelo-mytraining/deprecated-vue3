<template>

    <div class="component">
        <h1>Mixins Component</h1>

        <h2>Data</h2>
        <ul>
            <li>data.ownproperty, no hay conflicto, es el del componente: {{ ownproperty }}</li>
            <li>data.message, no hay conflicto, es el del mixin: {{ message }}</li>
            <li>data.conflicted, hay conflicto, prevalece el componente: {{ conflicted }}</li>
        </ul>

        <h2>Methods</h2>
        <p>Por consola</p>

        <h2>Computed</h2>
        <ul>
            <li>computed.owncomputed, no hay conflicto, es el del componente: {{ owncomputed }}</li>
            <li>computed.mycomputed, no hay conflicto, es el del mixin: {{ mycomputed }}</li>
            <li>computed.conflictedComputed, hay conflicto, prevalece el componente: {{ conflictedComputed }}</li>
        </ul>

    </div>

</template>

<script lang="ts">

import MixinsComponent from "./../../typescript/ui/MixinsComponent";
export default MixinsComponent;

</script>
