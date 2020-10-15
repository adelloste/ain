import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ModalInfoComponent } from './components/modal-info/modal-info.component';

import { AidManagerService }     from './services/aid-manager.service';
import { ModalManagerService }   from './services/modal-manager.service';
import { LoaderManagerService }  from './services/loader-manager.service';
import { SidenavManagerService } from './services/sidenav-manager.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ModalInfoComponent
  ],
  exports: [
    ModalInfoComponent
  ],
  providers: [
    AidManagerService,
    ModalManagerService,
    LoaderManagerService,
    SidenavManagerService
  ],
  entryComponents: [
    ModalInfoComponent
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AidManagerService,
        ModalManagerService,
        LoaderManagerService,
        SidenavManagerService
      ]
    };
  }
}