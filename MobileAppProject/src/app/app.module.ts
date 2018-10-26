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

import { AngularFireModule } from "angularfire2";






import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AboutPageModule } from '../pages/about/about.module';
import { CharacterPageModule } from '../pages/character/character.module';
import { ChardescrPageModule } from '../pages/chardescr/chardescr.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { TestPageModule } from '../pages/test/test.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // TestPage,
    // CharacterPage,
    // AboutPage,
    // ChardescrPage,
    // RacedescrPage,
    // LoginPage,
    // RegisterPage,
    // NotesPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AboutPageModule,
    CharacterPageModule,
    ChardescrPageModule,
    LoginPageModule,
    RegisterPageModule,
    TestPageModule,

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
