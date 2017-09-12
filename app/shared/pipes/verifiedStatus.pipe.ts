import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "verifiedStatus"
})
export class VerifiedStatusPipe implements PipeTransform {
  constructor() {
  }

  transform(value: any, pattern?: string): string | null {
    switch(value) {
      case false:
        return `<span class = "label label-danger"><i class="fa fa-square-o" aria-hidden="true"></i> 待复核</span>`;
      case true:
        return `<span class = "label label-success"><i class="fa fa-check-square-o" aria-hidden="true"></i> 已复核</span>`;
    }
  }
}
