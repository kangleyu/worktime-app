import {
  Component,
  Inject,
  OnChanges,
  Input,
  ElementRef
} from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'paginated-table',
  templateUrl: './app/shared/components/paginated-table/paginated-table.component.html',
  styleUrls: ['./app/shared/components/paginated-table/paginated-table.component.css']
})
export class PaginatedTableComponent implements OnChanges {
  @Input() items: any;
  @Input() fields: string;
  @Input() busy: boolean;
  @Input() hasData: boolean;

  tableMessage: string = "数据更新于2017年10月1日 11:25PM";

  constructor(private elementRef: ElementRef, private datePipe: DatePipe) {
  }

  ngOnChanges() {
    if(this.busy) {
      this.elementRef.nativeElement.innerHTML = "Loading... ...";
    } else if(!this.hasData) {
      this.elementRef.nativeElement.innerHTML = "No Data!";
    } else {
      if(this.fields !== undefined &&
        this.fields.length > 0 &&
        this.items !== undefined &&
        this.items.length > 0) {
        const fieldsList = this.fields.split('|');
        let inner = "<table class=\"wt-table\">";
        fieldsList.forEach((ele) => {
          const separatorIndex = ele.indexOf(':');
          inner += "<th data-field=\"" +
          ele.substr(0, separatorIndex) +
          "\">" + ele.substr(separatorIndex + 1) +
          "</th>";
        });
        inner += "<tbody>";
        this.items.forEach((data) => {
          inner += "<tr>";
          fieldsList.forEach((ele) => {
            const fieldName = ele.substr(0, ele.indexOf(':'));
            if (fieldName === "createdAt" || fieldName === "updatedAt") {
              inner += "<td>" + this.datePipe.transform(data[fieldName], "yyyy-MM-dd") + "</td>";
            } else {
              inner += "<td>" + data[fieldName] + "</td>";
            }
          });
          inner +="</tr>";
        });
        inner += "</tbody>";
        inner += "<tfoot><tr><td colspan=\"";
        inner += (fieldsList.length - 1) + "";
        inner += `\"><em>`;
        inner += this.tableMessage;
        inner += `</em>
        </td><td>&nbsp;</td></tr></tfoot>`;
        inner += "</table>";
        this.elementRef.nativeElement.innerHTML = inner;
      }
    }
  }
}
