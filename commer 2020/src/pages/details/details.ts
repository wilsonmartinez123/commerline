import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, LoadingController, AlertController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ComparePage } from '../compare/compare';



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


  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public loading: LoadingController, public alertCtrl: AlertController,
    public ServiceProvider: AuthServiceProvider) {


    //obtiene la variable global cuando usuario se loguee
    this.ratingStar = localStorage.getItem('username');


    this.idProduct = JSON.parse(localStorage.getItem('id'));

    //obtener informacion de la empresa, para mostrarlo junto con detalles del producto. 
    this.getBusiness();

    //obtener calificacion
    this.getScore();




    //calificar productos
    events.subscribe('star-rating:changed', (starRating) => {
      console.log(starRating);
      this.rating = starRating;
      this.newrating = starRating;
    });


  }

  getScore() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.calificacion = data[9]['calificacion'].filter((item) => {
          return (item.correo_usu === this.ratingStar && item.id_pro === this.idProduct);

        }, err => {
          console.log(err);

        });
      });
  }

  getBusiness() {
    this.ServiceProvider.getData()
      .subscribe(data => {
        this.business = data[0]['empresa'];
      }, err => {
        console.log(err);

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



    let data = {

      idcalificacion: idCalificacion,
      newvalue: this.newrating,

    };


    let loader = this.loading.create({
      content: 'Procesando por favor espera...',
    });

    loader.present().then(() => {



      this.ServiceProvider.editScore(data).subscribe((response) => {
        console.log(response);
        loader.dismiss();


        if (response == "Actualización de calificación exitosa") {

          let alert = this.alertCtrl.create({
            title: "HECHO",
            subTitle: (response),
            buttons: ['ok']
          });

          alert.present();
          this.navCtrl.push(DetailsPage);
        }
      },

        (err) => {
          console.log(err);
          loader.dismiss()

          let alert = this.alertCtrl.create({
            title: "ERROR",
            subTitle: ("No se actualizó calificación"),
            buttons: ['ok']
          });

          alert.present();


        });


    });
  }

  saveRating(item) {


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


      this.ServiceProvider.addScore(item).subscribe((response) => {
        console.log(response);
        loader.dismiss();

        if (response == "Valor registrado, Gracias") {

          let alert = this.alertCtrl.create({
            title: "HECHO",
            subTitle: (response),
            buttons: ['ok']
          });

          alert.present();
          this.navCtrl.push(DetailsPage);
        }

        else if (response == "Ya calificaste este producto, si desea modificar, selecciona Editar, Gracias!!") {

          let alert = this.alertCtrl.create({
            title: "HECHO",
            subTitle: (response),
            buttons: ['ok']
          });

          alert.present();
        }

      },

        (err) => {
          console.log(err);
          loader.dismiss()

          let alert = this.alertCtrl.create({
            title: "ERROR",
            subTitle: ("No se registró la calificación"),
            buttons: ['ok']
          });

          alert.present();

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



            let loader = this.loading.create({
              content: 'Procesando por favor espere…',
            });

            loader.present().then(() => {


              this.ServiceProvider.deleteScore(item).subscribe((response) => {
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
                  this.navCtrl.setRoot(DetailsPage);

                }

              },

                (err) => {
                  console.log(err);
                  loader.dismiss()

                  let alert = this.alertCtrl.create({

                    title: "ERROR",
                    subTitle: ("No se eliminó la calificación"),
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

  compare(item) {
    this.navCtrl.push(ComparePage, item);
  }

}