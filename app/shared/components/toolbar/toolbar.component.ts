import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit
} from "@angular/core";

@Component({
  selector: 'table-toolbar',
  templateUrl: './app/shared/components/toolbar/toolbar.component.html',
  styleUrls: ['./app/shared/components/toolbar/toolbar.component.css']
})
export class TableToolbarComponent implements OnInit {
  @Output()
  previous = new EventEmitter<number>();
  @Output()
  next = new EventEmitter<number>();
  @Output()
  goto = new EventEmitter<number>();
  @Output()
  create = new EventEmitter();
  @Output()
  refresh = new EventEmitter();
  @Output()
  export = new EventEmitter();

  @Input()
  current: number;

  @Input()
  isPreviousValid: boolean;
  @Input()
  isNextValid: boolean;
  @Input()
  showAddBtn: boolean = true;

  gotoPage: number;

  ngOnInit() {
    this.gotoPage = 1;
  }

  previousAction() {
    this.previous.emit(this.current - 1);
  }
  nextAction() {
    this.next.emit(this.current + 1);
  }
  gotoAction() {
    this.goto.emit(this.gotoPage);
  }
  createAction() {
    this.create.emit();
  }
  refreshAction() {
    this.refresh.emit();
  }
  exportAction() {
    this.export.emit();
  }
}
