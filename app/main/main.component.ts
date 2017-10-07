import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { AuthenticationService } from "../shared/index";

@Component({
  selector: 'worktime-app-main',
  templateUrl: 'app/main/main.component.html',
  styleUrls: ['app/main/main.component.css']
})
export class MainComponent {
  pageTitle: string;
  currentUser: string;

  constructor(
    private titleService: Title,
    private authenticationService: AuthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.currentUser = this.authenticationService.getCurrentUsername();
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.pageTitle = this.titleService.getTitle();
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl('/login');
  }
}
