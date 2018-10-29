import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Character } from '../../app/models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HomePage } from '../home/home';

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

  
  constructor(private actionSheetCtrl: ActionSheetController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.characterRef$ = this.database.list('character-list');
  }

  // selectCharacter(character: Character){
  //   this.actionSheetCtrl.create({
  //     title: `${character.charName}`,
  //     buttons: [
  //       {
  //         text: 'Delete',
  //         role: 'desctructive',
  //         handler: () => {
  //         this.characterRef$.remove(character.$key)
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log("The user selected the cancel button");
  //         }
  //       }          
  //     ]
  //   }).present();
  // }

  onSubmit(character: Character) {
    //Pushes list of characters to firebase database
     this.characterRef$.push(this.character);
    //resets character
    this.character = {} as Character;
    //redirect user to character page
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterPage');
  }

}
