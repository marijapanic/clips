import { Component, Input, OnInit, input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent implements OnInit {
  @Input() modalID= "";
  constructor(public modal: ModalService)
  {

  }
  ngOnInit(): void {
    
  }

  closeModal($event: MouseEvent) {
    $event.preventDefault();
    this.modal.toggleModal(this.modalID);
  }
}
