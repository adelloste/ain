import { BrowserModule }       from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { CoreModule }       from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'it-IT'
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
