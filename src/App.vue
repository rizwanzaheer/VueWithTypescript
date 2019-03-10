<template>
  <div id="app">
    <AppNavbar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AppNavbar from '@/components/AppNavbar.vue';
import AppFooter from '@/components/AppFooter.vue';

@Component({
  components: {
    AppNavbar,
    AppFooter,
  },
})
export default class App extends Vue {}
</script>


<style>
</style>
