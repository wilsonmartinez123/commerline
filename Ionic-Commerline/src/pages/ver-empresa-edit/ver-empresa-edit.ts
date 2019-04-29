import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { RequestOptions, Headers, Http } from '@angular/http';
import { AccountPage } from '../account/account';



@IonicPage()
@Component({
  selector: 'page-ver-empresa-edit',
  templateUrl: 'ver-empresa-edit.html',
})
export class VerEmpresaEditPage {

  @ViewChild("name") name;
  @ViewChild("direction") direction;
  @ViewChild("Horario") Horario;
  @ViewChild("mobile") mobile;

  private _SUFFIX: string;

  form: FormGroup;
  nombre: any;
  direccionEmpresa: any;
  departamento: any;
  municipio: any;
  horarioAtencion: any;
  telefono: any;

  isSelected: boolean = false;
  image: any;
  namefile: any;
  item: any;
  logo: any;
  empresa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _IMAGES: ImageProvider, public alertCtrl: AlertController,
    public loading: LoadingController, private http: Http) {


    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      direction: new FormControl('', [Validators.required]),
      Horario: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]),


    });

  }

  ngOnInit() {

    this.item = this.navParams.get('item');
    this.nombre = this.navParams.get('nombre_emp');
    this.direccionEmpresa = this.navParams.get('direccion_emp');
    //this.departamento = this.navParams.get('telefono_cli');
    //this.municipio = this.navParams.get('telefono_cli');
    this.horarioAtencion = this.navParams.get('horario_emp');
    this.telefono = this.navParams.get('telefono_emp');
    this.logo = this.navParams.get('logo_emp');
    this.empresa = this.navParams.get('id_empresa');


  }


  selectFileToUpload(event: any): void {
    this._IMAGES
      .handleImageSelection(event)
      .subscribe((res) => {

        // Retrieve the file type from the base64 data URI string
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];


        // Do we have correct file type?
        if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

          this.namefile = event.target.files[0].name;

          // Oculte el campo de entrada del archivo, muestre la imagen en la plantilla del componente
          // y mostrar un botón de carga
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

  onSubmit() {

    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {
      empresa: this.empresa,
     

      newName: this.name.value,
      newDirection: this.direction.value,
      newHorario: this.Horario.value,
      newPhone: this.mobile.value,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Empresario/edit_empresa.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss();
          if (res == "actualización de empresa exitosa") {
            let alert = this.alertCtrl.create({
              title: "HECHO",
              subTitle: (res),
              buttons: ['ok']
            });

            alert.present();
            this.navCtrl.push(AccountPage);
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



  displayAlert(message: string): void {
    let alert: any = this.alertCtrl.create({
      title: 'Heads up!',
      subTitle: message,
      buttons: ['Got it']
    });
    alert.present();
  }

}
