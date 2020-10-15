import { Component, OnInit } from '@angular/core';

import { SidenavManagerService } from '@App/core/services/sidenav-manager.service';

@Component({
  selector: 'ain-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private sidenavManager: SidenavManagerService
  ) { }

  ngOnInit() { }

  onClick(): void {
    this.sidenavManager.announceStatus();
  }

}
