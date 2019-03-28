import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home'
import { ImageProvider } from '../../providers/image/image';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  // guarda la imagen el archivo en base64

  public newImage: string;

  // Se usa para activar / desactivar elementos DOM dependiendo de si se ha seleccionado una imagen

  public isSelected: boolean = false;

  //Almacena la imagen seleccionada Tipo 

  private _SUFFIX: string;


  name: any;
  image: any;
  price: any;
  description: any;
  oldNameValue: any;
  oldImageValue: any;
  oldPriceValue: any;
  oldDescriptionValue: any;
  oldDate: any;
  items: any;

  @ViewChild("newName") newName;
  @ViewChild("newPrice") newPrice;
  @ViewChild("newDescription") newDescription;
  namefile: any;
  empresa: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private http: Http, public loading: LoadingController, private _IMAGES: ImageProvider
  ) {
  }

  ngOnInit() {

    this.name = this.navParams.get('nombre_pro');
    this.image = this.navParams.get('imagen_pro');
    this.price = this.navParams.get('precioNuevo_pro');
    this.description = this.navParams.get('desripcion_pro');

    this.oldNameValue = this.navParams.get('nombre_pro');
    this.oldImageValue = this.navParams.get('imagen_pro');
    this.oldPriceValue = this.navParams.get('precioNuevo_pro');
    this.oldDescriptionValue = this.navParams.get('desripcion_pro');
    this.oldDate = this.navParams.get('fecha_registro_pro');
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
          this.newImage = res;
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



  Edit() {

    if (this.newName.value == "") {

      let alert = this.alertCtrl.create({
        title: "ATENCIÓN",
        subTitle: "El campo de nombre está vacío",
        buttons: ['OK']

      });

      alert.present();

    } else

      if (this.newPrice.value == "") {

        let alert = this.alertCtrl.create({
          title: "ATENCIÓN",
          subTitle: "El campo de precio está vacío",
          buttons: ['OK']

        });

        alert.present();

      }

      else

        if (this.newDescription.value == "") {

          let alert = this.alertCtrl.create({
            title: "ATENCIÓN",
            subTitle: "El campo de descripción está vacío",
            buttons: ['OK']

          });

          alert.present();

        }

        else {

          var headers = new Headers();
          headers.append("Accept", 'application/json');
          headers.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: headers });


          let data = {
            name: this.oldNameValue,
            price: this.oldPriceValue,
            image: this.oldImageValue,
            description: this.oldDescriptionValue,
            date: this.oldDate,
            empresa: this.empresa,

            newName: this.newName.value,
            newPrice: this.newPrice.value,
            newDescription: this.newDescription.value,
            newImage: this.newImage,
            namefile: this.namefile,
          };

          console.log(data);

          let loader = this.loading.create({
            content: 'Procesando por favor espera...',
          });

          loader.present().then(() => {
            this.http.post('http://localhost/ionic-php-mysql/edit_data.php', data, options)
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
                  this.navCtrl.push(HomePage);
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
  displayAlert(message: string): void {
    let alert: any = this.alertCtrl.create({
      title: 'Aviso!',
      subTitle: message,
      buttons: ['Got it']
    });
    alert.present();
  }

}
