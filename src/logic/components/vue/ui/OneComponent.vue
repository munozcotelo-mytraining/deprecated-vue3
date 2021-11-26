<template>

    <div>

        <p>One component (1)</p>

        <!-- Render -->
        <p>theName    : {{ theName }}</p>
        <p>theSurname : {{ theSurname }}</p>
        <p>theNumber  : {{ theNumber }}</p>

        <!-- Interpolation -->
        <p v-bind:title="theName">Interpolation example. See code to check the "title" attribute</p>
        <p v-bind:id="`id-${ index }`">Interpolation example. See code to check the "title" attribute</p>
        <p v-bind:[myAttribute]="`id-${ index }`">Interpolation example. See code to check the "title" attribute</p>

        <!-- raw html -->
        <p>Normal way: {{ rawHtml }}</p>
        <p>Using v-html directive <span v-html="rawHtml"/></p>

        <!-- Reactivity -->
        <p>Reactivo: {{ contador }}</p>
        <p v-once>Evito reactividad: {{ contador }}</p>

        <!-- Loops -->
        <ul v-for="item in items">
            <li>
                {{ item.id }} - {{ item.name }}
                <!-- Conditional -->
                <span v-if="item.visible === true "> (es visible )</span>
                <span v-else> (NO es visible )</span>
            </li>
        </ul>

        <button v-on:click="increment">Click {{ index }}</button>

        <p>Variable computada (indexPlusContador) {{ indexPlusContador }}</p>
        <p>Variable computada compleja (fullName) {{ fullName }} = {{ nombre }} concatenado con {{ apellido }}</p>
        <button v-on:click="changeFullName( 'Fulanito Perez' )">Cambiar fullName</button>

    </div>

</template>

<script lang="ts">

import OneComponent from "./../../typescript/ui/OneComponent";
export default OneComponent;

</script>
