import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Select, Keyboard } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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


  @ViewChild("state") state: Select;
  //@ViewChild("select") select;

  locate: any = null;
  myIndex: any;
  locates: any;



  ubicacion: any;
  selectedMunicipality: any;
  posts: any;
  value: string;





  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, public http: Http,
    public loading: LoadingController, public alertCtrl: AlertController, public keyboard: Keyboard, public cdr: ChangeDetectorRef) {


    this.form = fb.group({

      sucursales: this.fb.array([
        this.initSucursalFields()
      ])



    });


    this.http.get('http://localhost/ionic-php-mysql/colombia.json').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.ubicacion = data.colombia;
        //this.posts = data.colombia.filter(item => item.departamento === "Huila");

        console.log("hijueputa ome", this.locate)

      },
      error => {
        console.log("Oops!", error);
      }

    );



  }




  //genera un FormGroup objeto con campos de entrada con validacion para sucursales 
  initSucursalFields(): FormGroup {
    return this.fb.group({
      direction: ["", [Validators.required]],
      departamento: ['', Validators.required],
      municipio: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],



    });
  }

  /**
   * Genera un nuevo campo de entrada para agregar otra sucursal
 */
  addNewInputField(): void {
    const control = <FormArray>this.form.controls.sucursales;
    control.push(this.initSucursalFields());
    //this.form.reset();

  }


  /**
   * elimina una sucursal ingresada antes de dar click en el boton registrar
   */
  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.sucursales;
    control.removeAt(i);
  }


  CountryChange(value: string) {
    console.log(this.locate);
    //console.log(this.country.value);
    console.log(value);


    this.locate = null;

    if (value == "") {
      return;
    }
    /* for (var i = 0; i < this.ubicacion.length; i++) {
 
     }*/


    this.selectedMunicipality = this.ubicacion.filter(item => {
      return item.departamento === value;
    });

    this.cdr.detectChanges();

    //this.selectedMunicipality = this.ubicacion.filter(item => item.departamento === value)


  }

  CountryChange2() {
    this.locates = null;
  }


  uppercase(value: string) {
    this.value = value.toUpperCase();

  }


  /**
   *  Recive los datos enviados del formulario
   */
  //manage(val: any) {
  manage() {


    let resources = JSON.stringify(this.form.value);
    //console.log(resources);

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json;charset=UTF-8');
    let options = new RequestOptions({ headers: headers });


    console.log(resources);

    let loader = this.loading.create({

      content: 'Procesando por favor espere…',

    });

    loader.present().then(() => {

      this.http.post('http://localhost/ionic-php-mysql/registrar_sucursal.php', resources, options)
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

