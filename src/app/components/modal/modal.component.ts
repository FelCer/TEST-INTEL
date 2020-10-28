import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  image:string;
  tags:string;
  views:string;
  likes:string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
