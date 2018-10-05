import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  randomNumber4;
  randomNumber6;
  randomNumber8;
  randomNumber10;
  randomNumber12;
  randomNumber20;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getD4(){
    this.randomNumber4 = Math.ceil(Math.random() * 4)
  }

  getD6(){
    this.randomNumber6 = Math.ceil(Math.random() * 6)
  }

  getD8(){
    this.randomNumber8 = Math.ceil(Math.random() * 8)
  }

  getD10(){
    this.randomNumber10 = Math.ceil(Math.random() * 10)
  }
  getD12(){
    this.randomNumber12 = Math.ceil(Math.random() * 12)
  }
  getD20(){
    this.randomNumber20 = Math.ceil(Math.random() * 20)
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

}
