import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

@Component({
  selector: 'paginated-table',
  templateUrl: './app/shared/components/paginated-table/paginated-table.component.html'
})
export class PaginatedTableComponent implements OnInit {

  ngOnInit() {
    const caption = "test";
  }
}
