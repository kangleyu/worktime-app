import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter
} from "@angular/core";

import { ParseFieldsPipe } from "../../index";

// class AggParam {
//   display: string;
//   value: string;
//   isSelected: boolean;
// }

@Component({
  selector: "agg-panel",
  templateUrl: './app/shared/components/agg-panel/agg-panel.component.html',
  styleUrls: ['./app/shared/components/agg-panel/agg-panel.component.css']
})
export class AggPanelComponent implements OnInit, OnChanges {
  @Input() params: any;
  @Output() selectedParamsChanged: EventEmitter<[string]> = new EventEmitter();

  constructor() {
  }

  get selectedFields(): [string] {
    if (this.params !== undefined) {
      let startIndex = 1;
      return this.params
                .filter((p) => p.isSelected !== undefined && p.isSelected)
                .sort((p1, p2) => p1.toggledTime.getTime() - p2.toggledTime.getTime())
                .map((p) => {
                  p.order = startIndex;
                  startIndex++;
                  return p.name;
                });
    } else {
      return [''];
    }
  }

  ngOnInit() {
    // default aggregate on first parameter
    this.params[0].isSelected = true;
    this.params[0].toggledTime = new Date(Date.now());
    this.selectedParamsChanged.emit(this.selectedFields);
  }

  ngOnChanges() {
  }

  toggle(param) {
    param.isSelected = !param.isSelected;
    if(param.isSelected === false) {
      delete param.order;
    }
    param.toggledTime = new Date(Date.now());
    this.selectedParamsChanged.emit(this.selectedFields);
  }
}
