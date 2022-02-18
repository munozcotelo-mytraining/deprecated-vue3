<template>

    <div class="component">
        <h3>User edit</h3>
        <p>Id read from $route : {{ $route.params.id }} </p>
        <p>Id read from props  : {{ identificador }} </p>

    </div>

</template>

<script lang="ts">

import UserEditController from "./../../typescript/controllers/UserEditController";
export default UserEditController;

</script>
