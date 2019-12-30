import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ServiceProvider: AuthServiceProvider) {



  }


  ionViewDidLoad(): void {

    this.empresa = localStorage.getItem('id_empresa');
    console.log('id_empresa: ', this.empresa);

    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.ServiceProvider.getData()
        .subscribe(data => {

          this.rows = data[3]['productos'].filter(item => item.id_empresa === this.empresa);
          loader.dismiss();

        }, err => {
          console.log(err);
          loader.dismiss();

        });
    });


  }



  edit(itemAdmin) {

    this.navCtrl.push(EditPage, itemAdmin)

    //envia identificador del cliente para editar el producto. 
    let admin = JSON.stringify(itemAdmin);
    localStorage.setItem('itemAdmin', admin);
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


            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {
              this.ServiceProvider.deleteProducts(value).subscribe((response) => {
                console.log(response);
                loader.dismiss()


                let alert = this.alertCtrl.create({

                  title: "HECHO",
                  subTitle: ("Dato eliminados exitosamente"),
                  buttons: ['OK']
                });

                alert.present()
                this.navCtrl.push(AdminProductosPage);

              }, (err) => {
                console.log(err);
                loader.dismiss()

                let alert = this.alertCtrl.create({

                  title: "ERROR",
                  subTitle: ("No se eliminó el producto"),
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
