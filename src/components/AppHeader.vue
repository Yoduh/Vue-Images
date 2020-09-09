<template>
    <div class="ui secondary pointing menu">
        <a class="item" href="/">
            Image Storage
        </a>
        <div class="right menu">
            <a herf="#" class="ui item" @click="login">
            Login
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "AppHeader",
    methods: {
        ...mapActions(['login'])
    }
}
</script>

<style scoped>

</style>