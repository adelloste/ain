import { Component, OnInit, Input } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ain-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  @Input() data: { title: string, msg: string, btn: string };

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() { }

}
