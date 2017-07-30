import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ModalAddSubjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-add-subject',
  templateUrl: 'modal-add-subject.html',
})
export class ModalAddSubjectPage {

  name: string;
  description: string;
  messaje: string;

  subjects: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController, db: AngularFireDatabase) {
    this.subjects = db.list('/subject');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAddSubjectPage');
  }

  addSubject(){
    if(this.name != undefined){
      this.subjects.push({
        name: this.name,
        description: this.description
      }).then( newBill => { 
        this.navCtrl.pop(); 
      }, error => { 
        console.log(error); 
      });
    } else {
      this.messaje = "The name of subject is requred."
    }
  }

  close(){
    this.viewCtrl.dismiss();
  }
}
