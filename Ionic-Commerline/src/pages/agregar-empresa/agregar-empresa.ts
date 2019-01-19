import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';

/**
 * Generated class for the AgregarEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar-empresa',
  templateUrl: 'agregar-empresa.html',
})
export class AgregarEmpresaPage {

  private _SUFFIX: string;
  public image: string;
  public isSelected: boolean = false;

  value: number;
  membership: string;

  form: FormGroup;
  countries = ['Huila', 'Amazonas', 'Antioquia'];
  statesByCountry = {
    Huila: ['Neiva', 'Acevedo', 'Aipe', 'Algeciras', 'Altamira', ' Baraya', 'Campoalegre', 'Colombia', 'EL Agrado', 'El Pital',
      'Elías', ' Garzón', ' Gigante', ' Guadalupe', ' Hobo', ' Iquira', ' Isnos', ' La Argentina', ' La Plata', 'Nátaga', 'Oporapa', ' Paicol',
      ' Palermo', ' Palestina', ' Pitalito', ' Rivera', ' Saladoblanco', 'San Agustín', ' Santa María', ' Suaza', ' Tarqui', 'Tello', 'Teruel', 'Tesalia', 'Timaná',
      'Villavieja', 'Yaguará'
    ],
    Amazonas: ['AzerA', 'AzerB', 'AzerC'],
    Antioquia: ['AlbaA', 'AlbaB', 'AlbaC'],
  };
  states = [];



  constructor(public navCtrl: NavController, public navParams: NavParams, fb: FormBuilder,
    private _cdr: ChangeDetectorRef, private _IMAGES: ImageProvider, public alertCtrl: AlertController) {
    this.form = fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      option: ["", Validators.required],
      name: ["", Validators.required],
      direction: ["", Validators.required],
      phone: ["", Validators.required],
    });
  }

  onCountryChange(): void {
    let country = this.form.get('country').value;
    this.states = this.statesByCountry[country];
    this._cdr.detectChanges();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarEmpresaPage');
  }

  selectFileToUpload(event: any): void {
    this._IMAGES
      .handleImageSelection(event)
      .subscribe((res) => {

        // Retrieve the file type from the base64 data URI string
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];


        // Do we have correct file type?
        if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

          // Hide the file input field, display the image in the component template
          // and display an upload button
          this.isSelected = true
          this.image = res;
        }

        // If we don't alert the user
        else {
          this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
        }
      },
        (error) => {
          console.dir(error);
          this.displayAlert(error.message);
        });
  }

  displayAlert(message: string): void {
    let alert: any = this.alertCtrl.create({
      title: 'Heads up!',
      subTitle: message,
      buttons: ['Got it']
    });
    alert.present();
  }

  onChange() {
    if (this.membership == '1') {
      this.value = 0;
    } else if (this.membership == '2') {
      this.value = 1;
    }
  }

}
