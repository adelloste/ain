import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';

const MAIN_ROUTES: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'verifycode',
        loadChildren: () => import('../verify-code/verify-code.module').then(m => m.VerifyCodeModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MAIN_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule { }