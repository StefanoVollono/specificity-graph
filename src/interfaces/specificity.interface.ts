export interface Specificity {
  rules: Rules;
  selectors: Selectors;
  specificityArr: string[];
  chart: Chart;
}

export interface Rules {
  rulesTot: number;
  directives: string[];
  directivesTot: number;
  importantTot: number;
}

export interface Selectors {
  selectorsArr: string[];
  selectorsTot: number;
}

export interface Chart {
  height: number;
  width: number;
  data: unknown; // todo aggionrare interfaccia
}