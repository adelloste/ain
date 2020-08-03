import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }