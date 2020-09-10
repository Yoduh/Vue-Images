<template>
  <div>
    <app-header></app-header>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
</style>
