import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  onSubmit() {
    const alert = this.alertCtrl.create({
      subTitle: 'This will end information to database and add to the character page',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

}
