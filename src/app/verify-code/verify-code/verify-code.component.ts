import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AidManagerService }   from '@Core/services/aid-manager.service';
import { ModalManagerService } from '@Core/services/modal-manager.service';

import { Cf } from '@App/shared/validators/cf.validator';

import { Result } from '@Core/models/result';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ain-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private aidManager: AidManagerService,
    private modalManager: ModalManagerService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.searchForm = this.fb.group({
      cf: [
        '',
        Validators.compose([Validators.required, Cf()])
      ],
      code: [
        '',
        Validators.compose([Validators.required])
      ]
    });
  }

  onSubmit(): void {
    // get result
    let result: Result = this.aidManager.check(this.searchForm.value.cf, this.searchForm.value.code)
    // show result
    const modalRef: NgbModalRef = this.modalManager.openInfoModal(`Il codice inserito ${ result.valid ? `è valido` : `non è valido`}. Il codice generato è ${ result.code }`);
    modalRef.result.then(
      (result: boolean) => {
        if(result) { }
      }
    );
  }

}
