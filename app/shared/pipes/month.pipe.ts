import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Injectable()
@Pipe({
  name: "month"
})
export class MonthPipe implements PipeTransform {
  constructor() {
  }

  transform(value: any, pattern?: string): string | null {
    switch(value) {
      case true:
        return `<span class = "label label-warning">上旬</span>`;
      case false:
        return `<span class = "label label-primary">下旬</span>`;
      default:
        return `<span class = "label label-danger">错误</span>`;
    }
  }
}
