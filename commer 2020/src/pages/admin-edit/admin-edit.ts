import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminPage } from '../admin/admin';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';



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
    public postServiceProvider: AuthServiceProvider, public ServiceProvider: AuthServiceProvider
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


      this.ServiceProvider.updateAdminData(data).subscribe((response) => {
        console.log(response);
        loader.dismiss();

        if (response == "Actualización de datos exitosa") {


          let alert = this.alertCtrl.create({
            title: "HECHO",
            subTitle: (response),
            buttons: ['ok']
          });

          alert.present();
          this.navCtrl.push(AdminPage);
        }
      },

        (err) => {
          console.log(err);
          loader.dismiss();

          let alert = this.alertCtrl.create({
            title: "ERROR",
            subTitle: ("No se pudo actualizar los datos"),
            buttons: ['ok']
          });

          alert.present();
        });


    });


  }

}




