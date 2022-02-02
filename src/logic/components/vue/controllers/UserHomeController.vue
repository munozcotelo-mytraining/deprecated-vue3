<template>

    <div class="component">
        <h3>User home</h3>
        <p>Id read from $route : {{ $route.params.id }} </p>
        <p>Id read from props <strong>is not able for nested routes. Use provide/inject instead</strong> </p>

    </div>

</template>

<script lang="ts">

import UserHomeController from "./../../typescript/controllers/UserHomeController";
export default UserHomeController;

</script>
