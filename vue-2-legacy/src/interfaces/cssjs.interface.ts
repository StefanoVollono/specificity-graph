export interface CssjsParse {
  selector: string;
  type?: string;
  subStyles?: CssjsParseSubStyles[];
  rules: CssjsParseRule[];
}

export interface CssjsParseSubStyles {
  selector: string;
  rules: CssjsParseRule[];
}

export interface CssjsParseRule {
  directive: string;
  value: string;
}