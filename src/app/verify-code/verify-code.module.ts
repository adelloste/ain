import { NgModule } from '@angular/core';

import { SharedModule }            from '../shared/shared.module';
import { VerifyCodeRoutingModule } from './verify-code-routing.module';

import { VerifyCodeComponent } from './verify-code/verify-code.component';

@NgModule({
    imports: [
        SharedModule,
        VerifyCodeRoutingModule
    ],
    declarations: [
        VerifyCodeComponent
    ]
})
export class VerifyCodeModule { }