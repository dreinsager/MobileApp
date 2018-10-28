import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Character } from '../../app/models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

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

  character = {} as Character

  characterRef$: AngularFireList<Character>

  
  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.characterRef$ = this.database.list('character-list');
  }

  onSubmit(character: Character) {
    //Pushes list of characters to firebase database
     this.characterRef$.push(this.character);
    //resets character
    this.character = {} as Character;
    //redirect user to character page
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

}
