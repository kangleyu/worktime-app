import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wt-statics',
  templateUrl: './app/statics/statics.component.html',
  styleUrls: ['./app/statics/statics.component.css']
})
export class StaticsComponent {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('统计信息');
  }

  aggregateWorktimes(args) {
    console.log("aggregate worktimes ... " + args);
  }

  aggregatePayments(args) {
    console.log("aggregate payments ... " + args);
  }
}
