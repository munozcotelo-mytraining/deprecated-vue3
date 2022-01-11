<template>

    <div>

        <p>Dato de entrada : {{ modelValue }}</p>

        <label for="password">Password: </label>
        <input type="text" name="password" v-model="password" v-on:keyup="checkPassword" />
        <span>{{ password }}</span>
        <br/>
        <label for="repassword">Re-Password: </label>
        <input type="text" name="repassword" v-model="repassword" v-on:keyup="checkPassword" />
        <span>{{ repassword }}</span>
        <br/>

        <div v-if="password===repassword">
            TODO OK
        </div>
        <div v-else>
            Password y repassword no son iguales
        </div>

    </div>

</template>

<script lang="ts">

import CustomInputComponent from "./../../typescript/ui/CustomInputComponent";
export default CustomInputComponent;

</script>
