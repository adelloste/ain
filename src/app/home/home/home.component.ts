import { Component, OnInit }                  from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AidManagerService }   from '@Core/services/aid-manager.service';
import { ModalManagerService } from '@Core/services/modal-manager.service';

import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ain-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
        Validators.compose([Validators.required])
      ]
    });
  }

  onSubmit(): void {
    // workaround
    this.searchForm.get('cf').markAsTouched();
    // open modal
    const modalRef: NgbModalRef = this.modalManager.openInfoModal(`Il codice ain generato è ${ this.aidManager.check(this.searchForm.value.cf) }`);
    modalRef.result.then(
      (result: boolean) => {
        if(result) { }
      }
    );
  }

}
