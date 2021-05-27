<template>
  
  <div class="DashboardSpecBox" :class="classNameByMood">
    <h3 class="text--title">{{ title }}</h3>
    <p class="text--head">{{ value }}</p>
    <div class="DashboardSpecBox__deco">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DashboardSpecBox extends Vue {
  @Prop({required: true}) public mood!: string;
  @Prop({required: true}) public title!: string;
  @Prop({required: true}) public value!: number;

  get classNameByMood() {
    return `fill-${this.mood}`;
  }

}
</script>

<style scoped lang="scss">
.DashboardSpecBox {
  @extend %box;
  padding: 20px;
  text-align: right;

  &__deco {
    height: 100%;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    background: rgba(255,255,255, 0.3);
  }

}


</style>