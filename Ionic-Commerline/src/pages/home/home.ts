import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Component } from '@angular/core';
import { AgregarProductoPage } from '../agregar-producto/agregar-producto';
import { UserData } from '../../providers/user-data';
import { ParametroServiceProvider } from '../../providers/parametro-service/parametro-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  posts: any;
  items: any;
  name: any;
  image_name: any;
  price: any;
  description: any;
  p: number = 1;
  id_cliente: any;
  empresa: any;
  item: any;
  deleteSelected: any;

  checked = [];
  showButton: boolean = false;

  constructor(public navCtrl: NavController, private http: Http, public loading: LoadingController, public navParams: NavParams,
    public alertCtrl: AlertController, public userData: UserData, public ParametroService: ParametroServiceProvider) {

    //this.empresa = this.navParams.get('id_empresa');
    //this.empresa = this.ParametroService.myParam;
    this.empresa = localStorage.getItem('id_empresa');

    let loader = this.loading.create({
      content: 'Cargando productos…',
    });

    loader.present().then(() => {
      this.http.get('http://localhost/ionic-php-mysql/obtener_productos.php').map(res => res.json()).subscribe(
        data => {

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');

          //this.posts = data.productos;
          this.posts = data.productos.filter(item => item.id_empresa === this.empresa);
          this.initializeItems();
          loader.dismiss();

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
        return (item.nombre_pro.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  //agrega checkedbox a el array y verifica si se deselecciona 
  addCheckbox(event, checkbox: String) {
    this.showButton = true;

    if (event.checked) {
      this.checked.push(checkbox);
    } else {
      let index = this.removeCheckedFromArray(checkbox);
      this.checked.splice(index, 1);
    }

    if (this.checked.length == 0) {
      this.showButton = false;
    }
  }

  //remueve checkbox desde array cuando se desmarca
  removeCheckedFromArray(checkbox: String) {
    return this.checked.findIndex((item) => {
      return item === checkbox;
    })
  }


  deletePost2() {


    console.log('productos a eliminar:', this.checked);


    let alert = this.alertCtrl.create({

      title: 'Confirmar eliminación',
      message: 'Estas seguro de eliminar estos productos?',
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

            let resources = JSON.stringify(this.checked);
            console.log(resources);

            var headers = new Headers();
            headers.append("Accept", 'application/json');
            headers.append('Content-Type', 'application/json');
            let options = new RequestOptions({ headers: headers });


            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {
              this.http.post('http://localhost/ionic-php-mysql/delete_data.php', resources, options)
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

//}
