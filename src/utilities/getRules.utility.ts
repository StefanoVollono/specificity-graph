import { CssjsParse, CssjsParseSubStyles } from '@/interfaces/cssjs.interface';
import { Rules } from '@/interfaces/specificity.interface';
import { RulesModel } from '@/models/specificity.model';

export function getRules (arr: CssjsParse[]): Rules {
  let rulesObj = new RulesModel();

  arr.map((elem, index) => { 
    if (elem.subStyles) {
      elem.subStyles.map((innerElem) => {
        // Rules
        if (innerElem.rules) {
          rulesObj.rulesTot = rulesObj.rulesTot + innerElem.rules?.length;
        }
        // directives and importants
        getDirectivesAndImportant(innerElem, rulesObj);
      })
    } else {
      // Rules
      if (elem.rules) {
        rulesObj.rulesTot = rulesObj.rulesTot + elem.rules?.length;
      }
      // directives and importants
      getDirectivesAndImportant(elem, rulesObj);
    }
  });

  rulesObj.directivesTot = rulesObj.directives.length;
  return rulesObj
}

function getDirectivesAndImportant(style: CssjsParseSubStyles, obj: Rules) {
  style.rules?.map((item) => {
    // directives
    obj.directives.push(item.directive);
    // importants
    if (item.value.indexOf('!important') > 0) {
      obj.importantTot++;
    }
  }) 
};