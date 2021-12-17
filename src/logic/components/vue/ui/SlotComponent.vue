<template>

    <div class="component half">

        <h2>Slot Component</h2>

        <p>Contenido propio del hijo <strong>(before)</strong></p>

        <slot>
            Contenido por defecto del slot
        </slot>

        <p>Contenido propio del hijo <strong>(after)</strong></p>

        <slot name="header">
            Header by default
        </slot>

        <slot name="footer" v-bind:info="info">
            Footer by default
        </slot>

        <slot name="slot1">
            Slot1 by default
        </slot>

        <slot name="slot2">
            Slot2 by default
        </slot>

    </div>

</template>

<script lang="ts">

import SlotComponent from "./../../typescript/ui/SlotComponent";
export default SlotComponent;

</script>
