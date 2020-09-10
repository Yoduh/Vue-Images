<template>
    <div>
        Please wait...
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { router } from '../main';

export default {
    name: 'AuthHandler',
    methods: {
        ...mapActions(['finalizeLogin'])
    },
    created() {
        this.finalizeLogin(window.location.hash);
        router.push('/');
    }
}
</script>

<style scoped>

</style>