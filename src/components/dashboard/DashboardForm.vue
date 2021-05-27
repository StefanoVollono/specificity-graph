<template>

  <div class="DashboardForm">
    <form name="cssFormArea" novalidate>
      <div class="DashboardForm__head fill-red">
        <p class="text text--title">Paste your css</p>
      </div>
      <textarea
        class="DashboardForm__area"
        v-model="cssInput"
        placeholder=".selector {property: value}"
        required></textarea>
      <button
        type="button"
        @click="parseCss()"
        :disabled="!cssInput"
        class="btn fill-red">Scan it</button>  
    </form>
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CssjsParse } from '@/interfaces/cssjs.interface'
import { Cssjs } from '@/utilities/cssjs.utility.js'

// Initialize parser object
const cssjsInstance = new Cssjs();

@Component
export default class DashboardForm extends Vue {
  // public cssParsed!: CssjsParse;
  public cssInput: string = '';
  
  /**
   * @description take in input the css to parse
   */
  public parseCss() {
    this.$emit('css-parsed', cssjsInstance.parseCSS(this.cssInput))
  }
  
}
</script>

<style scoped lang="scss">

.DashboardForm {
  @extend %box;

  &__head {
    padding: 20px 10px;
  }

  &__area {
    background: white;
    width: 100%;
    height: 524px;
    padding: 20px;
    border: 0;
    resize: none;
    outline: 0;
    margin: 0;
    font-size: 15px;
    color: #999;
  }
}

</style>
