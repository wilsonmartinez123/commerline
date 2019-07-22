import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
//import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';


@Component({
    selector: 'page-agregar-producto',
    templateUrl: 'agregar-producto.html'
})
export class AgregarProductoPage {

    public form: FormGroup;


    //Will store the selected image file data (in the form of a base64 data URI)

    public image: string;


    //Used to switch DOM elements on/off depending on whether an image has been selected

    public isSelected: boolean = false;

    //Will store the selected image's MimeType

    private _SUFFIX: string;


    @ViewChild("name") name;
    @ViewChild("price") price;
    @ViewChild("description") description;
    //@ViewChild("picture") picture;

    productos: any;
    id_cliente: any;
    id_clientes: any;
    posts: any;
    items: any;
    file: string;
    datos: string;
    productValid: boolean = false;
    disabled: boolean = false;


    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toast: ToastController,
        public alertCtrl: AlertController, public loading: LoadingController, public fb: FormBuilder, private _IMAGES: ImageProvider, public toastCtrl: ToastController
    ) {

        this.id_clientes = localStorage.getItem('id_cliente');


        this.http.get('http://localhost/ionic-php-mysql/obtener_empresas.php').map(res => res.json()).subscribe(
            data => {

                let headers = new Headers();
                headers.append('Content-Type', 'application/json');

                this.posts = data.empresa.filter(item => item.id_cliente === this.id_clientes);
                this.initializeItems();

            },
            error => {
                console.log("Oops!", error);
            }

        );



    }

    ngOnInit() {
        //this.id_cliente = this.navParams.get('id_cliente');

        this.id_cliente = localStorage.getItem('id_cliente');


        this.form = this.fb.group({
            productos: this.initProductoFields(),
        })

    }

    initializeItems() {
        this.items = this.posts;
    }


    initProductoFields(): FormArray {
        this.productos = this.fb.array([
            this.buildGroup()
        ]);


        return this.productos;

    }



    buildGroup(): FormGroup {
        return this.fb.group({


            name: ["", Validators.required],
            IdEmpresario: [""],
            namefile: [""],
            typefile: [""],
            price: ["", Validators.required],
            categoria: ["", Validators.required],
            description: ["", Validators.required],
            picture: ["", Validators.required],



        });

    }



    addNewInputField() {
        this.productValid = false;
        this.productos.push(this.buildGroup());


    }

    removeInputField(i: number): void {
        this.productos.removeAt(i);
    }

    changeDescription() {

        this.productValid = false;
    }

    changeCategory() {

        this.productValid = false;

    }

    changePrice() {

        this.productValid = false;

    }
    changeName() {

        this.productValid = false;

    }


    addProduct(index) {


        this.toastCtrl.create({
            message: "Producto agregado",
            duration: 2000,
            //position: 'middle'
        }).present();

        this.productValid = true;
        this.disabled = true;
        this.productos.controls[index].value.IdEmpresario = this.id_cliente;
        this.productos.controls[index].value.picture = this.image;

    }

    selectFileToUpload(event, index) {

        this.productos.controls[index].value.IdEmpresario = this.id_cliente;

        // if (event.target.files[0]) {


        //this.productos.controls[index].value.namefile = event.target.files[0].name;
        //this.productos.controls[index].value.typefile = event.target.files[0].type;


        this._IMAGES
            .handleImageSelection(event)
            .subscribe((res) => {

                // Retrieve the file type from the base64 data URI string
                this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];



                // Do we have correct file type?
                if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

                    // Hide the file input field, display the image in the component template
                    // and display an upload button
                    this.isSelected = true
                    this.image = res;
                    this.productos.controls[index].value.picture = res;

                    //this.productos.controls[index].image = res;
                }


                // If we don't alert the user
                else {
                    this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
                }


            },
                (error) => {
                    console.dir(error);
                    this.displayAlert(error.message);
                });
        /* }
         else {
 
             this.isSelected = false;
         } */


    }



    submitForm(): void {


        //this.productos.controls[index].value.IdEmpresario = this.id_cliente;
        //this.productos.controls[index].value.picture = this.image;

        /* var arrayControl = this.form.get('productos') as FormArray;
         var items = arrayControl.at(0);
 
         console.log("2", this.form.controls.image);
         console.log("3", items); */

        //console.log("2", this.image);


        let resources = JSON.stringify(this.form.value);
        console.log(resources);


        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        let options = new RequestOptions({ headers: headers });



        /*  let data = {
  
              name: this.name.value,
              image: this.image,
              price: this.price.value,
              description: this.description.value,
  
          }
  
          console.log(data);
  */

        let loader = this.loading.create({

            content: 'Procesando por favor espere…',

        });

        loader.present().then(() => {

            this.http.post('http://localhost/ionic-php-mysql/post_data.php', resources, options)
                .map(res => res.json())
                .subscribe(res => {

                    loader.dismiss()

                    if (res == "registro exitoso") {

                        this.form.reset();

                        let alert = this.alertCtrl.create({

                            title: "HECHO",
                            subTitle: (res),
                            buttons: ['OK']

                        });

                        alert.present();
                        //this.ParametroService.myParam = this.empresa;

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

        // }

    }


    displayAlert(message: string): void {
        let alert: any = this.alertCtrl.create({
            title: 'Heads up!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    }

}

