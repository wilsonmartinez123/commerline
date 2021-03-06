import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { Http, RequestOptions, Headers } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginPage } from '../login/login';


export interface register {
    RegisterOption: {

    }
}

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})


export class SignupPage {

    value: number;
    membership: string;
    authForm: FormGroup;

    @ViewChild("option") option;
    @ViewChild("email") email;
    @ViewChild("username") username;
    @ViewChild("mobile") mobile;
    @ViewChild("password") password;
    @ViewChild("passwordRetyped") passwordRetyped;
    @ViewChild("identificacion") identificacion;
    @ViewChild("matricula") matricula;
    //@ViewChild("terms") terms;


    submitted = false;
    constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: Http, public loading: LoadingController,
        //public afAuth: AngularFireAuth
    ) {


    }



    onChange() {

        if (this.membership == '1') {
            this.value = 0;


        } else if (this.membership == '2') {
            this.value = 1;

        }
    }


    ngOnInit() {

        this.buildForm();
        this.setUserValidators();
    }

    buildForm() {

        let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

        this.authForm = new FormGroup({
            username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(20)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
            //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
            email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
            passwordRetyped: new FormControl('', [Validators.required]),
            mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
            terms: new FormControl(false, [Validators.pattern('true')]),
            //terms: [false, Validators.pattern('true')]
            option: new FormControl('', [Validators.required]),
            identificacion: new FormControl('', [Validators.required]),
            matricula: new FormControl('', [Validators.required]),
        });
    }

    setUserValidators() {
        const identificacionControl = this.authForm.get('identificacion');
        const matriculaControl = this.authForm.get('matricula');

        this.authForm.get('option').valueChanges
            .subscribe(userOption => {

                if (userOption === '1') {
                    //institutionControl.setValidators([Validators.required]);
                    identificacionControl.setValue('');
                    matriculaControl.setValue('');
                    identificacionControl.setValidators(null);
                    matriculaControl.setValidators(null);
                }

                if (userOption === '2') {
                    identificacionControl.setValidators([Validators.required]);
                    matriculaControl.setValidators([Validators.required]);
                }

                identificacionControl.updateValueAndValidity();
                matriculaControl.updateValueAndValidity();
                //salaryControl.updateValueAndValidity();
            });
    }





    Register() {

        this.submitted = true;

        if (this.password.value !== this.passwordRetyped.value) {
            let alert = this.alertCtrl.create({
                title: 'Error',
                message: 'Las contraseñas no coinciden.',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        else {


            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = new RequestOptions({ headers: headers });


            let data = {
                option: this.option.value,
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value,
                identificacion: this.identificacion.value,
                matricula: this.matricula.value
            };


            let loader = this.loading.create({
                content: 'Procesando por favor espere...',
            });

            loader.present().then(() => {
                this.http.post('http://localhost/ionic-php-mysql/register.php', data, options)
                    .map(res => res.json())
                    .subscribe(res => {

                        loader.dismiss()

                        if (res == "Registro exitoso") {

                            //valores nulos formulario
                            this.authForm.reset();

                            /*this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
                              .then(() => {
              
                                let user = firebase.auth().currentUser.reload();
                                //user.sendEmailVerification();
                                // this.navCtrl.setRoot('LoginPage');*/


                            let alert = this.alertCtrl.create({
                                title: "Felicitaciones",
                                subTitle: (res),
                                buttons: ['OK']
                            });

                            alert.present();
                            this.navCtrl.push(LoginPage);
                            // })

                            /*.catch(err => {
                              // Handle error
                              let alert = this.alertCtrl.create({
                                title: 'Error',
                                message: err.message,
                                buttons: ['OK']
                              });
                              alert.present();
                            });
                            */

                        } else {
                            let alert = this.alertCtrl.create({
                                title: "ERROR",
                                subTitle: (res),
                                buttons: ['OK']
                            });

                            alert.present();
                        }
                    });
            });
        }

    }

}     