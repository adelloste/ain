import { Component, OnInit } from '@angular/core';

import { SidenavManagerService } from '@App/core/services/sidenav-manager.service';

@Component({
  selector: 'ain-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private sidenavManager: SidenavManagerService
  ) { }

  ngOnInit() { }

  onClick(): void {
    this.sidenavManager.announceStatus();
  }

}
