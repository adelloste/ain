import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { RouterModule }        from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent }  from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { OnlyNumbersDirective }  from './directives/only-numbers.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        SidenavComponent,

        OnlyNumbersDirective
    ],
    exports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,

        NgbModule,
        
        HeaderComponent,
        SidenavComponent,

        OnlyNumbersDirective
    ]
})
export class SharedModule { }