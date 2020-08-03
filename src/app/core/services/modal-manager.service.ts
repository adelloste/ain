import { Injectable } from '@angular/core';

import { ModalInfoComponent }    from '../components/modal-info/modal-info.component';

import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalManagerService {

    constructor(
        private modalService: NgbModal
    ) { }

    openInfoModal(msg: string = '', title: string = 'ATTENZIONE', btn: string = 'PROSEGUI'): NgbModalRef {
        const modalRef: NgbModalRef = this.modalService.open(ModalInfoComponent, {
            windowClass: 'stylemodal-pit modal-locfinder position-fixed',
            backdrop: 'static'
        });
        modalRef.componentInstance.data = {
            title: title,
            msg: msg,
            btn: btn
        };
        return modalRef;
    }

}