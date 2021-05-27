import { CssjsParse, CssjsParseRule, CssjsParseSubStyles } from "@/interfaces/cssjs.interface";
import { Selectors } from "@/interfaces/specificity.interface";
import { SelectorsModel } from "@/models/specificity.model";

// Funzione che ritorna i selettori
export function getSelectors (arr: CssjsParse[]): Selectors {
  
  let selectorObj: Selectors = new SelectorsModel();
  let selectors: string[] = [];

  arr.map((elem) => { 
    if (elem.subStyles) {
      elem.subStyles.map((innerElem) => {
        selectors = innerElem.selector.split(',');
        selectorObj.selectorsArr = selectorObj.selectorsArr.concat(selectors);
      })
    } else {
      selectors = elem.selector.split(',');
      selectorObj.selectorsArr = selectorObj.selectorsArr.concat(selectors);
    }
  });

  selectorObj.selectorsTot = selectorObj.selectorsArr.length;
  return selectorObj;

}
