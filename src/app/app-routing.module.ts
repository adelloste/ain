import { NgModule }                                from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    redirectTo: '/main/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {
        useHash: true,
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
