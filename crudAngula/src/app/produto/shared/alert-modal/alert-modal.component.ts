import { Component, Input, OnInit } from '@angular/core';
/* import {BsModalRef} from 'ngx-bootstrap/modal' */

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {


  @Input()
  type!: 'success';
  @Input()
  Message!: string;
 
  

  constructor(/* public bsModalRef:BsModalRef */) { }

  ngOnInit(): void {
  }

}
