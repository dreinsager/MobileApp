import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { CharacterPage } from '../character/character';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  toDiceRoll(){
    this.navCtrl.push(TestPage);
  }

  toCharPage(){
    this.navCtrl.push(CharacterPage);
  }

}
