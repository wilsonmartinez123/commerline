import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { VerEmpresaEditPage } from '../ver-empresa-edit/ver-empresa-edit';
import { AdminPage } from '../admin/admin';
import { AdminProductosPage } from '../admin-productos/admin-productos';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


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

  constructor(public loading: LoadingController, public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, public ServiceProvider: AuthServiceProvider) {



  }

  ionViewDidLoad(): void {

    let loader = this.loading.create({
      content: 'Listando Empresas…',
    });

    loader.present().then(() => {

      this.ServiceProvider.getData()
        .subscribe(data => {
          this.rows = data[0]['empresa'];
          loader.dismiss();

        }, err => {
          console.log(err);
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

    //envia identificador del cliente para editar el producto. 
    let admin = JSON.stringify(item.id_cliente);
    localStorage.setItem('itemAdmin', admin);

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



            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {



              this.ServiceProvider.deleteBusiness(value).subscribe((response) => {
                console.log(response);
                loader.dismiss();

                if (response == "Empresa eliminada exitosamente") {

                  let alert = this.alertCtrl.create({

                    title: "HECHO",
                    subTitle: (response),
                    buttons: ['OK']
                  });

                  alert.present()
                  this.navCtrl.push(AdminPage);
                }
              },

                (err) => {
                  console.log(err);
                  loader.dismiss()

                  let alert = this.alertCtrl.create({

                    title: "ERROR",
                    subTitle: ("No se pudo eliminar la empresa"),
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
