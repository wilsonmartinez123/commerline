import { Component } from '@angular/core';
//import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
//declare var firebase:any;
//import firebase from 'firebase/app';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UserData } from '../../providers/user-data';
import { UserOptions } from '../../interfaces/user-options';

//import { TabsPage } from '../tabs-page/tabs-page';
//import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  responseData : any;
  signup: UserOptions = { username: '', email: '', password: '', passwordRetyped: '' };
  submitted = false;

  constructor(public navCtrl: NavController, public userData: UserData,
    public authService:AuthServiceProvider,
    private alertCtrl: AlertController,
    private navParams: NavParams,
    private afAuth: AngularFireAuth) {
    this.signup.email = this.navParams.get('email');
  }

  
 /* envioDato( req)
  {
      this.authService.dataRegister(req.value)
      .subscribe(
         data=> {
             this.showAlert(data.mensaje);
             //this.navCtrl.setRoot(IndexPage);
             console.log(data.mensaje)
         },
         err=>console.log(err)
      );
  }

  showAlert(men)
  {	
      let alert = this.alertCtrl.create({
          title: 'Informacion',
          subTitle: men,
          buttons :['OK']
      });
      alert.present();	
  }*/


    //onSignup(form: NgForm) {
      onSignup() {
    this.submitted = true;

    if (this.signup.password !== this.signup.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
    

 
    /*if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }*/

    this.afAuth.auth.createUserWithEmailAndPassword(this.signup.email, this.signup.password)
      .then(() => {
          // Could do something with the Auth-Response
          // let user = firebase.auth().currentUser;
          //user.sendEmailVerification();
          this.navCtrl.setRoot('LoginPage');
        })
      .catch(err => {
        // Handle error
        let alert = this.alertCtrl.create({
          title: 'Error',
          message: err.message,
          buttons: ['OK']
        });
        alert.present();
      });

      

  }
  signups(){
    this.authService.postData(this.signup,'signup').then((result) => {
     this.responseData = result;
     if(this.responseData.signup){
     console.log(this.responseData);
     localStorage.setItem('userData', JSON.stringify(this.responseData));
     //this.navCtrl.push(TabsPage);
     }
     else{ console.log("User already exists"); }
   }, () => {
      });

 }
 
}
