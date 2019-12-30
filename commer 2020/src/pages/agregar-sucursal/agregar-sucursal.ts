import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Keyboard } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestOptions, Http, Headers } from '@angular/http';
import { AccountPage } from '../account/account';
import { ChangeDetectorRef } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-agregar-sucursal',
  templateUrl: 'agregar-sucursal.html',

})
export class AgregarSucursalPage {



  public form: FormGroup;


  @ViewChild("state") state;
  @ViewChild("direction") direction;
  @ViewChild("country") country;

  locate: any = null;
  myIndex: any;
  locates: any;

  ubicacion: any;
  selectedMunicipality: any;
  value: string;
  id_cliente: any;




  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public http: Http,
    public loading: LoadingController, public alertCtrl: AlertController, public keyboard: Keyboard, public cdr: ChangeDetectorRef) {



    this.form = fb.group({

      direction: ["", [Validators.required]],
      country: ['', Validators.required],
      state: ['', Validators.required],

    });


    this.http.get('http://www.commerapp.com/ionic-php-mysql/colombia.php?c=colombia').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.ubicacion = data.colombia;
        //this.posts = data.colombia.filter(item => item.departamento === this.locates);


      },
      error => {
        console.log("Oops!", error);
      }

    );



  }


  ngOnInit() {

    this.id_cliente = this.navParams.get('id_cliente');
    // this.selectedMunicipality = this.ubicacion.filter(item => item.departamento === this.locate)

  }


  CountryChange(value: string) {


    this.selectedMunicipality = this.ubicacion.filter(item => item.departamento === value);
  }


  /**
   *  Recive los datos enviados del formulario
   */
  //manage(val: any) {
  manage() {

    /*
    let data = { form: this.form.value, cliente: this.id_cliente };
    let resources = JSON.stringify(data);

    var myJson = JSON.stringify([this.form.value]);
    JSON.stringify(JSON.parse(myJson).push('this.id_cliente'));
*/



    //let resources = JSON.stringify(data);
    //console.log(resources);

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    let options = new RequestOptions({ headers: headers });

    let data = {

      direction: this.direction.value,
      country: this.country.value,
      state: this.state.value,


    };

    let loader = this.loading.create({

      content: 'Procesando por favor espere…',

    });

    loader.present().then(() => {

      this.http.post('http://www.commerapp.com/ionic-php-mysql/registrar_sucursal.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss()

          if (res == "registro exitoso") {

            let alert = this.alertCtrl.create({

              title: "HECHO",
              subTitle: (res),
              buttons: ['OK']

            });

            alert.present();
            this.navCtrl.push(AccountPage);
          }

          else {

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

