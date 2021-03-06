import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalAddSubjectPage } from '../pages/modal-add-subject/modal-add-subject';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ApiRestProvider } from '../providers/api-rest/api-rest';

import { HttpModule } from '@angular/http';

export const firebaseConfig = {
  apiKey: "AIzaSyB9520DFI9G5f5VmMV7v-w8M3GmPs6vK18",
    authDomain: "mujiklassrooms.firebaseapp.com",
    databaseURL: "https://mujiklassrooms.firebaseio.com",
    projectId: "mujiklassrooms",
    storageBucket: "mujiklassrooms.appspot.com",
    messagingSenderId: "740989590866"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalAddSubjectPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalAddSubjectPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRestProvider
  ]
})
export class AppModule {}
