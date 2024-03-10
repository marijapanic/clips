import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    TabsContainerComponent,
    TabComponent
  ],
  exports: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent
  ]
})
export class SharedModule { }
