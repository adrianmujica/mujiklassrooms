import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import {ApiRestProvider} from '../../providers/api-rest/api-rest';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { HttpModule } from '@angular/http';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { ModalAddSubjectPage } from '../modal-add-subject/modal-add-subject';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  subjects: Observable<any[]>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, 
    public apiRest: ApiRestProvider) {
    this.obtainSubjects();
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalAddSubjectPage);
    modal.present();
    modal.onDidDismiss( res => {
          this.obtainSubjects();
      }
    )
  }

  subjectDetails(subject) {
    console.log(subject.name);
  }

  obtainSubjects(){
    this.subjects = this.apiRest.getSubjects();
  }

}
