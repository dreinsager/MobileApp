import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPage } from '../test/test';
import { CharacterPage } from '../character/character';
import { ChardescrPage } from '../chardescr/chardescr';
import { RacedescrPage } from '../racedescr/racedescr';
import { NotesPage } from '../notes/notes';
import { AlertController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Character } from '../../app/models/user';
import { Observable } from 'rxjs/Observable';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characterRef$: Observable<any[]>

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private database: AngularFireDatabase) {

    this.characterRef$ = this.database.list('character-list').valueChanges();
    


  }

  onSubmit() {
    const alert = this.alertCtrl.create({
      subTitle: 'After login cridentials are correct you will be able to continue your work',
      buttons: ['OK']
    });
    alert.present();
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
