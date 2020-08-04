import { NgModule } from '@angular/core';

import { SharedModule }          from '../shared/shared.module';
import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        SharedModule,
        NotFoundRoutingModule
    ],
    declarations: [
        NotFoundComponent
    ]
})
export class NotFoundModule { }