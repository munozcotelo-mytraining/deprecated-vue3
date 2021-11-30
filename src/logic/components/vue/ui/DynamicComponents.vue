<template>

    <div class="component">

        <h2>Dynamic Component</h2>

        <div>
            <button v-on:click="changeComponent( 'component1' )">Change to component 1</button>
            <button v-on:click="changeComponent( 'component2' )">Change to component 2</button>
        </div>

        <div>
            <p>Sin keep-alive</p>
            <component
                :is="componentName"
                tag="sinkeepalive"
            />
        </div>

        <div>
            <p>Con keep-alive</p>
            <keep-alive>
                <component
                    :is="componentName"
                    tag="conkeepalive"
                />
            </keep-alive>
        </div>

    </div>

</template>

<script lang="ts">

import DynamicComponents from "./../../typescript/ui/DynamicComponents";
export default DynamicComponents;

</script>
