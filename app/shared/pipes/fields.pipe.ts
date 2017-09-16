import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "parseFields"
})
export class ParseFieldsPipe implements PipeTransform {
  constructor() {
  }

  transform(value: any, pattern?: string): any {
    const ret = [];
    if (value !== undefined) {
      const fieldsList = value.split('|');
      fieldsList.forEach((ele) => {
        const separatorIndex = ele.indexOf(':');
        const field = ele.substr(0, separatorIndex);
        const display = ele.substr(separatorIndex + 1);
        ret.push({ name: field, text: display, isSelected: false });
      });
    }
    return ret;
  }
}
