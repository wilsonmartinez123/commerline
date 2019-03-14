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
    //@ViewChild("image") image;
    @ViewChild("price") price;
    @ViewChild("description") description;
    img1: any = null;
    // @ViewChild("description") description;
    mulimages: any = null;
    hidden: boolean;
    productos: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toast: ToastController,
        public alertCtrl: AlertController, public loading: LoadingController, public fb: FormBuilder, private _IMAGES: ImageProvider, ) {


        //obtener el valor hidden de agregar empresa
        this.hidden = navParams.get('data');

        /* this.form = fb.group({
             "name": ["", Validators.required],
             "image": ["", Validators.required],
             "price": ["", Validators.required],
             "description": ["", Validators.required]
         });
     }*/


        /*
                this.form = fb.group({
        
                    productos: this.fb.array([
                        this.initProductoFields()
                    ])
        
                });
                */

    }

    ngOnInit() {

        this.form = this.fb.group({
            productos: this.initProductoFields()
        })

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
            image: "",
            price: ["", Validators.required],
            description: ["", Validators.required],
            categoria: ["", Validators.required],
        });
    }

    addNewInputField() {
        this.productos.push(this.buildGroup());
    }

    removeInputField(i: number): void {
        this.productos.removeAt(i);
    }

    /*  //genera un FormGroup objeto con campos de entrada con validacion para sucursales 
      initProductoFields(): FormGroup {
          return this.fb.group({
              name: ["", Validators.required],
              image: "",
              price: ["", Validators.required],
              description: ["", Validators.required],
              categoria: ["", Validators.required],
              //preview: ["", Validators.required],
  
  
          });
  
      } */

    /**
     * Genera un nuevo campo de entrada para agregar otra sucursal
    */
    /* addNewInputField(): void {
         const control = <FormArray>this.form.controls.productos;
         control.push(this.initProductoFields());
 
         //const arrayControl = (<FormArray>this.form.get('image'));
 
     } */


    /**
     * elimina una sucursal ingresada antes de dar click en el boton registrar
     */
    /* removeInputField(i: number): void {
         const control = <FormArray>this.form.controls.productos;
         control.removeAt(i);
     }*/




    /*Maneja la selección de archivos de imagen de la computadora del usuario,
     valida que son del tipo de archivo correcto y muestra el
     Imagen seleccionada en la plantilla del componente junto con una carga
     botón */



    selectFileToUpload(event: any, index): void {
        //this.mulimages = null;
        //this.image = null;

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
                    //this.image = res;
                    this.productos.controls[index].value.image = res;

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
    }




    /* fileChange(event) {
         //this.mulimages = null;
         this.img1 = null;
    
         if (event.target.files && event.target.files[0]) {
             let reader = new FileReader();
    
             reader.onload = (event: any) => {
                 //this.img1= null; 
                 this.img1 = event.target.result;
               
             }
             reader.readAsDataURL(event.target.files[0]);
         }
         let fileList: FileList = event.target.files;
         let file: File = fileList[0];
         console.log(file);
     }
    */

    //Post(val: any) {
    Post(): void {



        var arrayControl = this.form.get('productos') as FormArray;
        var items = arrayControl.at(0);

        console.log("2", this.form.controls.image);
        console.log("3", items);


        // this.form.controls['image'];


        const value = this.form.value;
        let newMedlist = {
            name: this.name.value,
            image: this.image,
            price: value.price,
            description: value.description,
        }
        console.log("hpome: ", newMedlist)
        /*this.form.setValue({
            name: this.name.value,
            image: this.image,
            price: this.price.value,
            description: this.description.value,

        })*/

        this.form.patchValue({ image: this.image });

        console.log("Good: ", this.form);

        let resources = JSON.stringify(this.form.value);
        console.log(resources);

        //verificar
        console.log("imagen: ", this.form)
        //console.log("imagen: ", this.form)


        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        let options = new RequestOptions({ headers: headers });


        /*
                let data = {
        
                    name: this.name.value,
                    image: this.image,
                    price: this.price.value,
                    description: this.description.value,
        
                }*/

        let loader = this.loading.create({

            content: 'Procesando por favor espere…',

        });

        loader.present().then(() => {

            this.http.post('http://localhost/ionic-php-mysql/post_data(1).php', resources, options)
                .map(res => res.json())
                .subscribe(res => {

                    loader.dismiss()

                    if (res == "registro exitoso") {

                        let alert = this.alertCtrl.create({

                            title: "HECHO",
                            subTitle: (res),
                            buttons: ['OK']

                        });

                        alert.present();
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

