import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RequestOptions, Headers, Http } from '@angular/http';
import { AdminPage } from '../admin/admin';



@IonicPage()
@Component({
  selector: 'page-admin-edit',
  templateUrl: 'admin-edit.html',
})
export class AdminEditPage {



  @ViewChild("username") username;
  @ViewChild("email") email;

  authForm: FormGroup;


  submitted = false;
  name: any;
  emails: any;
  admin: any;

  cliente: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loading: LoadingController,
    private http: Http,
  ) {


    let EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),


    });

  }

  ngOnInit() {

    this.name = this.navParams.get('nombre_admin');
    this.emails = this.navParams.get('correo_admin');
    this.admin = this.navParams.get('id_administrador');


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminEditPage');
  }

  Update() {




    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {
      admin: this.admin,

      newName: this.username.value,
      newEmail: this.email.value,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Admin/actualizar_datos_administrador.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss();
          if (res == "actualización de datos exitosa") {
            let alert = this.alertCtrl.create({
              title: "HECHO",
              subTitle: (res),
              buttons: ['ok']
            });

            alert.present();
            this.navCtrl.push(AdminPage);
          }
          else {
            let alert = this.alertCtrl.create({
              title: "ERROR",
              subTitle: (res),
              buttons: ['ok']
            });

            alert.present();
          }
        });
    });

  }

}




