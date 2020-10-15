import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { VerifyCodeComponent } from './verify-code/verify-code.component';

const VERIFY_CODE_ROUTES: Routes = [
  { 
    path: '',
    component: VerifyCodeComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VERIFY_CODE_ROUTES)
  ]
})
export class VerifyCodeRoutingModule { }