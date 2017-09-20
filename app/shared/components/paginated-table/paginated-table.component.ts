import {
  Component,
  Inject,
  OnChanges,
  Input,
  Output,
  ElementRef,
  EventEmitter
} from '@angular/core';
import { DatePipe } from "@angular/common";
// import { StatusPipe, MonthPipe } from "../../index";
import {
  JQ_TOKEN
} from '../../../shared/index';

@Component({
  selector: 'paginated-table',
  templateUrl: './app/shared/components/paginated-table/paginated-table.component.html',
  styleUrls: ['./app/shared/components/paginated-table/paginated-table.component.css']
})
export class PaginatedTableComponent implements OnChanges {
  @Input() name: string;
  @Input() items: any;
  @Input() fields: any;
  @Input() busy: boolean;
  @Input() hasData: boolean;
  @Input() pageIndex: number;
  @Input() totalPages: number;
  @Input() showActions: boolean = true;
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  toRemove: string;

  tableMessage: string = "数据更新于2017年10月1日 11:25PM";

  constructor(
    private elementRef: ElementRef,
    private datePipe: DatePipe,
    @Inject(JQ_TOKEN) public jquery: any) {
  }

  onEdit(args) {
    this.edit.emit(args);
  }

  onRemove(args) {
    this.jquery('#removeConfirmation').modal('show');
    this.toRemove = args;
  }

  ok() {
    this.remove.emit(this.toRemove);
  }

  ngOnChanges() {
  }
}
