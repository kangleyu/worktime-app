import {
  Component,
  Inject,
  OnChanges,
  Input,
  ElementRef
} from '@angular/core';
import { DatePipe } from "@angular/common";
import { StatusPipe, MonthPipe } from "../../index";

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
  statusPipe = new StatusPipe();
  monthPipe = new MonthPipe();

  tableMessage: string = "数据更新于2017年10月1日 11:25PM";

  constructor(private elementRef: ElementRef, private datePipe: DatePipe) {
  }

  ngOnChanges() {
    // if(this.busy) {
    if(false) { // disable busy state temporary, becaus it will break the refresh for some time.
      // this.elementRef.nativeElement.innerHTML = `<div class="spinner-container"><div class="spinner"><p><i class="fa fa-refresh fa-spin"></i></p></div></div>`;
    } else if(!this.hasData) {
      this.elementRef.nativeElement.innerHTML = `<div class="empty-table"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> 非常抱歉，没有找到任何数据！</div>`;
    } else {
      const time = new Date();
      this.tableMessage = "数据更新于 " + time.toLocaleTimeString();
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
        inner += "<th></th><th></th>";
        inner += "<tbody>";
        this.items.forEach((data) => {
          inner += "<tr>";
          fieldsList.forEach((ele) => {
            const fieldName = ele.substr(0, ele.indexOf(':'));
            if (fieldName === "createdAt" || fieldName === "updatedAt") {
              inner += "<td>" + this.datePipe.transform(data[fieldName], "yyyy-MM-dd") + "</td>";
            } else if (fieldName === "state") {
              inner += "<td>" + this.statusPipe.transform(data[fieldName]) + "</td>";
            } else if (fieldName === "isUpperHalf") {
              inner += "<td>" + this.monthPipe.transform(data[fieldName]) + "</td>";
            } else {
              inner += "<td>" + data[fieldName] + "</td>";
            }
          });
          inner += `<td><button class="btn btn-xs btn-info cell-btn">
          <span class="glyphicon glyphicon-edit"></span>
        </button></td><td><button class="btn btn-xs btn-danger cell-btn">
          <span class="glyphicon glyphicon-remove"></span>
        </button></td>`;
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
