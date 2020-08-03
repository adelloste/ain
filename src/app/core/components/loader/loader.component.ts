import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoaderManagerService } from '../../services/loader-manager.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'ain-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  active: boolean = false;
  subscription: Subscription;

  constructor(
    private loaderManager: LoaderManagerService
  ) {
    this.subscription = this.loaderManager.getStatus().subscribe((msg: boolean) => { this.active = msg; });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
