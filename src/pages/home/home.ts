import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ModalAddSubjectPage } from '../modal-add-subject/modal-add-subject';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subjects: FirebaseListObservable<any[]>;
  prueba: string = "hola";

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, db: AngularFireDatabase) {
    this.subjects = db.list('/subject');
  }

  openModal() {
    console.log("adding subject");
    let modal = this.modalCtrl.create(ModalAddSubjectPage);
    modal.present();
  }

  subjectDetails(subject){
    console.log(subject.name);
  }

}
