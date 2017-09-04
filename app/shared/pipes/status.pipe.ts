import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Injectable()
@Pipe({
  name: "status"
})
export class StatusPipe implements PipeTransform {
  constructor() {
  }

  transform(value: any, pattern?: string): string | null {
    switch(value) {
      case "1":
        return `<span class = "label label-warning">未开工</span>`;
      case "2":
        return `<span class = "label label-primary">在建</span>`;
      case "3":
        return `<span class = "label label-success">已竣工</span>`;
      default:
        return `<span class = "label label-danger">暂无状态</span>`;
    }
  }
}
