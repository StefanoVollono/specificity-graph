<template>
  <div id="app">
    <Dashboard />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dashboard from '@/components/dashboard/Dashboard.vue';


@Component({
  components: {
    Dashboard
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "~reset.css/reset.css";
@import "@/style/main";

* {
  box-sizing: border-box;
}

</style>
