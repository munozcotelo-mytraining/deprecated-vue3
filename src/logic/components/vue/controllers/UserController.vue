<template>

    <div class="component">
        <h1>User component</h1>
        <p>Id read from $route : {{ $route.params.id }} </p>
        <p>Id read from props : {{ id }} </p>

        <router-view></router-view>
        <br/>
        <router-view name="anotherView"></router-view>

    </div>

</template>

<script lang="ts">

import UserController from "./../../typescript/controllers/UserController";
export default UserController;

</script>
