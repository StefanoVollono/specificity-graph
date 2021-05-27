import { calculate, Specificity } from "specificity";

// Funzione per il calcolo della specificità
export function getSpecificity (arr: string[]): string[] {
  var selectorString = arr.join(',');

  // Uso la libreria SPECIFICITY per calcolare la specificità dei singoli selettori
  var spec: Specificity[] = calculate(selectorString);
  var specValues: string[] = [];
  for (var i = 0; i < spec.length; i++) {
    specValues.push(spec[i].specificity.replace(/\,/g,""));
  }

  return specValues;

}