import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Http, RequestOptions, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';


export interface Config {
  usuarios: string;
}

@IonicPage()
@Component({
  selector: 'page-admin-clientes',
  templateUrl: 'admin-clientes.html',
})
export class AdminClientesPage {



  //Defines an object allowing the interface properties to be accessed
  public config: Config;


  //Defines an object for storing the column definitions of the datatable

  public columns: any;

  //Defines an object for storing returned data to be displayed in the template

  public rows: any;




  users: any;

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, private http: Http, private _HTTP: HttpClient,
    public alertCtrl: AlertController) {

    /*
        this.columns = [
          { name: 'Nombre', prop: 'nombre_cli' },
          { name: 'Identificación', prop: 'identificacion_cli' },
          { name: 'Matrícula Mercantil', prop: 'matricula_mercantil_cli' },
          { name: 'Correo', prop: 'correo_cli' },
          { name: 'Teléfono', prop: 'telefono_cli' },
    
        ];
    */


  }

  ionViewDidLoad(): void {

    let loader = this.loading.create({
      content: 'Listando Clientes…',
    });

    loader.present().then(() => {
      this._HTTP
        .get<Config>('http://localhost/ionic-php-mysql/Admin/obtener_usuarios_admin.php')
        .subscribe((data) => {
          this.rows = data.usuarios;
          loader.dismiss();
        });

    });


  }


  delete(value) {

    let alert = this.alertCtrl.create({

      title: 'Confirmar eliminación',
      message: 'Estas seguro de eliminar este cliente?',
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
              this.http.post('http://localhost/ionic-php-mysql/Admin/delete_clientes.php', value, options)
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
                    this.navCtrl.push(AdminClientesPage);
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