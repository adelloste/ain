import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        
        NgbModule
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,

        NgbModule,
        
        HeaderComponent
    ]
})
export class SharedModule { }