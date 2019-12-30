import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, NavController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-user',
  templateUrl: 'support.html'
})
export class SupportPage {

  submitted: boolean = false;
  supportMessage: string;
  usernames:string;
  emails:string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {

  }

  ionViewDidEnter() {
    let toast = this.toastCtrl.create({
     // message: 'This does not actually send a support request.',
      duration: 3000
    });
    toast.present();
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = '';
      this.usernames='';
      this.emails='';
      this.submitted = false;

      let toast = this.toastCtrl.create({
        message: 'Tu mensaje ha sido enviado.',
        duration: 3000
      });
      toast.present();
    }
  }

  // If the user enters text in the support question and then navigates
  // without submitting first, ask if they meant to leave the page
  ionViewCanLeave(): boolean | Promise<boolean> {
    // If the support message is empty we should just navigate
    if (!this.supportMessage || this.supportMessage.trim().length === 0) {
      return true;
    }

    return new Promise((resolve: any, reject: any) => {
      let alert = this.alertCtrl.create({
        title: 'Salir de esta página?',
        message: 'Estas seguro de dejar esta página? tu mensaje no sera enviado.'
      });
      alert.addButton({ text: 'Permanecer', handler: reject });
      alert.addButton({ text: 'Salir', role: 'cancel', handler: resolve });

      alert.present();
    });
  }
}
