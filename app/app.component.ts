import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";

@Component({
  selector: 'worktime-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  pageTitle: string;

  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.pageTitle = this.titleService.getTitle();
      }
    });
  }
}
