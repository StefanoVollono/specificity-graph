import { Chart } from "@/interfaces/specificity.interface";
import { ChartModel } from "@/models/specificity.model";
import { Specificity } from '@/interfaces/specificity.interface';
import * as _ from 'lodash';

export const CHART_COLORS = [
  'rgba(255, 99, 132, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(255, 205, 86, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(201, 203, 207, 1)'
];

export function graphConfig(sgtConfig: Specificity): Chart {
  let parentWidth: number = 0;
  let parentHeight: number = 0;
  const chart: Chart = new ChartModel(); // Object chart configuration
  const itemsLength: number = sgtConfig.selectors.selectorsTot; // numero di selettori
  const step: number = 15;
  parentWidth   = (document.querySelector('.DashboardGraph--big') as HTMLElement).offsetWidth;
  parentHeight  = (document.querySelector('.DashboardGraph--big') as HTMLElement).offsetHeight; 
  const fakeWidth: number = itemsLength * step; // la larghezza che il grafico avrebbe senza ulteriori controlli
  
  // Chart sizing
  chart.height = parentHeight;
  chart.width = (fakeWidth < parentWidth) ? parentWidth : fakeWidth;

  // Chart Data config
  chart.data = {
    labels: sgtConfig.selectors.selectorsArr,
    datasets: [{
      label: 'Specificity',
      data: sgtConfig.specificityArr,
      backgroundColor: CHART_COLORS[_.random(CHART_COLORS.length-1)],
    }]
  };

  return chart;
}