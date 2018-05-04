import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the AgregarProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-agregar-producto',
    templateUrl: 'agregar-producto.html',
})
export class AgregarProductoPage {

    /**
     * @name form
     * @type {FormGroup}
     * @public
     * @description     Define FormGroup property for managing form validation / data retrieval
     */
    public form: FormGroup;


    /**
     * @name productName
     * @type {Any}
     * @public
     * @description     Model for managing productName field
     */
    public productName: any;

    /**
  * @name productPrice
  * @type {Any}
  * @public
  * @description     Model for managing productPrice field
  */
    public productPrice: any;


    /**
     * @name productDescription
     * @type {Any}
     * @public
     * @description     Model for managing productDescription field
     */
    public productDescription: any;

    /**
     * @name isEdited
     * @type {Boolean}
     * @public
     * @description     Flag to be used for checking whether we are adding/editing an entry
     */
    public isEdited: boolean = false;

    /**
     * @name hideForm
     * @type {Boolean}
     * @public
     * @description     Flag to hide the form upon successful completion of remote operation
     */
    public hideForm: boolean = false;

    /**
     * @name pageTitle
     * @type {String}
     * @public
     * @description     Property to help set the page title
     */
    public pageTitle: string;


    /**
     * @name recordID
     * @type {String}
     * @public
     * @description     Property to store the recordID for when an existing entry is being edited
     */
    public recordID: any = null;


    /**
     * @name baseURI
     * @type {String}
     * @public
     * @description     Remote URI for retrieving data from and sending data to
     */
    private baseURI: string = "http://localhost/ionic-php-mysql/";




    // Initialise module classes
    constructor(public navCtrl: NavController,
        public http: HttpClient,
        public NP: NavParams,
        public fb: FormBuilder,
        public toastCtrl: ToastController) {

        // Create form builder validation rules
        this.form = fb.group({
            "name": ["", Validators.required],
            "price": ["", Validators.required],
            "description": ["", Validators.required]
        });
    }


    /**
     * Triggered when template view is about to be entered
     * Determine whether we adding or editing a record
     * based on any supplied navigation parameters
     *
     * @public
     * @method ionViewWillEnter
     * @return {None}
     */
    ionViewWillEnter(): void {
        this.resetFields();

        if (this.NP.get("record")) {
            this.isEdited = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Amend entry';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Create entry';
        }
    }


    /**
     * Assign the navigation retrieved data to properties
     * used as models on the page's HTML form
     *
     * @public
     * @method selectEntry
     * @param item 		{any} 			Navigation data
     * @return {None}
     */
    selectEntry(item: any): void {
        this.productName = item.name;
        this.productPrice = item.price;
        this.productDescription = item.description;
        this.recordID = item.id;
    }




    /**
     * Save a new record that has been added to the page's HTML form
     * Use angular's http post method to submit the record data
     *
     * @public
     * @method createEntry
     * @param name 			{String} 			Name value from form field
     * * @param price 			{String} 			Price value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    createEntry(name: string, price: string, description: string): void {
        let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
            options: any = { "key": "create", "name": name, "price": price, "description": description },
            url: any = this.baseURI + "manage-data.php";

        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(() => {
                // If the request was successful notify the user
                this.hideForm = true;
                this.sendNotification(`el producto: ${name} fue agregado con éxito`);
            },
                () => {
                    this.sendNotification('Algo salió mal!');
                });
    }


    /**
     * Update an existing record that has been edited in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method updateEntry
     * @param name 			{String} 			Name value from form field
     * * @param price 			{String} 			Price value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    updateEntry(name: string, price: string, description: string): void {
        let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
            options: any = { "key": "update", "name": name, "price": price, "description": description, "recordID": this.recordID },
            url: any = this.baseURI + "manage-data.php";

        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(() => {
                // If the request was successful notify the user
                this.hideForm = true;
                this.sendNotification(`el producto: ${name} fue actualizado con éxito`);
            },
                () => {
                    this.sendNotification('algo salió mal!');
                });
    }

    /**
     * Remove an existing record that has been selected in the page's HTML form
     * Use angular's http post method to submit the record data
     * to our remote PHP script
     *
     * @public
     * @method deleteEntry
     * @return {None}
     */
    deleteEntry(): void {
        let name: string = this.form.controls["name"].value,
            headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
            options: any = { "key": "delete", "recordID": this.recordID },
            url: any = this.baseURI + "manage-data.php";

        this.http
            .post(url, JSON.stringify(options), headers)
            .subscribe(() => {
                this.hideForm = true;
                this.deleteEntry();
                this.sendNotification(`el producto: ${name} fue eliminado con éxito`);
            },
                () => {
                    this.sendNotification('algo salió mal!');
                });
    }


    /**
     * Handle data submitted from the page's HTML form
     * Determine whether we are adding a new record or amending an
     * existing record
     *
     * @public
     * @method saveEntry
     * @return {None}
     */
    saveEntry(): void {
        let name: string = this.form.controls["name"].value,
            price: string = this.form.controls["price"].value,
            description: string = this.form.controls["description"].value;

        if (this.isEdited) {
            this.updateEntry(name, price, description);
        }
        else {
            this.createEntry(name, price, description);
        }
    }

    /**
     * Clear values in the page's HTML form fields
     *
     * @public
     * @method resetFields
     * @return {None}
     */
    resetFields(): void {
        this.productName = "";
        this.productPrice = "";
        this.productDescription = "";
    }




    /**
     * Manage notifying the user of the outcome of remote operations
     *
     * @public
     * @method sendNotification
     * @param message 	{String} 			Message to be displayed in the notification
     * @return {None}
     */
    sendNotification(message: string): void {
        let notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    }



}
