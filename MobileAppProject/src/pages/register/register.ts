import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../app/models/user";

import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;


  constructor(private ofauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

async registerPage(user: User) {
try {
  const result = await this.ofauth.auth.createUserWithEmailAndPassword(user.email, user.password);
  this.navCtrl.setRoot(LoginPage);
}
  catch (e) {
    const alert =(e)
  }
  
  }
}
