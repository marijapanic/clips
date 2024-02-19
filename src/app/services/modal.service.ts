import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {
  private visible = false;

  constructor()
  {

  }

  isModalOpen()
  {
    return this.visible;
  }

  toggleModal()
  {
    this.visible = !this.visible;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
