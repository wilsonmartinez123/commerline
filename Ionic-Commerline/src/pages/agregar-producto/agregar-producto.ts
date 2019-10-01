import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from "@angular/http";
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
//import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ImageProvider } from '../../providers/image/image';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
    selector: 'page-agregar-producto',
    templateUrl: 'agregar-producto.html'
})
export class AgregarProductoPage {

    public form: FormGroup;


    //Will store the selected image file data (in the form of a base64 data URI)

    public image: string;



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
    item: any;
    categories: any;
    selectedSubcategory: any;
    category: any;
    subcategory: any;



    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toast: ToastController,
        public alertCtrl: AlertController, public loading: LoadingController, public fb: FormBuilder, private _IMAGES: ImageProvider, public toastCtrl: ToastController,
        public ServiceProvider: AuthServiceProvider
    ) {

        this.id_cliente = JSON.parse(localStorage.getItem('id_cliente'));

        this.getBusiness();
        this.getAllCategories();



    }

    getBusiness() {
        this.ServiceProvider.getBusiness()
            .then(data => {
                this.posts = data['empresa'].filter(item => item.id_cliente === this.id_cliente);
                this.initializeItems();

            });
    }

    getAllCategories() {
        this.ServiceProvider.getAllCategories()
            .then(data => {
                this.categories = data['categorias'];

            });
    }

    ngOnInit() {
        //this.id_cliente = this.navParams.get('id_cliente');


        this.item = JSON.parse(localStorage.getItem('id_empresa'));


        this.form = this.fb.group({
            productos: this.initProductoFields(),


        });




        //detecta cuando hay algun cambio en el formulario
        this.form.get('productos').valueChanges.subscribe(changes => {
            console.log(changes)

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


            selectedSubcategory: [""],
            IdEmpresario: [""],
            name: ["", Validators.required],
            namefile: [""],
            typefile: [""],
            image: [""],
            price: ["", Validators.required],
            categoria: ["", Validators.required],
            otraCategoria: [""],
            subcategoria: ["", Validators.required],
            otraSubcategoria: [""],
            description: ["", Validators.required],
            picture: ["", Validators.required],




        }, { validator: this.customValidators }
        );




    }





    customValidators(group: FormGroup) {

        var otra = group.controls['otraCategoria'];

        if (otra.value != '') {


            return null;
        }



        return { 'requiredOtraOpcion': true };

    }



    addNewInputField() {


        this.productos.push(this.buildGroup());


    }

    removeInputField(i: number): void {
        this.productos.removeAt(i);
    }


    selectFileToUpload(event, index: number): void {

        //obtiene el id_empresario
        this.productos.controls[index].controls['IdEmpresario'].value = this.id_cliente;
        //this.productos.controls[index].value.IdEmpresario = this.id_cliente;

        this.productos.controls[index].controls['namefile'].value = event.target.files[0].name;
        this.productos.controls[index].controls['typefile'].value = event.target.files[0].type;



        this._IMAGES
            .handleImageSelection(event)
            .subscribe((res) => {

                // Recupere el tipo de archivo de la cadena de URI de datos base64
                this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];



                // Verifica si el tipo de archivo es el correcto?
                if (this._IMAGES.isCorrectFileType(this._SUFFIX)) {

                    //Muestra la Imagen

                    //this.image = res;

                    this.productos.controls[index].image = res;
                    //this.productos.controls[index].value.picture = res;
                    this.productos.controls[index].controls['picture'].value = res;

                }


                // If we don't alert the user
                else {
                    this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
                }


                if (this.productos.controls[index].value['picture'].includes('fakepath')) {
                    this.productos.controls[index].value['picture'] = res;
                    this.productos.controls[index].value['IdEmpresario'] = this.id_cliente;
                    this.productos.controls[index].value['namefile'] = event.target.files[0].name;
                    this.productos.controls[index].value['typefile'] = event.target.files[0].type;
                }

            },
                (error) => {
                    console.dir(error);
                    this.displayAlert(error.message);
                });



    }



    //seleccionar subcategoria de acuerdo a la categoria seleccionado

    
        subcategories(categoria, index:number) {
            
            //var value = this.productos.controls[index].categoria = categoria;

            this.productos.controls[index].selectedSubcategory = this.categories.filter(item => item.categoria === categoria)
    
        }


    submitForm(): void {

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
                        this.image = null;

                        let alert = this.alertCtrl.create({

                            title: "HECHO",
                            subTitle: (res),
                            buttons: ['OK']

                        });

                        alert.present();
                        //this.ParametroService.myParam = this.empresa;

                        let empresa = JSON.stringify(this.item.id_empresa);
                        localStorage.setItem('id_empresa', empresa);

                        this.navCtrl.push(HomePage, { item: this.item });
                        //this.navCtrl.push(HomePage);
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

