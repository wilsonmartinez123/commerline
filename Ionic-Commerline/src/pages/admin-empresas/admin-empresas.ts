import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { VerEmpresaEditPage } from '../ver-empresa-edit/ver-empresa-edit';
import { Http, RequestOptions, Headers } from '@angular/http';
import { AdminPage } from '../admin/admin';
import { AdminProductosPage } from '../admin-productos/admin-productos';


export interface Config {
  empresa: string;
}

@IonicPage()
@Component({
  selector: 'page-admin-empresas',
  templateUrl: 'admin-empresas.html',
})
export class AdminEmpresasPage {
  //Defines an object allowing the interface properties to be accessed
  public config: Config;


  //Defines an object for storing the column definitions of the datatable

  public columns: any;

  //Defines an object for storing returned data to be displayed in the template

  public rows: any;




  users: any;
  //empresa: any;
  cliente: any;

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams, private http: Http,
    public alertCtrl: AlertController) {



  }

  ionViewDidLoad(): void {

    let loader = this.loading.create({
      content: 'Listando Empresas…',
    });

    loader.present().then(() => {
      this.http
        .get('http://localhost/ionic-php-mysql/obtener_empresas.php').map(res => res.json())
        .subscribe((data) => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          this.rows = data.empresa;

          loader.dismiss();
        });

    });

  }

  view(id_empresa) {
    localStorage.setItem('id_empresa', id_empresa);
    this.navCtrl.push(AdminProductosPage);

  }

  edit(item) {
    this.navCtrl.push(VerEmpresaEditPage, item)

  }


  delete(value) {

    let alert = this.alertCtrl.create({

      title: 'Confirmar eliminación',
      subTitle: 'Estas seguro de eliminar esta empresa?',
      message: 'Ten en cuenta que si eliminas la empresa, los productos tambien se eliminaran',
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
              this.http.post('http://localhost/ionic-php-mysql/Empresario/delete_empresa.php', value, options)
                .map(res => res.json())
                .subscribe(res => {

                  loader.dismiss()

                  if (res == "empresa eliminada exitosamente") {

                    let alert = this.alertCtrl.create({

                      title: "HECHO",
                      subTitle: (res),
                      buttons: ['OK']
                    });

                    alert.present()
                    this.navCtrl.push(AdminPage);
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
