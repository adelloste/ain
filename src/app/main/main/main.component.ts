import { Component, OnInit, AfterViewInit } from '@angular/core';

import { SidenavManagerService } from '@App/core/services/sidenav-manager.service';

import Swiper from 'swiper';

@Component({
  selector: 'ain-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  swiper: Swiper;

  constructor(
    private sidenavManager: SidenavManagerService
  ) { }

  ngOnInit() {
    this.sidenavManager.statusAnnounced$.subscribe(
      () => {
        if(this.swiper.activeIndex === 1) {
          this.swiper.slidePrev();
        }
        else {
          this.swiper.slideNext();
        }
      }
    );
  }

  ngAfterViewInit() {
		this.swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto',
			initialSlide: 1,
      resistanceRatio: 0,
      allowTouchMove: false,
			// slideToClickedSlide: true,
			on: {
				slideChangeTransitionStart: function () { },
        slideChangeTransitionEnd: function () { }
			}
    });
  }

}
