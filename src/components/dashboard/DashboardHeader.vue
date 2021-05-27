<template>
  
  <header class="DashboardHeader">
    <h1 class="DashboardHeader__title">
      <a href="https://github.com/StefanoVollono/specificity-graph" target="_blank" class="text text--head">Instant <span class="text--evidence">Specificity</span> Graph</a>
    </h1>
    <a href="https://www.linkedin.com/in/stefanovollono/" target="_blank" class="DashboardHeader__avatar">
      <img alt="Stefano Vollono profile image" src="https://www.gravatar.com/avatar/bcfe86121b8a1ee31db8beb69c1da038.jpg?size=60" />
    </a>
  </header>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DashboardHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.DashboardHeader {

  @extend %box;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    margin-left: 10px;
    font-size: 14px;

    & > a:link,
    & > a:visited {
      color: $dark;
      text-decoration: none;
    }
  }

  &__avatar {
    display: block;

    & > img {
      height: 60px;
      width: 60px;
      display: block;
    }
  }
}

</style>
