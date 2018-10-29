import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Notes } from '../../app/models/user';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { HomePage } from '../home/home';



/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {

  notes = {} as Notes

  notesRef$: AngularFireList<Notes>


  constructor(private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    this.notesRef$ = this.database.list('notes-list');

  }

  onSubmit() {
    //Pushes list of notes to firebase database
    this.notesRef$.push(this.notes);
    //resets notes
    this.notes = {} as Notes;
    //redirect user to notes page
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotesPage');
  }

}
