import { Chart, Rules, Selectors, Specificity } from "@/interfaces/specificity.interface";

class specificityModel implements Specificity {
  rules: Rules;
  selectors: Selectors;
  chart: Chart;
  specificityArr: string[];
  
  constructor() {
    this.rules = new RulesModel()
    this.selectors = new SelectorsModel()
    this.chart = new ChartModel()
    this.specificityArr = []
  }
  
}

export class RulesModel implements Rules {
  directives: string[];
  rulesTot: number;
  directivesTot: number;
  importantTot: number;

  constructor() {
    this.directives = []
    this.rulesTot = 0
    this.directivesTot = 0
    this.importantTot = 0
  }
}

export class SelectorsModel implements Selectors {
  selectorsArr: string[];
  selectorsTot: number;

  constructor() {
    this.selectorsArr = []
    this.selectorsTot = 0
  }
}

export class ChartModel implements Chart {
  height: number;
  width: number;
  data: unknown;

  constructor() {
    this.height = 0
    this.width = 0
    this.data = {}
  }
  
}

export function specificityModelFactory (): Specificity {
  return new specificityModel()
}