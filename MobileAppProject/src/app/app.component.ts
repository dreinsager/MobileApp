import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TestPage } from '../pages/test/test';
import { CharacterPage } from '../pages/character/character';
import { AboutPage } from '../pages/about/about';
import { ChardescrPage } from '../pages/chardescr/chardescr';
import { RacedescrPage } from '../pages/racedescr/racedescr';
import { NotesPage } from '../pages/notes/notes';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';








@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:"home" },
      { title: 'Dice Roll', component: TestPage, icon:"md-cog" },
      { title: 'Character', component: CharacterPage , icon:"md-body"},
      { title: 'Character Description', component: ChardescrPage, icon: "information-circle" },
      { title: 'Race Description', component: RacedescrPage, icon: "information-circle" },
      { title: 'Notes', component: NotesPage, icon: "md-albums" },
      { title: 'About', component: AboutPage, icon: "information-circle" }





    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
