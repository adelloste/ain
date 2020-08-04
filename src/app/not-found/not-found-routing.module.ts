import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const NOT_FOUND_ROUTES: Routes = [
  { 
    path: '',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NOT_FOUND_ROUTES)
  ]
})
export class NotFoundRoutingModule { }