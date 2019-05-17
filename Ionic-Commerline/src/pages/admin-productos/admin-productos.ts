import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { EditPage } from '../edit/edit';


export interface Config {
  empresa: string;
}

@IonicPage()
@Component({
  selector: 'page-admin-productos',
  templateUrl: 'admin-productos.html',
})
export class AdminProductosPage {

  //Defines an object allowing the interface properties to be accessed
  public config: Config;


  //Defines an object for storing the column definitions of the datatable

  public columns: any;

  //Defines an object for storing returned data to be displayed in the template

  public rows: any;



  cliente: any;
  empresa: string;

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public alertCtrl: AlertController) {



  }

  ionViewDidLoad(): void {

    this.empresa = localStorage.getItem('id_empresa');

    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.http.get('http://localhost/ionic-php-mysql/obtener_productos.php').map(res => res.json()).subscribe(
        data => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');


          this.rows = data.productos.filter(item => item.id_empresa === this.empresa);
          loader.dismiss();

        },
        error => {
          console.log("Oops!", error);
        }

      );
    });


  }

  edit(item) {

    this.navCtrl.push(EditPage, item)

  }


  delete(value) {

    let alert = this.alertCtrl.create({

      title: 'Confirmar eliminación',
      message: 'Estas seguro de eliminar este producto?',
      buttons: [

        {

          text: 'Cancelar',
          role: 'Cancelar',

          handler: () => {

            console.log('Cancelar seleccionado');

          }

        },

        {

          text: 'Eliminar',

          handler: () => {

            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = new RequestOptions({ headers: headers });


            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {
              this.http.post('http://localhost/ionic-php-mysql/delete_data.php', value, options)
                .map(res => res.json())
                .subscribe(res => {

                  loader.dismiss()

                  if (res == "datos eliminados exitosamente") {

                    let alert = this.alertCtrl.create({

                      title: "HECHO",
                      subTitle: (res),
                      buttons: ['OK']
                    });

                    alert.present()
                    this.navCtrl.push(AdminProductosPage);
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

      ]

    });

    alert.present();

  }
}
