import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalAddSubjectPage } from './modal-add-subject';

@NgModule({
  declarations: [
    ModalAddSubjectPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAddSubjectPage),
  ],
})
export class ModalAddSubjectPageModule {}
