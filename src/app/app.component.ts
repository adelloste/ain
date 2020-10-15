import { Component, OnInit }     from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

import { environment } from '@Environments/environment';

declare let gtag: Function;

@Component({
  selector: 'ain-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.stats();
  }

  stats(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd && environment.production),
    )
    .subscribe(
      (event: NavigationEnd) => {
        gtag('config', 'UA-106206225-2', { 'page_path': event.urlAfterRedirects });
      }
    );
  }

}
