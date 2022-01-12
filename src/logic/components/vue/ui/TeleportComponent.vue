<template>

    <div class="component">

        TeleportComponent

        <teleport to="body" v-bind:disabled=disableTelerport>
            <p>Esto va en el body aunque esté en el template del componente</p>
        </teleport>

        <teleport to="#targetTeleport1" v-bind:disabled=disableTelerport>
            <p>Esto se incluye en el div#targetTeleport</p>
        </teleport>

        <teleport v-bind:to="targetTeleport" v-bind:disabled=disableTelerport>
            <p>Esto va cambiando el lugar en el que se inyecta en el div{{ targetTeleport }}</p>
        </teleport>

        <button v-on:click="changeDisable">Change disable teleport</button>

    </div>

</template>

<script lang="ts">

import TeleportComponent from "./../../typescript/ui/TeleportComponent";
export default TeleportComponent;

</script>

