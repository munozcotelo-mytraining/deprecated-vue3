<template>

    <div class="component">
        <h3>User info</h3>
        <p>Id read from $route : {{ $route.params.id }} </p>
        <p>Id read from props  : {{ identificador }} </p>

    </div>

</template>

<script lang="ts">

import UserInfoController from "./../../typescript/controllers/UserInfoController";
export default UserInfoController;

</script>
