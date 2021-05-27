<template>
  <!-- todo trasformare griglia in classi dashboard e aggiungere le col-->
  <div class="Dashboard">
    <dashboard-header />
    <main class="Dashboard__main">
    
      <!-- RULES -->
      <div class="Dashboard__box">
        <DashboardSpecBox mood="orange" title="Rules:" :value="sgtConfig.rules.rulesTot">
          <svg class="icon icon-braces"><use xlink:href="#braces"></use></svg>
        </DashboardSpecBox>
      </div>

      <!-- SELECTORS -->
      <div class="Dashboard__box">
        <DashboardSpecBox mood="blu" title="Selectors:" :value="sgtConfig.selectors.selectorsTot">
          <svg class="icon icon-sort-amount-desc"><use xlink:href="#icon-sort-amount-desc"></use></svg>
        </DashboardSpecBox>
      </div>

      <!-- PROPERTIES -->
      <div class="Dashboard__box">
        <DashboardSpecBox mood="green" title="Properties:" :value="sgtConfig.rules.directivesTot">
          <svg class="icon icon-book"><use xlink:href="#icon-book"></use></svg>
        </DashboardSpecBox>
      </div>

      <!-- IMPORTANT -->
      <div class="Dashboard__box">
        <DashboardSpecBox mood="yellow" title="!important:" :value="sgtConfig.rules.importantTot">
          <svg class="icon icon-evil"><use xlink:href="#icon-evil"></use></svg>
        </DashboardSpecBox>
      </div>

      <!-- FORM INPUT -->
      <div class="Dashboard__box">
        <dashboard-form @css-parsed="onCssParsed($event)" />
      </div>
      
      <!-- GRAPH -->
      <div class="Dashboard__box Dashboard__box--overflow">
        <DashboardGraph>
          <svg v-if="!sgtConfig.specificityArr.length" class="icon icon-graph"><use xlink:href="#graph"></use></svg>
          <line-chart
            v-bind:style="{width: sgtConfig.chart.width + 'px', height: sgtConfig.chart.height + 'px'}"
            v-if="sgtConfig.specificityArr.length" 
            :chart-data="sgtConfig.chart.data" />
        </DashboardGraph>
      </div>

    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import DashboardForm from '@/components/dashboard/DashboardForm.vue';
import DashboardGraph from '@/components/dashboard/DashboardGraph.vue';
import DashboardSpecBox from '@/components/dashboard/DashboardSpecBox.vue';
import { Specificity } from '@/interfaces/specificity.interface';
import { specificityModelFactory } from '@/models/specificity.model';
import { getRules } from '@/utilities/getRules.utility';
import { getSelectors } from '@/utilities/getSelectors.utility';
import { getSpecificity } from '@/utilities/getSpecificity.utility';
import { graphConfig } from '@/utilities/graph.utility';
import LineChart from '@/components/LineChart.vue';
import * as _ from 'lodash';

@Component({
  components: {
    DashboardHeader,
    DashboardForm,
    DashboardGraph,
    DashboardSpecBox,
    LineChart
  }
})
export default class Dashboard extends Vue {
  public sgtConfig: Specificity = specificityModelFactory();

  public onCssParsed($event) {

    // Ritorno le rules [contiene sia le direttive che gli important]
    this.sgtConfig.rules = {...getRules($event)};
    
    // Ritorno i selettori
    this.sgtConfig.selectors = {...getSelectors($event)};

    // Specificity Calculator is built for CSS Selectors Level 3.
    this.sgtConfig.specificityArr = getSpecificity(this.sgtConfig.selectors.selectorsArr);
    
    // Chart config
    this.sgtConfig.chart = {...graphConfig(this.sgtConfig)}

  }

}
</script>

<style scoped lang="scss">

.Dashboard {
  $root: &;

  &__main {
    display: grid;
    grid-gap: 20px;
    grid-template-areas: "rules" "selectors" "properties" "importants" "form" "chart";
    margin-top: 20px;

    @media only screen and (min-width: 580px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-areas: "rules rules selectors selectors" "properties properties importants importants" "form form form form" "chart chart chart chart";
    }

    @media only screen and (min-width: 700px) {
      grid-template-areas: "rules rules selectors selectors" "properties properties importants importants" "form form chart chart";
    }

    @media only screen and (min-width: 1200px) {
      grid-template-areas: "rules selectors properties importants" "form chart chart chart";
    }
  }

  &__box {
    &:nth-child(1) {grid-area: rules}
    &:nth-child(2) {grid-area: selectors}
    &:nth-child(3) {grid-area: properties}
    &:nth-child(4) {grid-area: importants}
    &:nth-child(5) {grid-area: form}
    &:nth-child(6) {grid-area: chart}

    &--overflow {
      max-width: 100%;
      overflow: auto;
    }
  }

}
</style>
