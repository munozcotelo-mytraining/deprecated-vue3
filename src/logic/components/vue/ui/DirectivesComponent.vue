<template>

    <div class="component">

        <h1>Directives component</h1>

        <h2>Directiva amgarcia inyectada de forma general</h2>

        <div>
            <p>Aplico directiva <strong>amgarcia</strong> con nombre de argumento "a fuego" y valor "dinámico"</p>
            <p v-amgarcia:paramDos="argValueForDirective">Lo cambia la directiva</p>
        </div>

        <div>
            <p>Aplico directiva <strong>amgarcia</strong> con nombre de argumento "dinámico" y valor "a fuego"</p>
            <p v-amgarcia:[argNameForDirective]="'a string value'">Lo cambia la directiva</p>
        </div>


        <div>
            <p>Aplico directiva <strong>amgarcia</strong> con nombre de argumento "dinámico" y valor "a fuego" de tipo objeto</p>
            <p v-amgarcia:[argNameForDirective]="{ k1: 10, k2: 20 }">Lo cambia la directiva</p>
        </div>

        <!-- <p v-amgarcia:[argNameForDirective]="{ k1: 10, k2: 20 }">***Hola {{ title }}</p> -->

        <h2>Directiva munoz inyectada en componente</h2>

        <div>
            <p>Aplico directiva <strong>munoz</strong> con nombre de argumento "a fuego" y valor "dinámico"</p>
            <p v-munoz:paramDos.modificador1.modificador2="argValueForDirective">Lo cambia la directiva</p>
        </div>
        <div>
            <p>Aplico directiva <strong>otra</strong> con nombre de argumento "dinámico" y valor "a fuego"</p>
            <p v-otra:paramDos="argValueForDirective">Lo cambia la directiva</p>
        </div>

    </div>

</template>

<script lang="ts">

import DirectivesComponent from "./../../typescript/ui/DirectivesComponent";
export default DirectivesComponent;

</script>
