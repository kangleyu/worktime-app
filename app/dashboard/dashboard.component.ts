import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wt-dashboard',
  templateUrl: './app/dashboard/dashboard.component.html'
})
export class DashboardComponent {
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('综合信息');
  }
}
