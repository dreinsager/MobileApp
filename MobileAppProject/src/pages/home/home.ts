import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { CharacterPage } from '../character/character';
import { ChardescrPage } from '../chardescr/chardescr';
import { RacedescrPage } from '../racedescr/racedescr';
import { NotesPage } from '../notes/notes';
import { AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Character } from '../../app/models/user';
import { Notes } from '../../app/models/user';







@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characterRef$: AngularFireList<Character[]>
  notesRef$: AngularFireList<Notes[]>
  characterAsync;
  notesAsync;


  constructor(private actionSheetCtrl: ActionSheetController,public navCtrl: NavController, public alertCtrl: AlertController, private database: AngularFireDatabase) {

    this.characterRef$ = this.database.list('character-list');
    this.characterAsync = this.characterRef$.snapshotChanges();
    
    this.notesRef$ = this.database.list('notes-list');
    this.notesAsync = this.notesRef$.snapshotChanges();


  }



  selectCharacter(character: Character){
    this.actionSheetCtrl.create({
      title: `${character.charName}`,
      buttons: [
        {
          text: 'Delete',
          role: 'desctructive',
          handler: () => {
          this.characterRef$.remove(character.$key)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user selected the cancel button");
          }
        }          
      ]
    }).present();
  }

  selectNotes(notes: Notes){
    this.actionSheetCtrl.create({
      title: `${notes.title}`,
      buttons: [
        {
          text: 'Delete',
          role: 'desctructive',
          handler: () => {
          this.notesRef$.remove(notes.$key)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("The user selected the cancel button");
          }
        }          
      ]
    }).present();
  }


  toDiceRoll(){
    this.navCtrl.push(TestPage);
  }

  toCharPage(){
    this.navCtrl.push(CharacterPage);
  }

  toCharDesc(){
    this.navCtrl.push(ChardescrPage);
  }
  
  toRace(){
    this.navCtrl.push(RacedescrPage);
  }

  toNotes(){
    this.navCtrl.push(NotesPage);
  }



}
