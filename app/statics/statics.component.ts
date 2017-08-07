import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wt-statics',
  templateUrl: './app/statics/statics.component.html'
})
export class StaticsComponent {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('统计信息');
  }

}
