import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { CharacterPage } from '../pages/character/character';
import { AboutPage } from '../pages/about/about';
import { ChardescrPage } from '../pages/chardescr/chardescr';
import { RacedescrPage } from '../pages/racedescr/racedescr';
import { NotesPage } from '../pages/notes/notes';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


const firebaseAuth = {
  apiKey: "AIzaSyBRLLfIzzzzXa5Ag1N5Gi95sOw2qbjKq3w",
  authDomain: "mobileapp-ddee0.firebaseapp.com",
  databaseURL: "https://mobileapp-ddee0.firebaseio.com",
  projectId: "mobileapp-ddee0",
  storageBucket: "",
  messagingSenderId: "570238485983"
};




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    CharacterPage,
    AboutPage,
    ChardescrPage,
    RacedescrPage,
    LoginPage,
    RegisterPage,
    NotesPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    CharacterPage,
    AboutPage,
    ChardescrPage,
    RacedescrPage,
    LoginPage,
    RegisterPage,
    NotesPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
