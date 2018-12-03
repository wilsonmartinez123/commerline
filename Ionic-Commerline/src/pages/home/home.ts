import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { AgregarProductoPage } from '../agregar-producto/agregar-producto';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  posts: any;
  items: any;
  name: any;
  image_name: any;
  price: any;
  description: any;
  p: number = 1;

  constructor(public navCtrl: NavController, private http: Http, public loading: LoadingController, public navParams: NavParams,
    public alertCtrl: AlertController) {

    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.http.get('http://localhost/ionic-php-mysql/retrieve-data.php').map(res => res.json()).subscribe(
        data => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          this.posts = data.productos;
          this.initializeItems();
          loader.dismiss()

        },
        error => {
          console.log("Oops!", error);
        }

      );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewProductsPage');
  }

  Post() {
    this.navCtrl.push(AgregarProductoPage)
  }

  editPost(item) {
    this.navCtrl.push(EditPage, item)

  }

  initializeItems() {
    this.items = this.posts;
    this.p = 1;
  }

  getItems(ev: any) {
    // Restablecer artículos de nuevo a todos los artículos
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // si el valor es una cadena vacía no filtre los elementos
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  deletePost(item) {

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
              this.http.post('http://localhost/ionic-php-mysql/delete_data.php', item, options)
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
                    this.navCtrl.push(HomePage);
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
