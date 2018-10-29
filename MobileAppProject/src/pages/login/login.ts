import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { User } from '../../app/models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private ofAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }



  async Login(user: User){
    try{
    const result = await this.ofAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    // console.log(result);
    if(result){
      this.navCtrl.setRoot(HomePage);
    }

  }
  catch(e){
    const alert = this.alertCtrl.create({
      title: "Invalid Credentials",
      buttons:['OK']
    });
    alert.present();
  }
  }

    toRegister(){
    this.navCtrl.push(RegisterPage);
  }

  forgotPass() {
    const alert = this.alertCtrl.create({
      title: 'Sorry',
      subTitle: 'This will take you to a forgotten password page which i was unable to get implemented at this time.',
      buttons:['OK']
    });
    alert.present();
  }
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
