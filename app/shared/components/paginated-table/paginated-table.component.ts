import {
  Component,
  Inject,
  OnChanges,
  Input,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'paginated-table',
  templateUrl: './app/shared/components/paginated-table/paginated-table.component.html'
})
export class PaginatedTableComponent implements OnChanges {
  @Input() items: any;
  @Input() fields: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnChanges() {
    if(this.fields !== undefined &&
      this.fields.length > 0 &&
      this.items !== undefined &&
      this.items.length > 0) {
      const fieldsList = this.fields.split('|');
      let inner = "<table class=\"table table-striped wt-table\">";
      fieldsList.forEach((ele) => {
        const separatorIndex = ele.indexOf(':');
        inner += "<th data-field=\"" + ele.substr(0, separatorIndex) + "\">" + ele.substr(separatorIndex + 1) + "</th>";
      });
      inner += "<tbody>";
      this.items.forEach((data) => {
        inner += "<tr>";
        fieldsList.forEach((ele) => {
          inner += "<td>" + data[ele.substr(0, ele.indexOf(':'))] + "</td>";
        });
        inner +="</tr>";
      });
      inner += "</tbody></table>";
      this.elementRef.nativeElement.innerHTML = inner;
    }
  }
}
