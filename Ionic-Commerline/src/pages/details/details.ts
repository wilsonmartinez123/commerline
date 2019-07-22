import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';



@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  business: any;

  //numero de estrellas
  rating: number = 5;
  newrating: number = 5;
  ratingStar: string;

  item: {};
  id_pro: any;
  checkRating: boolean = false;
  calificacion: any;
  producto: any;
  showMe: boolean = false;
  Edit: boolean = false;
  idProduct: any;


  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams, public events: Events, public loading: LoadingController, public alertCtrl: AlertController) {


    //obtiene la variable global cuando usuario se loguee
    this.ratingStar = localStorage.getItem('username');
    

    this.idProduct = JSON.parse(localStorage.getItem('id'));

    //obtener informacion de la empresa, para mostrarlo junto con detalles del producto. 
    this.http.get('http://localhost/ionic-php-mysql/obtener_empresas.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.business = data.empresa;

      },
      error => {
        console.log("Oops!", error);
      }

    );

    //obtener calificacion

    this.http.get('http://localhost/ionic-php-mysql/Usuarios/obtener_calificacion.php').map(res => res.json()).subscribe(
      data => {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.calificacion = data.calificacion.filter((item) => {
          return (item.correo_usu === this.ratingStar && item.id_pro === this.idProduct);
        });

      },
      error => {
        console.log("Oops!", error);
      }

    );




    //calificar productos
    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.rating = starRating;
      this.newrating = starRating;
    });


  }

  show() {

    this.showMe = true;
  }

  hide() {

    this.showMe = false;
  }

  showedit() {

    this.Edit = true;


  }

  ngOnInit() {

    //this.item = this.navParams.get('product');
    var test = localStorage.getItem('product');
    this.item = JSON.parse(test);
    console.log(this.item);

  }

  edit(idCalificacion) {


    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {

      idcalificacion: idCalificacion,
      newvalue: this.newrating,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Usuarios/editar_calificacion.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss();
          if (res == "actualización de calificación exitosa") {
            let alert = this.alertCtrl.create({
              title: "HECHO",
              subTitle: (res),
              buttons: ['ok']
            });

            alert.present();
            this.navCtrl.push(DetailsPage);

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

  saveRating(item) {


    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });


    let data = {

      idPro: item,
      value: this.rating,
      usuario: this.ratingStar,

    };

    console.log(data);

    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {
      this.http.post('http://localhost/ionic-php-mysql/Usuarios/calificar_producto.php', data, options)
        .map(res => res.json())
        .subscribe(res => {

          loader.dismiss();
          if (res == "Valor registrado, Gracias") {
            let alert = this.alertCtrl.create({
              title: "HECHO",
              subTitle: (res),
              buttons: ['ok']
            });

            alert.present();
            this.navCtrl.push(DetailsPage);

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

  delete(item) {


    let alert = this.alertCtrl.create({

      title: 'Confirmar eliminación',
      message: 'Estas seguro de eliminar calificación?',
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
              this.http.post('http://localhost/ionic-php-mysql/Usuarios/eliminar_calificacion.php', item, options)
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
                    this.navCtrl.setRoot(DetailsPage);

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