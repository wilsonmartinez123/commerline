import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


export interface Config {
  clientes: string;
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

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ServiceProvider: AuthServiceProvider) {

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

      this.ServiceProvider.getData()
        .subscribe(data => {
          this.rows = data[2]['clientes'];
          loader.dismiss();

        }, err => {
          console.log(err);
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


            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {


              this.ServiceProvider.deleteCustomers(value).subscribe((response) => {
                console.log(response);
                loader.dismiss();

                loader.dismiss()

                if (response == "Datos eliminados exitosamente") {


                  let alert = this.alertCtrl.create({

                    title: "HECHO",
                    subTitle: (response),
                    buttons: ['OK']
                  });

                  alert.present()
                  this.navCtrl.push(AdminClientesPage);
                }

              },

                (err) => {
                  console.log(err);
                  loader.dismiss()

                  let alert = this.alertCtrl.create({

                    title: "ERROR",
                    subTitle: ("No se eliminó el cliente"),
                    buttons: ['OK']
                  });

                  alert.present();
                });

            });

          }

        }

      ]

    });

    alert.present();

  }
}