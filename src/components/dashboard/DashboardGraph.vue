<template>
  <div class="DashboardGraph DashboardGraph--big fill-dark">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class DashboardGraph extends Vue {}
</script>

<style scoped lang="scss">

.DashboardGraph {
  @extend %box;
  
  height: 100%;
  min-height: 300px;
  max-width: 100%;
  overflow: auto;
}

</style>
