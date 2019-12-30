webpackJsonp([0],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable_forkJoin__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

*/
var apiUrl = 'http://www.commerapp.com/ionic-php-mysql';
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        // Http Options
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
            })
        };
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.getData = function () {
        var empresas = this.http.get(apiUrl + '/obtener_empresas.php');
        var clientes = this.http.get(apiUrl + '/obtener_clientes.php');
        var clientesAdmin = this.http.get(apiUrl + '/Admin/obtener_clientes_admin.php');
        var productos = this.http.get(apiUrl + '/obtener_productos.php');
        var todasCategorias = this.http.get(apiUrl + '/Empresario/obtener_categorias_subcategorias.php');
        var colombia = this.http.get(apiUrl + '/colombia.php?c=colombia');
        var usuarios = this.http.get(apiUrl + '/Usuarios/obtener_usuarios.php');
        var administrador = this.http.get(apiUrl + '/Admin/obtener_admin.php');
        var categorias = this.http.get(apiUrl + '/obtener_categorias.php');
        var calificacion = this.http.get(apiUrl + '/Usuarios/obtener_calificacion.php');
        return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable_forkJoin__["forkJoin"])([empresas, clientes, clientesAdmin, productos, todasCategorias, colombia, usuarios, administrador, categorias,
            calificacion]);
    };
    // Handle API errors
    AuthServiceProvider.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend returned code ${error.status}, ' +
                'body was: ${error.error}');
        }
        // return an observable with a user-facing error message
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_throw__["_throw"])('Something bad happened; please try again later.');
    };
    ;
    AuthServiceProvider.prototype.addProduct = function (data) {
        return this.http.post(apiUrl + '/post_data.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.addBusiness = function (data) {
        return this.http.post(apiUrl + '/registrar_empresa.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.editProducts = function (data) {
        return this.http.post(apiUrl + '/edit_data.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.editProductsOffers = function (data) {
        return this.http.post(apiUrl + '/edit_data_offers.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.deleteSeveralProducts = function (data) {
        return this.http.post(apiUrl + '/delete_several_data.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.deleteProducts = function (data) {
        return this.http.post(apiUrl + '/delete_data.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.resetPassword = function (data) {
        return this.http.post(apiUrl + '/reset-password.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.editBusiness = function (data) {
        return this.http.post(apiUrl + '/Empresario/editar_empresa.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.deleteBusiness = function (data) {
        return this.http.post(apiUrl + '/Empresario/eliminar_empresa.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.UpdateCustomerData = function (data) {
        return this.http.post(apiUrl + '/Empresario/actualizar_datos_empresario.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.changePassword = function (data) {
        return this.http.post(apiUrl + '/Empresario/change-password.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.updateAdminData = function (data) {
        return this.http.post(apiUrl + '/Admin/actualizar_datos_administrador.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.deleteCustomers = function (data) {
        return this.http.post(apiUrl + '/Admin/eliminar_clientes.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.editScore = function (data) {
        return this.http.post(apiUrl + '/Usuarios/editar_calificacion.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.addScore = function (data) {
        return this.http.post(apiUrl + '/Usuarios/calificar_producto.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.deleteScore = function (data) {
        return this.http.post(apiUrl + '/Usuarios/eliminar_calificacion.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.UpdateUserData = function (data) {
        return this.http.post(apiUrl + '/Usuarios/actualizar_datos_usuario.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.login = function (data) {
        return this.http.post(apiUrl + '/login.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider.prototype.register = function (data) {
        return this.http.post(apiUrl + '/register.php', data, this.httpOptions)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(2), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div class="logo">\n    <img src="assets/img/commer.jpeg" alt="Logo">\n  </div>\n\n  <div padding class="about-info">\n    <h4>Ionic Conference</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n          <ion-option value="austin">Austin, TX</ion-option>\n          <ion-option value="chicago">Chicago, IL</ion-option>\n          <ion-option value="seattle">Seattle, WA</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      Aplicativo web y Móvil\n      mediante la cual usted podrá comparar precios de productos entre establecimientos,\n      supermercados, hacer un análisis de precios,\n      buscar producto que requiere dependiendo de su ubicacion, entre los almacenes de cadena y supermercados,\n      permitiendote economizar tiempo a la hora de tener que ir a un supermercado.\n      Busca y compare los precios del mismo artículo en distintos establecimientos.\n    </p>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* PopoverController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerEmpresaEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_admin__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VerEmpresaEditPage = (function () {
    function VerEmpresaEditPage(navCtrl, navParams, _IMAGES, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._IMAGES = _IMAGES;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.isSelected = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            direction: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            Horario: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]),
        });
        //detecta si el administrador edita producto
        this.admin = JSON.parse(localStorage.getItem('itemAdmin'));
    }
    VerEmpresaEditPage.prototype.ngOnInit = function () {
        this.item = this.navParams.get('item');
        this.nombre = this.navParams.get('nombre_emp');
        this.direccionEmpresa = this.navParams.get('direccion_emp');
        //this.departamento = this.navParams.get('telefono_cli');
        //this.municipio = this.navParams.get('telefono_cli');
        this.horarioAtencion = this.navParams.get('horario_emp');
        this.telefono = this.navParams.get('telefono_emp');
        this.logo = this.navParams.get('logo_emp');
        this.empresa = this.navParams.get('id_empresa');
    };
    VerEmpresaEditPage.prototype.selectFileToUpload = function (event) {
        var _this = this;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Retrieve the file type from the base64 data URI string
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Do we have correct file type?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                _this.namefile = event.target.files[0].name;
                // Oculte el campo de entrada del archivo, muestre la imagen en la plantilla del componente
                // y mostrar un botón de carga
                _this.isSelected = true;
                _this.image = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    VerEmpresaEditPage.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            empresa: this.empresa,
            logo: this.logo,
            newName: this.name.value,
            newDirection: this.direction.value,
            newHorario: this.Horario.value,
            newPhone: this.mobile.value,
            newImage: this.image,
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.editBusiness(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "HECHO",
                    subTitle: ("Actualización de empresa exitosa"),
                    buttons: ['ok']
                });
                alert.present();
                if (_this.admin) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__admin_admin__["a" /* AdminPage */]);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se pudo actualizar la empresa"),
                    buttons: ['ok']
                });
                alert.present();
            });
        });
    };
    VerEmpresaEditPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Heads up!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("name"),
        __metadata("design:type", Object)
    ], VerEmpresaEditPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("direction"),
        __metadata("design:type", Object)
    ], VerEmpresaEditPage.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("Horario"),
        __metadata("design:type", Object)
    ], VerEmpresaEditPage.prototype, "Horario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mobile"),
        __metadata("design:type", Object)
    ], VerEmpresaEditPage.prototype, "mobile", void 0);
    VerEmpresaEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-empresa-edit',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\ver-empresa-edit\ver-empresa-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Empresa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="form" (ngSubmit)="onSubmit()">\n\n\n    <ion-list no-line>\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.name.valid && form.controls.name.touched}">\n        <ion-icon name="briefcase" item-start></ion-icon>\n        <ion-label stacked>Nombre de la Empresa*</ion-label>\n        <ion-input type="text" name="name" #name formControlName="name" [(ngModel)]="nombre"></ion-input>\n      </ion-item>\n\n\n      <div *ngIf="form.controls.name.hasError(\'required\') && form.controls.name.touched">\n        <p>Nombre de Empresa es requerido!</p>\n      </div>\n\n\n      <ion-item>\n        <ion-icon name="link" item-start></ion-icon>\n        <ion-label stacked>Ingrese su página web</ion-label>\n        <ion-input type="text" name="paginaWeb" #paginaWeb></ion-input>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.direction.valid && form.controls.direction.touched}">\n        <ion-icon name="navigate" item-start></ion-icon>\n        <ion-label stacked>Dirección de la Empresa*</ion-label>\n        <ion-input formControlName="direction" type="text" name="direction" #direction [(ngModel)]="direccionEmpresa"></ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.direction.hasError(\'required\') && form.controls.direction.touched">\n        <p>Dirección de Empresa es requerido!</p>\n      </div>\n\n\n      <!--\n      <ion-item>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Departamento</ion-label>\n        <ion-select name="departamento" #departamento formControlName="country" (ionChange)="CountryChange($event)">\n          <ion-option *ngFor="let department of ubicacion; let i = index" value="{{department.departamento}}">{{department.departamento}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf="form.controls.country.hasError(\'required\') && form.controls.country.touched">\n        <p>Departamento es requerido!</p>\n      </div>\n\n\n      <ion-item *ngFor="let x of selectedMunicipality">\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Municipio</ion-label>\n        <ion-select name="municipio" #municipio formControlName="state">\n          <ion-option *ngFor="let municipio of x.ciudades" value="{{municipio}}">{{municipio}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf="form.controls.state.hasError(\'required\') && form.controls.state.touched">\n        <p>Municipio es requerido!</p>\n      </div>\n    -->\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.Horario.valid && form.controls.Horario.touched}">\n        <ion-icon name="clock" item-start></ion-icon>\n        <ion-label stacked>Horario de Atención*</ion-label>\n        <ion-input formControlName="Horario" type="text" name="Horario" #Horario [(ngModel)]="horarioAtencion"></ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.Horario.hasError(\'required\') && form.controls.Horario.touched">\n        <p>Horario de Empresa es requerido!</p>\n      </div>\n\n\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.mobile.valid && form.controls.mobile.touched}">\n        <ion-icon name="call" item-start></ion-icon>\n        <ion-label stacked>Número de Contacto</ion-label>\n        <ion-input formControlName="mobile" type="number" name="mobile" #mobile [(ngModel)]="telefono"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="form.controls.mobile.hasError(\'required\') && form.controls.mobile.touched">\n        <p>campo Número celular es requerido!</p>\n      </ion-item>\n      <ion-item *ngIf="form.controls.mobile.hasError(\'minlength\') && form.controls.mobile.touched">\n        <p>longitud 8 Digitos, para Número Teléfono!</p>\n      </ion-item>\n      <ion-item *ngIf="form.controls.mobile.hasError(\'maxlength\') && form.controls.mobile.touched">\n        <p>longitud 10 Digitos, para Número Celular!</p>\n      </ion-item>\n      <br>\n\n\n      <div *ngIf="logo && !isSelected">\n        <h5>Imagen Logo empresa</h5>\n\n        <div *ngIf="logo.includes(\'http\')">\n          <img class="resize" src="{{logo}}">\n        </div>\n\n        <div *ngIf="logo.includes(\'uploads/\')">\n          <img class="resize" src="http://www.commerapp.com/ionic-php-mysql/{{logo}}">\n        </div>\n\n        <!--<img class="resize" src="http://localhost/ionic-php-mysql/{{logo}}">-->\n      </div>\n\n\n\n\n\n      <ion-item>\n        <ion-icon name="image" item-start></ion-icon>\n        <ion-label text-wrap>Cambiar imagen o logo de la empresa*</ion-label>\n        <ion-input type="file" accept="image/*" (change)="selectFileToUpload($event)"></ion-input>\n      </ion-item>\n\n\n      <ion-item *ngIf="isSelected">\n        <img [src]="image" width="250" height="250" />\n      </ion-item>\n\n\n      <div>\n        <button class="registrar" ion-button round outline block color="primary" [disabled]="!form.valid" style="margin-top: 20px;"\n          type="submit">Actualizar\n          Empresa</button>\n\n      </div>\n\n\n\n    </ion-list>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\ver-empresa-edit\ver-empresa-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], VerEmpresaEditPage);
    return VerEmpresaEditPage;
}());

//# sourceMappingURL=ver-empresa-edit.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_edit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminProductosPage = (function () {
    function AdminProductosPage(loading, navCtrl, navParams, alertCtrl, ServiceProvider) {
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
    }
    AdminProductosPage_1 = AdminProductosPage;
    AdminProductosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.empresa = localStorage.getItem('id_empresa');
        console.log('id_empresa: ', this.empresa);
        var loader = this.loading.create({
            content: 'Cargando productos…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.rows = data[3]['productos'].filter(function (item) { return item.id_empresa === _this.empresa; });
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    AdminProductosPage.prototype.edit = function (itemAdmin) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_edit__["a" /* EditPage */], itemAdmin);
        //envia identificador del cliente para editar el producto. 
        var admin = JSON.stringify(itemAdmin);
        localStorage.setItem('itemAdmin', admin);
    };
    AdminProductosPage.prototype.delete = function (value) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Estas seguro de eliminar este producto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteProducts(value).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "HECHO",
                                    subTitle: ("Dato eliminados exitosamente"),
                                    buttons: ['OK']
                                });
                                alert.present();
                                _this.navCtrl.push(AdminProductosPage_1);
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
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
    };
    AdminProductosPage = AdminProductosPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-productos',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\admin-productos\admin-productos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <!--\n               Embed the ngx-datatable component with following property bindings/values:\n               1. sorttype - allow data to be sorted on multiple columns\n               2. headerHeight - Set height of table header at 50 pixels\n               3. footerHeight - Set height of table footer at 50 pixels\n               4. rowHeight - Set height of table rows at 50 pixels\n               5. rows - Derives the data for the table rows from the component class\n                         property of rows\n               6. columns - Derives the names for the table columns from the component\n                            class property of columns\n               7. columnMode - Use of standard, flex or force - Force value makes columns\n                               equidistant and span the width of the parent container\n               8. limit - the number of records to display before paginating the results\n            -->\n  <ngx-datatable [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="200" [rows]="rows" [columns]="columns"\n    [columnMode]="\'force\'" [scrollbarH]="true" [limit]="20" [sortType]="\'multi\'">\n\n    <ngx-datatable-column name="Nombre">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.nombre_pro}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Descripción">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.desripcion_pro}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name="Imagen">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n\n        <div *ngIf="row.imagen_pro.includes(\'http\')">\n          <img-loader src="{{row.imagen_pro}}" useImg></img-loader>\n        </div>\n\n\n        <div *ngIf="row.imagen_pro.includes(\'uploads/\')">\n          <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.imagen_pro}}" useImg></img-loader>\n        </div>\n\n\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Precio">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.precioNuevo_pro}}\n      </ng-template>\n    </ngx-datatable-column>\n\n\n\n\n    <ngx-datatable-column name="Acción">\n      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n        <button ion-button small outline (click)="delete(row)">Eliminar</button>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Acción">\n      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n        <button ion-button small outline (click)="edit(row)">Editar</button>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n  </ngx-datatable>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\admin-productos\admin-productos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AdminProductosPage);
    return AdminProductosPage;
    var AdminProductosPage_1;
}());

//# sourceMappingURL=admin-productos.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_productos_admin_productos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPage = (function () {
    function EditPage(navCtrl, navParams, alertCtrl, loading, _IMAGES, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this._IMAGES = _IMAGES;
        this.ServiceProvider = ServiceProvider;
        // Se usa para activar / desactivar elementos DOM dependiendo de si se ha seleccionado una imagen
        this.isSelected = false;
        this.getAllCategories();
        this.subcategorias = this.navParams.get('nombre_subcategoria');
        this.categorias = this.navParams.get('nombre_categoria');
        this.id = this.navParams.get('id');
        this.name = this.navParams.get('nombre_pro');
        this.image = this.navParams.get('imagen_pro');
        this.price = this.navParams.get('precioNuevo_pro');
        this.description = this.navParams.get('desripcion_pro');
        this.oldNameValue = this.navParams.get('nombre_pro');
        this.oldImageValue = this.navParams.get('imagen_pro');
        this.oldPriceValue = this.navParams.get('precioNuevo_pro');
        this.oldDescriptionValue = this.navParams.get('desripcion_pro');
        this.oldDate = this.navParams.get('fecha_registro_pro');
        this.empresa = this.navParams.get('id_empresa');
        //detecta si el administrador edita producto
        this.admin = JSON.parse(localStorage.getItem('itemAdmin'));
    }
    EditPage.prototype.getAllCategories = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.categories = data[4]['categorias'];
            _this.selectedSubcategory = _this.categories.filter(function (item) { return item.categoria === _this.categorias; });
        }, function (err) {
            console.log(err);
        });
    };
    EditPage.prototype.selectFileToUpload = function (event) {
        var _this = this;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Retrieve the file type from the base64 data URI string
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Do we have correct file type?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                _this.namefile = event.target.files[0].name;
                // Oculte el campo de entrada del archivo, muestre la imagen en la plantilla del componente
                // y mostrar un botón de carga
                _this.isSelected = true;
                _this.newImage = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    EditPage.prototype.subcategories = function (categoria) {
        this.selectedSubcategory = this.categories.filter(function (item) { return item.categoria === categoria; });
    };
    EditPage.prototype.Edit = function () {
        var _this = this;
        if (this.newName.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "ATENCIÓN",
                subTitle: "El campo de nombre está vacío",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.newPrice.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "ATENCIÓN",
                subTitle: "El campo de precio está vacío",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else if (this.newDescription.value == "") {
            var alert_3 = this.alertCtrl.create({
                title: "ATENCIÓN",
                subTitle: "El campo de descripción está vacío",
                buttons: ['OK']
            });
            alert_3.present();
        }
        else {
            var data_1 = {
                categoria: this.categorias,
                subcategoria: this.subcategorias,
                name: this.oldNameValue,
                price: this.oldPriceValue,
                image: this.oldImageValue,
                description: this.oldDescriptionValue,
                date: this.oldDate,
                empresa: this.empresa,
                id: this.id,
                newName: this.newName.value,
                newPrice: this.newPrice.value,
                newDescription: this.newDescription.value,
                newImage: this.newImage,
                namefile: this.namefile,
            };
            console.log(data_1);
            var loader_1 = this.loading.create({
                content: 'Procesando por favor espera...',
            });
            loader_1.present().then(function () {
                _this.ServiceProvider.editProducts(data_1).subscribe(function (response) {
                    console.log(response);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: ("Actualización de datos exitosa"),
                        buttons: ['ok']
                    });
                    alert.present();
                    if (_this.admin) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__admin_productos_admin_productos__["a" /* AdminProductosPage */]);
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }, function (err) {
                    console.log(err);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: ("No se pudo editar el producto"),
                        buttons: ['ok']
                    });
                    alert.present();
                });
            });
        }
    };
    EditPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aviso!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newName"),
        __metadata("design:type", Object)
    ], EditPage.prototype, "newName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newPrice"),
        __metadata("design:type", Object)
    ], EditPage.prototype, "newPrice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newDescription"),
        __metadata("design:type", Object)
    ], EditPage.prototype, "newDescription", void 0);
    EditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\edit\edit.html"*/'<!--\n  Generated template for the EditPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-line>\n\n    <ion-item>\n      <ion-icon name="list" item-start></ion-icon>\n      <ion-label>Categoría</ion-label>\n      <ion-select [(ngModel)]="categorias" name="categoria" #categoria (ionChange)="subcategories($event)">\n        <ion-option *ngFor="let category of categories; let i = index" value="{{category.categoria}}">{{category.categoria}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!--Subcategoria-->\n\n    <ion-item *ngFor="let x of selectedSubcategory">\n      <ion-icon name="list" item-start></ion-icon>\n      <ion-label>Subcategoria</ion-label>\n      <ion-select [(ngModel)]="subcategorias" name="subcategoria" #subcategoria>\n        <ion-option *ngFor="let subcategory of x.subcategoria" value="{{subcategory.subcategoria}}">{{subcategory.subcategoria}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input id="newName" type="text" name="newName" #newName [(ngModel)]="name"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label floating>Precio</ion-label>\n      <ion-input id="newPrice" type="text" name="newPrice" #newPrice [(ngModel)]="price"></ion-input>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-label floating>Descripción del producto</ion-label>\n      <ion-textarea id="newDescription" rows="6" maxLength="500" name="newDescription" #newDescription [(ngModel)]="description"></ion-textarea>\n    </ion-item>\n\n    <br />\n\n    <div *ngIf="image && !isSelected && image.includes(\'uploads/\')">\n      <h5>Imagen de producto</h5>\n      <img width="250" height="250" src="http://www.commerapp.com/ionic-php-mysql/{{image}}">\n    </div>\n\n    <div *ngIf="image && !isSelected && image.includes(\'http\')">\n      <h5>Imagen de producto</h5>\n      <img width="250" height="250" src="{{image}}">\n    </div>\n\n    <ion-item>\n      <ion-icon name="image" item-start></ion-icon>\n      <ion-label stacked>Cambiar imagen del producto</ion-label>\n      <ion-input type="file" accept="image/*" (change)="selectFileToUpload($event)"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="isSelected">\n      <img [src]="newImage" width="250" height="250" />\n    </ion-item>\n\n\n    <div>\n      <button ion-button round outline block (click)="Edit()">Actualizar</button>\n    </div>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\edit\edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], EditPage);
    return EditPage;
}());

//# sourceMappingURL=edit.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarProductoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { FormBuilder, Validators, FormGroup } from '@angular/forms';



var AgregarProductoPage = (function () {
    function AgregarProductoPage(navCtrl, navParams, http, toast, alertCtrl, loading, fb, _IMAGES, toastCtrl, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.fb = fb;
        this._IMAGES = _IMAGES;
        this.toastCtrl = toastCtrl;
        this.ServiceProvider = ServiceProvider;
        this.id_cliente = JSON.parse(localStorage.getItem('id_cliente'));
        this.getBusiness();
        this.getAllCategories();
    }
    AgregarProductoPage.prototype.getBusiness = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.posts = data[0]['empresa'].filter(function (item) { return item.id_cliente === _this.id_cliente; });
            _this.initializeItems();
        }, function (err) {
            console.log(err);
        });
    };
    AgregarProductoPage.prototype.getAllCategories = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.categories = data[4]['categorias'];
        }, function (err) {
            console.log(err);
        });
    };
    AgregarProductoPage.prototype.ngOnInit = function () {
        //this.id_cliente = this.navParams.get('id_cliente');
        this.item = JSON.parse(localStorage.getItem('id_empresa'));
        this.form = this.fb.group({
            productos: this.initProductoFields(),
        });
        //detecta cuando hay algun cambio en el formulario
        this.form.get('productos').valueChanges.subscribe(function (changes) {
            console.log(changes);
        });
    };
    AgregarProductoPage.prototype.initializeItems = function () {
        this.items = this.posts;
    };
    AgregarProductoPage.prototype.initProductoFields = function () {
        this.productos = this.fb.array([
            this.buildGroup()
        ]);
        return this.productos;
    };
    AgregarProductoPage.prototype.buildGroup = function () {
        return this.fb.group({
            selectedSubcategory: [""],
            IdEmpresario: [""],
            name: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            namefile: [""],
            typefile: [""],
            image: [""],
            price: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern("[0-9]*")]],
            categoria: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            //otraCategoria: [""],
            subcategoria: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            //otraSubcategoria: [""],
            description: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            picture: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
        } //, { validator: this.customValidators }
        );
    };
    /*
        customValidators(group: FormGroup) {
    
            var otra = group.controls['otraCategoria'];
    
            if (otra.value != '') {
    
    
                return null;
            }
    
    
    
            return { 'requiredOtraOpcion': true };
    
        }
    */
    AgregarProductoPage.prototype.addNewInputField = function () {
        this.productos.push(this.buildGroup());
    };
    AgregarProductoPage.prototype.removeInputField = function (i) {
        this.productos.removeAt(i);
    };
    AgregarProductoPage.prototype.selectFileToUpload = function (event, index) {
        var _this = this;
        //obtiene el id_empresario
        this.productos.controls[index].controls['IdEmpresario'].value = this.id_cliente;
        //this.productos.controls[index].value.IdEmpresario = this.id_cliente;
        this.productos.controls[index].controls['namefile'].value = event.target.files[0].name;
        this.productos.controls[index].controls['typefile'].value = event.target.files[0].type;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Recupere el tipo de archivo de la cadena de URI de datos base64
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Verifica si el tipo de archivo es el correcto?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                //Muestra la Imagen
                //this.image = res;
                _this.productos.controls[index].image = res;
                //this.productos.controls[index].value.picture = res;
                _this.productos.controls[index].controls['picture'].value = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
            if (_this.productos.controls[index].value['picture'].includes('fakepath')) {
                _this.productos.controls[index].value['picture'] = res;
                _this.productos.controls[index].value['IdEmpresario'] = _this.id_cliente;
                _this.productos.controls[index].value['namefile'] = event.target.files[0].name;
                _this.productos.controls[index].value['typefile'] = event.target.files[0].type;
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    //seleccionar subcategoria de acuerdo a la categoria seleccionado
    AgregarProductoPage.prototype.subcategories = function (categoria, index) {
        //var value = this.productos.controls[index].categoria = categoria;
        this.productos.controls[index].selectedSubcategory = this.categories.filter(function (item) { return item.categoria === categoria; });
    };
    AgregarProductoPage.prototype.submitForm = function () {
        /*    let resources = JSON.stringify(this.form.value);
            console.log(resources);
    
    */
        var _this = this;
        var loader = this.loading.create({
            content: 'Procesando por favor espere…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.addProduct(_this.form.value).subscribe(function (result) {
                console.log(result);
                loader.dismiss();
                _this.form.reset();
                _this.image = null;
                var alert = _this.alertCtrl.create({
                    title: "HECHO",
                    subTitle: ("registro exitoso"),
                    buttons: ['OK']
                });
                alert.present();
                //this.ParametroService.myParam = this.empresa;
                var empresa = JSON.stringify(_this.item.id_empresa);
                localStorage.setItem('id_empresa', empresa);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { item: _this.item });
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se registró el producto"),
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    AgregarProductoPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Heads up!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("name"),
        __metadata("design:type", Object)
    ], AgregarProductoPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("price"),
        __metadata("design:type", Object)
    ], AgregarProductoPage.prototype, "price", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("description"),
        __metadata("design:type", Object)
    ], AgregarProductoPage.prototype, "description", void 0);
    AgregarProductoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agregar-producto',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\agregar-producto\agregar-producto.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agregar Productos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="items">\n\n    <div *ngIf="items?.length == 0">\n      <h2>Para poder Agregar Productos, primero debes registrar tu Empresa, Gracias.</h2>\n    </div>\n\n    <div *ngIf="items?.length != 0">\n\n      <form [formGroup]="form">\n\n\n        <ion-list no-line>\n\n          <H2>Productos</H2><br>\n          <h4>Por favor registre tus productos, ten en cuenta que puedes agregar varios\n            productos a la vez\n            dando click en + AGREGAR PRODUCTO, revisa que no esten ingresando productos repetidos, por ultimo da\n            Click en el Botón Registrar. Gracias</h4>\n          <br>\n\n          <p>Todos los campos con * son obligatorios, llene todos los datos para poder registrar</p>\n\n\n          <!-- asignar productos FormArray al formulario para generar un nuevo campo -->\n\n          <div formArrayName="productos" margin-bottom>\n            <p>Agrega productos : </p>\n\n            <!-- Agregar nuevos productos -->\n            <div *ngFor="let retur of productos.controls; let i=index" [formGroupName]="i">\n              <ion-item-group>\n                <ion-item-divider color="light">Producto #{{ i + 1 }}</ion-item-divider><br />\n\n\n\n                <ion-item>\n                  <ion-icon name="basket" item-start></ion-icon>\n                  <ion-label stacked>Nombre del producto*</ion-label>\n                  <ion-input type="text" name="name" #name formControlName="name"></ion-input>\n                </ion-item>\n                <div *ngIf="retur.get(\'name\').touched && retur.get(\'name\').hasError(\'required\')">\n                  <p>Nombre de producto es requerido!</p>\n                </div>\n\n\n                <ion-item>\n                  <ion-icon name="pricetag" item-start></ion-icon>\n                  <ion-label stacked>Precio *</ion-label>\n                  <ion-input type="number" name="price" #price formControlName="price"></ion-input>\n                </ion-item>\n                <div *ngIf="retur.get(\'price\').touched && retur.get(\'price\').hasError(\'required\')">\n                  <p>Precio de producto es requerido.</p>\n                </div>\n                <div *ngIf="retur.get(\'price\').touched && retur.get(\'price\').hasError(\'pattern\')">\n                  <p>Ingrese el valor sin puntos, ni comas.</p>\n                </div>\n\n\n                <ion-item>\n                  <ion-icon name="list" item-start></ion-icon>\n                  <ion-label>Categoría</ion-label>\n                  <ion-select [(ngModel)]="retur.category" name="categoria" #categoria formControlName="categoria"\n                    (ionChange)="subcategories($event,i)">\n                    <ion-option *ngFor="let category of categories; let i = index" value="{{category.categoria}}">{{category.categoria}}</ion-option>\n                    <!--<ion-option value="Otra">Otra</ion-option>-->\n                  </ion-select>\n                </ion-item>\n                <div *ngIf="retur.get(\'categoria\').touched && retur.get(\'categoria\').hasError(\'required\')">\n                  <p>Categoria del producto es requerido!</p>\n                </div>\n\n                <!--\n                <div *ngIf="retur.category == \'Otra\'">\n                  <ion-item>\n                    <ion-label stacked>Cual: *</ion-label>\n                    <ion-input type="text" name="otraCategoria" #otraCategoria formControlName="otraCategoria"></ion-input>\n                  </ion-item>\n\n                  <div *ngIf="retur.get(\'otraCategoria\').touched && retur.hasError(\'requiredOtraOpcion\')">\n                    <p>Otra Categoria es requerido!.</p>\n                  </div>\n\n                </div>\n              -->\n\n                <!--Subcategoria-->\n\n                <ion-item *ngFor="let x of retur.selectedSubcategory">\n                  <ion-icon name="list" item-start></ion-icon>\n                  <ion-label>Subcategoria</ion-label>\n                  <ion-select name="subcategoria" #subcategoria formControlName="subcategoria">\n                    <ion-option *ngFor="let subcategory of x.subcategoria" value="{{subcategory.subcategoria}}">{{subcategory.subcategoria}}</ion-option>\n                    <!--<ion-option value="Otra">Otra</ion-option>-->\n                  </ion-select>\n                </ion-item>\n                <div *ngIf="retur.get(\'subcategoria\').touched && retur.get(\'subcategoria\').hasError(\'required\')">\n                  <p>Subcategoria del producto es requerido!</p>\n                </div>\n\n\n\n                <ion-item>\n                  <ion-icon name="paper" item-start></ion-icon>\n                  <ion-label stacked>Descripción del producto*</ion-label>\n                  <ion-textarea name="description" #description formControlName="description" rows="6" maxLength="500"></ion-textarea>\n                </ion-item>\n                <div *ngIf="retur.get(\'description\').touched && retur.get(\'description\').hasError(\'required\')">\n                  <p>Descripción del producto es requerido!</p>\n                </div>\n\n                <ion-item>\n                  <ion-icon name="image" item-start></ion-icon>\n                  <ion-label text-wrap>Imagen*</ion-label>\n                  <ion-input type="file" accept="image/*" (change)="selectFileToUpload($event, i)" formControlName="picture"></ion-input>\n                </ion-item>\n\n\n                <div *ngIf="retur.get(\'picture\').touched && retur.get(\'picture\').hasError(\'required\')">\n                  <p>Imagen del producto es requerido!</p>\n                </div>\n\n\n\n                <div *ngIf="retur.image">\n                  <ion-label>Preview</ion-label>\n                  <img class="imagen" [src]="retur.image | safe" />\n                </div>\n                <br />\n\n\n\n                <!-- Permite eliminar las productos ingresadas antes de enviar -->\n                <button float-right ion-button icon-left clear *ngIf="form.controls.productos.length > 1" (click)="removeInputField(i)">\n                  <ion-icon name="close"></ion-icon>\n                  Eliminar\n                </button>\n\n\n              </ion-item-group>\n\n\n            </div>\n          </div>\n\n\n          <br />\n\n\n          <!-- PERMITE PODER REGISTRAR OTRO PRODUCTO, POR SI TIENE MAS DE UNA -->\n          <span ion-button float-left icon-left clear (click)="addNewInputField()">\n            <ion-icon name="add"></ion-icon>\n            AGREGAR PRODUCTO\n          </span>\n\n\n          <button class="registrar" ion-button round outline block [disabled]="!form.valid" (click)="submitForm()">Guardar</button>\n\n\n\n        </ion-list>\n\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\agregar-producto\agregar-producto.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AgregarProductoPage);
    return AgregarProductoPage;
}());

//# sourceMappingURL=agregar-producto.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarProductosOfertaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AgregarProductosOfertaPage = (function () {
    function AgregarProductosOfertaPage(navCtrl, navParams, http, toast, alertCtrl, loading, fb, _IMAGES, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.fb = fb;
        this._IMAGES = _IMAGES;
        this.ServiceProvider = ServiceProvider;
        this.id_cliente = JSON.parse(localStorage.getItem('id_cliente'));
        this.getBusiness();
        this.getAllCategories();
    }
    AgregarProductosOfertaPage.prototype.getBusiness = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.posts = data[0]['empresa'].filter(function (item) { return item.id_cliente === _this.id_cliente; });
            _this.initializeItems();
        }, function (err) {
            console.log(err);
        });
    };
    AgregarProductosOfertaPage.prototype.getAllCategories = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.categories = data[4]['categorias'];
        }, function (err) {
            console.log(err);
        });
    };
    AgregarProductosOfertaPage.prototype.ngOnInit = function () {
        this.item = JSON.parse(localStorage.getItem('id_empresa'));
        this.form = this.fb.group({
            fechaInicioOferta: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            fechaFinOferta: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]],
            diasOferta: [""],
            productos: this.initProductoFields()
        });
    };
    AgregarProductosOfertaPage.prototype.initializeItems = function () {
        this.items = this.posts;
    };
    AgregarProductosOfertaPage.prototype.initProductoFields = function () {
        this.productos = this.fb.array([
            this.buildGroup()
        ]);
        return this.productos;
    };
    AgregarProductosOfertaPage.prototype.buildGroup = function () {
        return this.fb.group({
            selectedSubcategory: [""],
            name: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            namefile: [""],
            typefile: [""],
            image: [""],
            price: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern("[0-9]*")]],
            description: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            categoria: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            subcategoria: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
            IdEmpresario: [""],
            precioOferta: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern("[0-9]*")]],
            picture: ["", __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required],
        }, { validator: this.customValidators });
    };
    AgregarProductosOfertaPage.prototype.customValidators = function (group) {
        var normalprice = group.controls['price'];
        var offerprice = group.controls['precioOferta'];
        if (offerprice.value * 1 < normalprice.value * 1) {
            return null;
        }
        return { 'priceOutOfRange': true };
    };
    AgregarProductosOfertaPage.prototype.changedate = function () {
        var fecha = this.date.split('-');
        this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));
        console.log(this.minDate);
    };
    AgregarProductosOfertaPage.prototype.changeFinDate = function () {
        /*var fechaFin = this.date2.split('-');
        this.diasOferta = (fechaFin[2].slice(0, 2));
        var fechaInicio = this.date.split('-');
        this.diasOferta2 = (fechaInicio[2].slice(0, 2));
        this.form.controls['diasOferta'].setValue((this.diasOferta - this.diasOferta2) + 1);
        */
        var startDate = __WEBPACK_IMPORTED_MODULE_7_moment__(this.date);
        var endDate = __WEBPACK_IMPORTED_MODULE_7_moment__(this.date2);
        this.secondsDiff = endDate.diff(startDate, 'days') + 1;
        this.form.controls['diasOferta'].setValue(this.secondsDiff);
    };
    AgregarProductosOfertaPage.prototype.addNewInputField = function () {
        this.productos.push(this.buildGroup());
    };
    AgregarProductosOfertaPage.prototype.removeInputField = function (i) {
        this.productos.removeAt(i);
    };
    AgregarProductosOfertaPage.prototype.selectFileToUpload = function (event, index) {
        var _this = this;
        this.productos.controls[index].controls['IdEmpresario'].value = this.id_cliente;
        this.productos.controls[index].controls['namefile'].value = event.target.files[0].name;
        this.productos.controls[index].controls['typefile'].value = event.target.files[0].type;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Retrieve the file type from the base64 data URI string
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Verifica si el tipo de archivo es el correcto?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                //Muestra la Imagen
                _this.productos.controls[index].image = res;
                _this.productos.controls[index].controls['picture'].value = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
            if (_this.productos.controls[index].value['picture'].includes('fakepath')) {
                _this.productos.controls[index].value['picture'] = res;
                _this.productos.controls[index].value['IdEmpresario'] = _this.id_cliente;
                _this.productos.controls[index].value['namefile'] = event.target.files[0].name;
                _this.productos.controls[index].value['typefile'] = event.target.files[0].type;
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    AgregarProductosOfertaPage.prototype.subcategories = function (categoria, index) {
        this.productos.controls[index].selectedSubcategory = this.categories.filter(function (item) { return item.categoria === categoria; });
    };
    AgregarProductosOfertaPage.prototype.submitForm = function () {
        /*
            let resources = JSON.stringify(this.form.value);
            console.log(resources);
        */
        var _this = this;
        var loader = this.loading.create({
            content: 'Procesando por favor espere…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.addProduct(_this.form.value).subscribe(function (result) {
                console.log(result);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "HECHO",
                    subTitle: ("registro exitoso"),
                    buttons: ['OK']
                });
                alert.present();
                var empresa = JSON.stringify(_this.item.id_empresa);
                localStorage.setItem('id_empresa', empresa);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */], { item: _this.item });
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se registró el producto"),
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    AgregarProductosOfertaPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Heads up!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("name"),
        __metadata("design:type", Object)
    ], AgregarProductosOfertaPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("price"),
        __metadata("design:type", Object)
    ], AgregarProductosOfertaPage.prototype, "price", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("description"),
        __metadata("design:type", Object)
    ], AgregarProductosOfertaPage.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fechaFinOferta"),
        __metadata("design:type", Object)
    ], AgregarProductosOfertaPage.prototype, "fechaFinOferta", void 0);
    AgregarProductosOfertaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agregar-productos-oferta',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\agregar-productos-oferta\agregar-productos-oferta.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Agregar Productos en Oferta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div *ngIf="items">\n\n    <div *ngIf="items?.length == 0">\n      <h2>Para poder Agregar Productos, primero debes registrar tu Empresa, Gracias.</h2>\n    </div>\n\n    <div *ngIf="items?.length != 0">\n\n      <form [formGroup]="form" (ngSubmit)="submitForm()">\n\n\n        <ion-list no-line>\n\n          <H2>Productos</H2><br>\n          <h4>Por favor registre tus productos, ten en cuenta que puedes agregar varios\n            productos a la vez\n            dando click en + AGREGAR PRODUCTO, revisa que no esten ingresando productos repetidos, por ultimo da\n            Click en el Botón Guardar. Gracias</h4>\n          <br>\n\n          <p>Todos los campos con * son obligatorios, llene todos los campos para poder registrar</p>\n          <p>Ingrese Fecha de Inicio y Fecha de Fin los productos en oferta que se incluyan en esa fecha, si tiene\n            promoción de productos en fecha distinta\n            registralos en un nuevo formulario. </p><br />\n\n\n          <ion-item>\n            <ion-icon name="calendar" item-start></ion-icon>\n            <ion-label>Fecha y hora Inicio de Oferta*</ion-label>\n            <ion-datetime name="fechaInicioOferta" #fechaInicioOferta formControlName="fechaInicioOferta" displayFormat="MMM/DD/YYYY, h:mm A"\n              min="2019" max="2030" [(ngModel)]="date" (ionChange)="changedate($event)" cancelText=\'cancelar\' doneText=\'Hecho\'\n              monthNames="Enero, Febrero, Marzo, Abril , Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"\n              monthShortNames="Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic"></ion-datetime>\n          </ion-item>\n          <!--\n          <ion-datetime display-format="MMM DD, YYYY HH:mm"></ion-datetime>\n          displayFormat="D MMM YYYY H:mm"-->\n\n          <div *ngIf="form.controls.fechaInicioOferta.touched && form.controls.fechaInicioOferta.hasError(\'required\')">\n            <p>Fecha Inico de oferta es requerido!</p>\n          </div>\n\n          <ion-item *ngIf="minDate">\n            <ion-icon name="calendar" item-start></ion-icon>\n            <ion-label>Fecha y hora Fin de Oferta*</ion-label>\n            <ion-datetime name="fechaFinOferta" #fechaFinOferta formControlName="fechaFinOferta" displayFormat="MMM/DD/YYYY, h:mm A"\n              min="{{minDate}}" max="2030" [(ngModel)]="date2" (ionChange)="changeFinDate($event)" cancelText=\'cancelar\'\n              doneText=\'Hecho\' monthNames="Enero, Febrero, Marzo, Abril , Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"\n              monthShortNames="Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic"></ion-datetime>\n          </ion-item>\n\n          <div *ngIf="form.controls.fechaFinOferta.touched && form.controls.fechaFinOferta.hasError(\'required\')">\n            <p>Fecha Fin de oferta es requerido!</p>\n          </div>\n\n\n          <div formArrayName="productos" margin-bottom>\n            <p>Agrega productos : </p>\n\n            <!-- Agregar nuevos productos -->\n            <div *ngFor="let retur of productos.controls; let i=index" [formGroupName]="i">\n              <ion-item-group>\n                <ion-item-divider color="light">Producto #{{ i + 1 }}</ion-item-divider><br />\n\n                <ion-item>\n                  <ion-icon name="basket" item-start></ion-icon>\n                  <ion-label stacked>Nombre del producto*</ion-label>\n                  <ion-input type="text" name="name" #name formControlName="name"></ion-input>\n                </ion-item>\n                <div *ngIf="retur.get(\'name\').touched && retur.get(\'name\').hasError(\'required\')">\n                  <p>Nombre de producto es requerido!</p>\n                </div>\n\n                <ion-item>\n                  <ion-icon name="pricetag" item-start></ion-icon>\n                  <ion-label stacked>Precio Normal*</ion-label>\n                  <ion-input type="number" name="price" #price formControlName="price"></ion-input>\n                </ion-item>\n                <div *ngIf="retur.get(\'price\').touched && retur.get(\'price\').hasError(\'required\')">\n                  <p>Precio de producto es requerido!, Ingrese el valor sin incluir el signo $, ni puntos ni comas.</p>\n                </div>\n                <div *ngIf="retur.get(\'price\').touched && retur.get(\'price\').hasError(\'pattern\')">\n                  <p>Ingrese el valor sin puntos, ni comas.</p>\n                </div>\n\n\n\n                <ion-item>\n                  <ion-icon name="cash" item-start></ion-icon>\n                  <ion-label stacked>Precio Oferta* </ion-label>\n                  <ion-input type="number" name="precioOferta" #precioOferta formControlName="precioOferta"></ion-input>\n                </ion-item>\n\n                <div *ngIf="retur.get(\'precioOferta\').touched  && retur.get(\'precioOferta\').hasError(\'required\')">\n                  <p>Precio oferta es requerido.!</p>\n                </div>\n\n                <div *ngIf="retur.get(\'precioOferta\').touched && retur.get(\'precioOferta\').hasError(\'pattern\')">\n                  <p>Ingrese el valor sin puntos, ni comas.</p>\n                </div>\n\n\n                <div *ngIf="retur.get(\'precioOferta\').touched  && retur.hasError(\'priceOutOfRange\')">\n                  <p>Precio Oferta no puede ser mayor o igual al Precio Normal!.</p>\n                </div>\n\n\n\n                <ion-item>\n                  <ion-icon name="list" item-start></ion-icon>\n                  <ion-label>Categoría</ion-label>\n                  <ion-select [(ngModel)]="retur.category" name="categoria" #categoria formControlName="categoria"\n                    (ionChange)="subcategories($event,i)">\n                    <ion-option *ngFor="let category of categories; let i = index" value="{{category.categoria}}">{{category.categoria}}</ion-option>\n                  </ion-select>\n                </ion-item>\n                <div *ngIf="retur.get(\'categoria\').touched && retur.get(\'categoria\').hasError(\'required\')">\n                  <p>Categoria del producto es requerido!</p>\n                </div>\n\n\n\n                <!--Subcategoria-->\n\n                <ion-item *ngFor="let x of retur.selectedSubcategory">\n                  <ion-icon name="list" item-start></ion-icon>\n                  <ion-label>Subcategoria</ion-label>\n                  <ion-select name="subcategoria" #subcategoria formControlName="subcategoria">\n                    <ion-option *ngFor="let subcategory of x.subcategoria" value="{{subcategory.subcategoria}}">{{subcategory.subcategoria}}</ion-option>\n                  </ion-select>\n                </ion-item>\n                <div *ngIf="retur.get(\'subcategoria\').touched && retur.get(\'subcategoria\').hasError(\'required\')">\n                  <p>Subcategoria del producto es requerido!</p>\n                </div>\n\n\n\n                <ion-item>\n                  <ion-icon name="paper" item-start></ion-icon>\n                  <ion-label stacked>Descripción del producto*</ion-label>\n                  <ion-textarea name="description" #description formControlName="description" rows="6" maxLength="500"></ion-textarea>\n                </ion-item>\n                <div *ngIf="retur.get(\'description\').touched && retur.get(\'description\').hasError(\'required\')">\n                  <p>Descripción del producto es requerido!</p>\n                </div>\n\n                <ion-item>\n                  <ion-icon name="image" item-start></ion-icon>\n                  <ion-label>*Imagen</ion-label>\n                  <ion-input type="file" accept="image/*" name="picture" #picture formControlName="picture" (change)="selectFileToUpload($event,i)"></ion-input>\n                </ion-item>\n                <div *ngIf="retur.get(\'picture\').touched && retur.get(\'picture\').hasError(\'required\')">\n                  <p>Imagen del producto es requerido!</p>\n                </div>\n\n\n                <div *ngIf="retur.image">\n                  <ion-label>Preview</ion-label>\n                  <img class="imagen" [src]="retur.image | safe" />\n                </div>\n                <br />\n\n\n                <!-- Permite eliminar las productos ingresadas antes de enviar -->\n                <button float-right ion-button icon-left clear *ngIf="form.controls.productos.length > 1" (click)="removeInputField(i)">\n                  <ion-icon name="close"></ion-icon>\n                  Eliminar\n                </button>\n\n              </ion-item-group>\n\n            </div>\n          </div><br />\n\n          <!-- PERMITE PODER REGISTRAR OTRO PRODUCTO, POR SI TIENE MAS DE UNA -->\n          <span ion-button float-left icon-left clear (click)="addNewInputField()">\n            <ion-icon name="add"></ion-icon>\n            AGREGAR PRODUCTO\n          </span>\n\n          <button class="registrar" ion-button round outline block [disabled]="!form.valid">Guardar</button>\n\n        </ion-list>\n\n\n      </form>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\agregar-productos-oferta\agregar-productos-oferta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_image_image__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AgregarProductosOfertaPage);
    return AgregarProductosOfertaPage;
}());

//# sourceMappingURL=agregar-productos-oferta.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, loading, userData, menuCtrl, toastCtrl, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.userData = userData;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.ServiceProvider = ServiceProvider;
        this.showPass = false;
        this.type = 'password';
        this.login = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.isLoggedIn = localStorage.getItem('login');
        if (this.isLoggedIn !== null) {
            this.login = true;
        }
        console.log(this.isLoggedIn);
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.signIn = function () {
        //form: NgForm
        //// check to confirm the username and password fields are filled
        var _this = this;
        if (this.correo.value == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Atención",
                subTitle: "Campo correo está vacio",
                buttons: ['OK']
            });
            alert_1.present();
        }
        else if (this.password.value == "") {
            var alert_2 = this.alertCtrl.create({
                title: "Atención",
                subTitle: "Campo contraseña está vacio",
                buttons: ['OK']
            });
            alert_2.present();
        }
        else {
            /*
                    var headers = new HttpHeaders();
                    headers.append("Accept", 'application/json');
                    headers.append('Content-Type', 'application/json;charset=UTF-8');
                    headers.append('Access-Control-Allow-Origin', '*');
                    //let options = new RequestOptions({ headers: headers });
                    */
            var data_1 = {
                correo: this.correo.value,
                password: this.password.value
            };
            var loader_1 = this.loading.create({
                content: 'Procesando por favor espera...',
            });
            loader_1.present().then(function () {
                _this.ServiceProvider.login(data_1).subscribe(function (response) {
                    console.log(response);
                    loader_1.dismiss();
                    /*
        this.http.post('http://localhost/ionic-php-mysql/login.php', data, { headers: headers })
          .subscribe(res => {
            console.log(res);
            loader.dismiss();
        */
                    if (response == "empresario") {
                        _this.toastCtrl.create({
                            message: "Bienvenido: Cliente",
                            duration: 2000,
                            position: 'middle'
                        }).present();
                        _this.userData.login(_this.correo.value);
                        //this.navCtrl.push(AccountPage);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__account_account__["a" /* AccountPage */]);
                        _this.correo.setValue('');
                        _this.password.setValue('');
                        return;
                    }
                    else if (response == "administrador") {
                        _this.toastCtrl.create({
                            message: "Bienvenido: Administrador",
                            duration: 2000,
                            position: 'middle'
                        }).present();
                        _this.userData.loginAdmin(_this.correo.value);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__admin_admin__["a" /* AdminPage */]);
                        _this.correo.setValue('');
                        _this.password.setValue('');
                    }
                    else if (response == "usuario") {
                        _this.toastCtrl.create({
                            message: "Bienvenido: Usuario",
                            duration: 2000,
                            position: 'middle'
                        }).present();
                        _this.userData.loginUser(_this.correo.value);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__usuario_usuario__["a" /* UsuarioPage */]);
                        _this.correo.setValue('');
                        _this.password.setValue('');
                    }
                    else if (response == "verifica correo") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "ALERTA",
                            subTitle: "Aun no has confirmado correo electrónico, por favor ingresa a tu correo. ",
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                    else if (response == "datos erroneos") {
                        var alert_4 = _this.alertCtrl.create({
                            title: "ALERTA",
                            subTitle: "Tu correo o contraseña son incorrectos, verifica",
                            buttons: ['OK']
                        });
                        alert_4.present();
                    }
                }, function (err) {
                    console.log(err);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: "Algo salió mal",
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.password.setValue('');
                });
            });
        }
    };
    LoginPage.prototype.ResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    LoginPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.logout = function () {
        localStorage.clear();
        this.userData.logout();
        this.navCtrl.setRoot('LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("correo"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "correo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("password"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("loginMode"),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "loginMode", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\login\login.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Login</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<!--<ion-menu [disabled]="!isLoggedIn"></ion-menu>-->\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/commer.jpeg" alt="Ionic logo">\n	</div>\n\n	<!---->\n	<ion-item *ngIf="isLoggedIn != null">\n		<h2>Tienes que Salir de tu cuenta actual, para poder iniciar sesion</h2><br />\n		<button ion-button round block (click)="logout()">Salir</button>\n	</ion-item>\n\n	<form #loginForm="ngForm" novalidate *ngIf="isLoggedIn == null">\n\n\n		<ion-list>\n\n			<ion-item>\n				<ion-icon name="person" item-left></ion-icon>\n				<ion-input round type="text" placeholder="Correo" name="correo" #correo></ion-input>\n			</ion-item>\n\n\n			<div (capsLock)="capsOn=$event">\n				<ion-item>\n\n					<ion-icon name="key" item-left></ion-icon>\n\n\n					<ion-input type="{{type}}" name="password" placeholder="Password" name="password" #password style="width: 40px;"\n					 no-lines>\n					</ion-input>\n\n					<ion-icon name="eye" *ngIf="!showPass" color="dark" item-right (click)="showPassword()">\n						<!--<ion-icon name="eye" style="font-size:25px;"></ion-icon>-->\n					</ion-icon>\n\n					<ion-icon name="eye-off" *ngIf="showPass" color="dark" item-right (click)="showPassword()">\n						<!--<ion-icon name="eye-off" style="font-size:25px;"></ion-icon>-->\n					</ion-icon>\n\n				</ion-item>\n\n				<label *ngIf="capsOn">la tecla Bloq Mayús está activada</label>\n			</div>\n\n			<button ion-button round block (click)="signIn(loginForm)">Ingresar</button>\n			<button ion-button round outline block (click)="signUp()">Registrar</button>\n			<button ion-button round outline block (click)="ResetPassword()">Olvide contraseña</button>\n\n		</ion-list>\n	</form>\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';


//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';



var SignupPage = (function () {
    function SignupPage(navCtrl, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        //@ViewChild("terms") terms;
        this.submitted = false;
    }
    SignupPage.prototype.onChange = function () {
        if (this.membership == '1') {
            this.value = 0;
        }
        else if (this.membership == '2') {
            this.value = 1;
        }
    };
    SignupPage.prototype.ngOnInit = function () {
        this.buildForm();
        this.setUserValidators();
    };
    SignupPage.prototype.buildForm = function () {
        var EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.authForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(50)]),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(12)]),
            //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
            passwordRetyped: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            mobile: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10)]),
            terms: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](false, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('true')]),
            //terms: [false, Validators.pattern('true')]
            option: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            identificacion: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
            matricula: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]),
        });
    };
    SignupPage.prototype.setUserValidators = function () {
        var identificacionControl = this.authForm.get('identificacion');
        var matriculaControl = this.authForm.get('matricula');
        this.authForm.get('option').valueChanges
            .subscribe(function (userOption) {
            if (userOption === '1') {
                //institutionControl.setValidators([Validators.required]);
                identificacionControl.setValue('');
                matriculaControl.setValue('');
                identificacionControl.setValidators(null);
                matriculaControl.setValidators(null);
            }
            if (userOption === '2') {
                identificacionControl.setValidators([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
                matriculaControl.setValidators([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
            }
            identificacionControl.updateValueAndValidity();
            matriculaControl.updateValueAndValidity();
            //salaryControl.updateValueAndValidity();
        });
    };
    SignupPage.prototype.Register = function () {
        var _this = this;
        this.submitted = true;
        if (this.password.value !== this.passwordRetyped.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'Las contraseñas no coinciden.',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        else {
            var data_1 = {
                option: this.option.value,
                username: this.username.value,
                password: this.password.value,
                mobile: this.mobile.value,
                email: this.email.value,
                identificacion: this.identificacion.value,
                matricula: this.matricula.value
            };
            console.log(data_1);
            var loader_1 = this.loading.create({
                content: 'Procesando por favor espere…',
            });
            loader_1.present().then(function () {
                _this.ServiceProvider.register(data_1).subscribe(function (response) {
                    console.log(response);
                    loader_1.dismiss();
                    loader_1.dismiss();
                    if (response == "El correo ya esta registrado !!") {
                        var alert_2 = _this.alertCtrl.create({
                            title: "Alerta",
                            subTitle: ("Este correo: " + _this.email.value + " ya está registrado"),
                            buttons: ['OK']
                        });
                        alert_2.present();
                        return;
                    }
                    else if (response == "El mensaje se ha enviado") {
                        //valores nulos formulario
                        _this.authForm.reset();
                        var alert_3 = _this.alertCtrl.create({
                            title: "Felicitaciones",
                            subTitle: ("Registro exitoso, por favor verifica el correo electrónico, para poder ingresar"),
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    }
                }, function (err) {
                    console.log(err);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: ("No se pudo hacer el registro"),
                        buttons: ['OK']
                    });
                    alert.present();
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("option"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "option", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("username"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mobile"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("password"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("passwordRetyped"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "passwordRetyped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("identificacion"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "identificacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("matricula"),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "matricula", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\signup\signup.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Registro</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <div class="logo">\n\n        <img src="assets/img/commer.jpeg" alt="Commerline Logo">\n\n    </div>\n\n\n\n    <form [formGroup]="authForm" (ngSubmit)="Register()">\n\n\n\n        <ion-list no-line>\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.option.valid && authForm.controls.option.touched}">\n\n                <ion-label>Registrar como</ion-label>\n\n\n\n                <ion-select formControlName="option" name="option" #option [(ngModel)]="membership" (ionChange)="onChange(membership)">\n\n\n\n                    <ion-option value="1">Usuario</ion-option>\n\n                    <ion-option value="2">Empresario</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <div *ngIf="authForm.controls.option.hasError(\'required\') && authForm.controls.option.touched">\n\n                <p>escoge una opción!</p>\n\n            </div>\n\n\n\n\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n\n                <ion-label stacked>Nombre de usuario</ion-label>\n\n                <ion-input formControlName="username" type="text" name="fullname" #username></ion-input>\n\n            </ion-item>\n\n\n\n            <div *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n\n                <p>Nombre de usuario es requerido</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n\n                <p>Permitido solo letras</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n\n                <p>Longitud mínima del nombre de usuario es 4!</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n\n                <p>Longiud máxima del nombre de usuario es 20!</p>\n\n            </div>\n\n\n\n\n\n            <div [hidden]="!value">\n\n                <ion-item [ngClass]="{\'error-border\':!authForm.controls.identificacion.valid && authForm.controls.identificacion.touched}">\n\n                    <ion-label stacked>Identificación</ion-label>\n\n                    <ion-input formControlName="identificacion" type="number" name="identificacion" #identificacion></ion-input>\n\n                </ion-item>\n\n                <div *ngIf="authForm.controls.identificacion.hasError(\'required\') && authForm.controls.identificacion.touched">\n\n                    <p>Identificación es requerido!</p>\n\n                </div>\n\n\n\n                <ion-item [ngClass]="{\'error-border\':!authForm.controls.matricula.valid && authForm.controls.matricula.touched}">\n\n                    <ion-label stacked>Matrícula mercantil</ion-label>\n\n                    <ion-input formControlName="matricula" type="number" name="matricula" #matricula></ion-input>\n\n                </ion-item>\n\n                <div *ngIf="authForm.controls.matricula.hasError(\'required\') && authForm.controls.matricula.touched">\n\n                    <p>matricula mercantil es requerido!</p>\n\n                </div>\n\n            </div>\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n\n                <ion-label stacked>Correo</ion-label>\n\n                <ion-input formControlName="email" type="email" name="email" #email></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n\n                <p>Ingrese su correo electrónico</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n\n                <p>Dirección de correo electrónico no válida</p>\n\n            </div>\n\n\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.mobile.valid && authForm.controls.mobile.touched}">\n\n                <ion-label stacked>Número de celular</ion-label>\n\n                <ion-input formControlName="mobile" type="number" name="mobile" #mobile></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="authForm.controls.mobile.hasError(\'required\') && authForm.controls.mobile.touched">\n\n                <p>campo Número celular es requerido!</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.mobile.hasError(\'minlength\') && authForm.controls.mobile.touched">\n\n                <p>longitud 10 Digitos!</p>\n\n            </div>\n\n\n\n\n\n\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n\n                <ion-label stacked>Contraseña</ion-label>\n\n                <ion-input formControlName="password" type="password" name="password" #password></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n\n                <p>campo contraseña es requerido!</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n\n                <p>longitud minima de contraseña es 6!</p>\n\n            </div>\n\n            <div *ngIf="authForm.controls.password.hasError(\'maxlength\') && authForm.controls.password.touched">\n\n                <p>longitud maxima de contraseña es 12!</p>\n\n            </div>\n\n\n\n\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.passwordRetyped.valid && authForm.controls.passwordRetyped.touched}">\n\n                <ion-label stacked>Repita contraseña</ion-label>\n\n                <ion-input formControlName="passwordRetyped" type="password" name="passwordRetyped" #passwordRetyped></ion-input>\n\n            </ion-item>\n\n            <div *ngIf="authForm.controls.passwordRetyped.hasError(\'required\') && authForm.controls.passwordRetyped.touched">\n\n                <p>repita contraseña es requerido!</p>\n\n            </div>\n\n\n\n            <ion-item [ngClass]="{\'error-border\':!authForm.controls.terms.valid && authForm.controls.terms.touched}">\n\n\n\n                <ion-label>Acepto\n\n                    <a href="#">Terminos & Condiciones</a>\n\n                </ion-label>\n\n                <ion-checkbox formControlName="terms" name="terms" #terms checked="false"></ion-checkbox>\n\n                <!-- <ion-input formControlName="terms" type="checkbox" name="terms" #terms></ion-input>-->\n\n\n\n            </ion-item>\n\n\n\n            <div *ngIf="authForm.controls.terms.hasError(\'required\') && authForm.controls.terms.touched">\n\n                <p>Debe aceptar terminos y condiciones!</p>\n\n            </div>\n\n\n\n\n\n\n\n            <div padding>\n\n\n\n                <button class="register" ion-button round outline block color="primary" [disabled]="!authForm.valid"\n\n                    style="margin-top: 20px;" type="submit">Registrar</button>\n\n            </div>\n\n\n\n\n\n\n\n        </ion-list>\n\n\n\n    </form>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offers_offers__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__business_business__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navParams) {
        // set the root pages for each tab
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__offers_offers__["a" /* OffersPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__business_business__["a" /* BusinessPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */];
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\tabs-page\tabs-page.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Categorias" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Empresas" tabIcon="cart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\tabs-page\tabs-page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs-page.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, http, navParams, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.ServiceProvider = ServiceProvider;
        this.showLevel1 = null;
        this.getCategories();
    }
    CategoriesPage.prototype.getCategories = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.categories = data[8]['categorias'];
        }, function (err) {
            console.log(err);
        });
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriesPage');
    };
    CategoriesPage.prototype.viewCategory = function (subs) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], subs);
    };
    CategoriesPage.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    CategoriesPage.prototype.categoria = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\categories\categories.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>categorias </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <button ion-button icon-end color="primary" item-right (click)="contact()">Paute con nosotros\n      <ion-icon name="megaphone"></ion-icon>\n    </button>\n\n\n    <ion-item-divider>Categorias</ion-item-divider>\n\n    <ion-item *ngFor="let category of categories; let i=index" (click)="categoria(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n\n      <h2>\n        {{ category.categoria }}\n\n        <ion-icon color="success" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n      </h2>\n\n\n\n      <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n        <br />\n\n        <button ion-item *ngFor="let subs of category.subcategoria" (click)="viewCategory(subs)" text-wrap>\n          {{subs.subcategoria}}\n        </button>\n\n      </ion-list>\n    </ion-item>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConferenceData = (function () {
    function ConferenceData(http, user) {
        this.http = http;
        this.user = user;
    }
    ConferenceData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData, this);
        }
    };
    ConferenceData.prototype.processData = function (data) {
        var _this = this;
        // just some good 'ol JS fun with objects and arrays
        // build up the data by linking speakers to sessions
        this.data = data.json();
        this.data.tracks = [];
        // loop through each day in the schedule
        this.data.schedule.forEach(function (day) {
            // loop through each timeline group in the day
            day.groups.forEach(function (group) {
                // loop through each session in the timeline group
                group.sessions.forEach(function (session) {
                    session.speakers = [];
                    if (session.speakerNames) {
                        session.speakerNames.forEach(function (speakerName) {
                            var speaker = _this.data.speakers.find(function (s) { return s.name === speakerName; });
                            if (speaker) {
                                session.speakers.push(speaker);
                                speaker.sessions = speaker.sessions || [];
                                speaker.sessions.push(session);
                            }
                        });
                    }
                    if (session.tracks) {
                        session.tracks.forEach(function (track) {
                            if (_this.data.tracks.indexOf(track) < 0) {
                                _this.data.tracks.push(track);
                            }
                        });
                    }
                });
            });
        });
        return this.data;
    };
    ConferenceData.prototype.getTimeline = function (dayIndex, queryText, excludeTracks, segment) {
        var _this = this;
        if (queryText === void 0) { queryText = ''; }
        if (excludeTracks === void 0) { excludeTracks = []; }
        if (segment === void 0) { segment = 'all'; }
        return this.load().map(function (data) {
            var day = data.schedule[dayIndex];
            day.shownSessions = 0;
            queryText = queryText.toLowerCase().replace(/,|\.|-/g, ' ');
            var queryWords = queryText.split(' ').filter(function (w) { return !!w.trim().length; });
            day.groups.forEach(function (group) {
                group.hide = true;
                group.sessions.forEach(function (session) {
                    // check if this session should show or not
                    _this.filterSession(session, queryWords, excludeTracks, segment);
                    if (!session.hide) {
                        // if this session is not hidden then this group should show
                        group.hide = false;
                        day.shownSessions++;
                    }
                });
            });
            return day;
        });
    };
    ConferenceData.prototype.filterSession = function (session, queryWords, excludeTracks, segment) {
        var matchesQueryText = false;
        if (queryWords.length) {
            // of any query word is in the session name than it passes the query test
            queryWords.forEach(function (queryWord) {
                if (session.name.toLowerCase().indexOf(queryWord) > -1) {
                    matchesQueryText = true;
                }
            });
        }
        else {
            // if there are no query words then this session passes the query test
            matchesQueryText = true;
        }
        // if any of the sessions tracks are not in the
        // exclude tracks then this session passes the track test
        var matchesTracks = false;
        session.tracks.forEach(function (trackName) {
            if (excludeTracks.indexOf(trackName) === -1) {
                matchesTracks = true;
            }
        });
        // if the segement is 'favorites', but session is not a user favorite
        // then this session does not pass the segment test
        var matchesSegment = false;
        if (segment === 'favorites') {
            if (this.user.hasFavorite(session.name)) {
                matchesSegment = true;
            }
        }
        else {
            matchesSegment = true;
        }
        // all tests must be true if it should not be hidden
        session.hide = !(matchesQueryText && matchesTracks && matchesSegment);
    };
    ConferenceData.prototype.getSpeakers = function () {
        return this.load().map(function (data) {
            return data.speakers.sort(function (a, b) {
                var aName = a.name.split(' ').pop();
                var bName = b.name.split(' ').pop();
                return aName.localeCompare(bName);
            });
        });
    };
    ConferenceData.prototype.getTracks = function () {
        return this.load().map(function (data) {
            return data.tracks.sort();
        });
    };
    ConferenceData.prototype.getMap = function () {
        return this.load().map(function (data) {
            return data.map;
        });
    };
    ConferenceData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__user_data__["a" /* UserData */]])
    ], ConferenceData);
    return ConferenceData;
}());

//# sourceMappingURL=conference-data.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OffersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OffersPage = (function () {
    function OffersPage(navCtrl, navParams, ServiceProvider, loading) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ServiceProvider = ServiceProvider;
        this.loading = loading;
        this.showList = false;
        this.showProductsByUbication = false;
        this.ubication = false;
        this.showListUbication = false;
        this.hiddenList = false;
        this.showProductsByLocality = false;
        this.p = 1;
        this.getProducts();
        //obtener ciudades
        this.getCities();
    }
    OffersPage.prototype.getCities = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.ubicacion = data[5]['colombia'];
        }, function (err) {
            console.log(err);
        });
    };
    OffersPage.prototype.getProducts = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.items = data[3]['productos'];
            _this.ofertas = _this.items.filter(function (item) { return item.diasOferta_pro !== ''; });
            _this.initializeItems();
        }, function (err) {
            console.log(err);
        });
    };
    OffersPage.prototype.ngOnInit = function () {
    };
    OffersPage.prototype.slideChanged = function () {
        this.slides.getActiveIndex();
    };
    OffersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OffersPage');
    };
    OffersPage.prototype.initializeItems = function () {
        this.filter = this.items;
        this.filterUbication = this.ubicacion;
        this.filterLocalities = this.items;
        this.p = 1;
    };
    OffersPage.prototype.SearchUbication = function (ev) {
        // Se reinician los valores
        this.initializeItems();
        // establece el valor del buscador
        var val = ev.target.value;
        // comprueba que no este vacio
        if (val && val.trim() != '' && val.length >= 2) {
            // muestra los resultados
            this.showListUbication = true;
            // muestra los productos de acuerdo a la localidad
            this.showProductsByLocality = true;
            this.filterUbication = this.filterUbication.filter(function (ubication) {
                return (ubication.ciudades.some(function (el) { return el.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLocaleLowerCase().indexOf(val.toLowerCase()) > -1; }));
            });
        }
        else {
            // oculta el resultado
            this.showListUbication = false;
            // oculta los productos de acuerdo a la localidad
            this.showProductsByLocality = false;
        }
    };
    OffersPage.prototype.filterLocality = function (municipio) {
        var _this = this;
        // Se reinician los valores
        this.initializeItems();
        // oculta el autocompletar
        this.showListUbication = false;
        //oculta las ofertas
        this.showProductsByUbication = true;
        this.searchFilter = municipio;
        var loader = this.loading.create({
            content: 'Buscando…',
        });
        loader.present().then(function () {
            _this.filterLocalities = _this.items.filter(function (item) { return item.municipio_empresa === municipio; });
            //ir al elemento
            _this.content.scrollTo(0, _this.target.nativeElement.offsetTop, 500);
            loader.dismiss();
        });
        //this.content.scrollToBottom(1500);
    };
    OffersPage.prototype.CancelSearch = function (ev) {
        // oculta los resultados
        this.showProductsByLocality = false;
        //muestra las ofertas
        this.showProductsByUbication = true;
        // reestablece el campo
        ev.target.value = '';
    };
    OffersPage.prototype.onInput = function (ev) {
        // muestra los resultados
        this.showList = true;
        // Se reinician los valores
        this.initializeItems();
        // establece el valor del buscador
        var val = ev.target.value;
        // comprueba que no este vacio
        if (val && val.trim() != '' && val.length > 1) {
            this.filter = this.filter.filter(function (product) {
                return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            // oculta el resultado
            this.showList = false;
        }
    };
    OffersPage.prototype.onCancel = function (ev) {
        // oculta los resultados
        this.showList = false;
        // reestablece el campo
        ev.target.value = '';
    };
    OffersPage.prototype.postDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { product: product });
        var json = JSON.stringify(product);
        localStorage.setItem('product', json);
        console.log(localStorage.setItem('product', json));
        //envia id del producto para verificar si el usuario ya califico un producto
        var id = JSON.stringify(product.id);
        localStorage.setItem('id', id);
    };
    OffersPage.prototype.contact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__support_support__["a" /* SupportPage */]);
    };
    OffersPage.prototype.selectUbication = function () {
        this.ubication = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], OffersPage.prototype, "slides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], OffersPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target'),
        __metadata("design:type", Object)
    ], OffersPage.prototype, "target", void 0);
    OffersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-offers',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\offers\offers.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ofertas</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" [(ngModel)]="searchTerm" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)"\n      placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <button ion-button full color="light" icon-start (click)="selectUbication()">\n    <ion-icon name="navigate"></ion-icon>\n    Seleccione una ubicacion\n  </button>\n\n  <div *ngIf="ubication">\n    <ion-searchbar placeholder="Ingrese la Ciudad" [(ngModel)]="searchFilter" debounce="500" (ionInput)="SearchUbication($event)"\n      (ionCancel)="CancelSearch($event)"></ion-searchbar>\n  </div>\n\n  <ion-list *ngIf="showListUbication">\n    <div *ngFor="let item of filterUbication; let i = index">\n      <button ion-item *ngFor="let municipio of item.ciudades | filterBy:searchFilter" (click)="filterLocality(municipio,i)">\n        {{municipio}}, {{item.departamento}}\n      </button>\n    </div>\n  </ion-list>\n\n  <!--Paute con nosotros-->\n  <button ion-button icon-end color="primary" item-right (click)="contact()">Paute con nosotros\n    <ion-icon name="megaphone"></ion-icon>\n  </button><br><br>\n\n\n  <!--Slides con publicidad-->\n\n  <ion-slides style="height: 50%;" autoplay="5000" loop="true" speed="500" pager="true" (ionSlideDidChange)="slideChanged()"\n    zoom="true">\n    <ion-slide>\n      <img src="assets/publicidad/promocion1.png" alt="Promocion1"> </ion-slide>\n    <ion-slide>\n      <img src="assets/publicidad/promocion2.png" alt="Promocion2"> </ion-slide>\n    <ion-slide>\n      <img src="assets/publicidad/promocion3.jpg" alt="Promocion3"> </ion-slide>\n  </ion-slides>\n\n\n\n  <!--Resultado del filtrado por municipio-->\n  <!--<div id="target">-->\n  <div #target>\n\n    <div *ngIf="filterLocalities?.length == 0 && showProductsByLocality">\n      <p>Este municipio no registra productos, por favor intenta con otro.</p>\n    </div>\n\n    <ion-list *ngIf="filterLocalities?.length != 0 && !showList && showProductsByLocality">\n\n      <ion-item-divider>{{searchFilter}}</ion-item-divider>\n\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of filterLocalities | paginate: { itemsPerPage: 40, currentPage: p } "\n            text-wrap>\n\n\n            <button ion-item (click)="postDetail(product)">\n\n              <span>{{product.nombre_pro}}</span>\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n        responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n        screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n      </pagination-controls>\n\n    </ion-list>\n\n    <!--  </div>-->\n  </div>\n\n  <!--\n  <ion-list *ngIf="showList">\n    <ion-label>Sugerencia</ion-label>\n    <button ion-item *ngFor="let item of filter">\n      {{item.nombre_pro | autocompletewords | unique:nombre_pro }}\n    </button>\n  </ion-list>\n-->\n\n\n\n  <!--Muestra las ofertas, si aun no ha buscado productos, de lo contario se ocultan-->\n\n  <ion-list *ngIf="!showList && !showProductsByUbication && ofertas">\n\n\n    <!--\n    <ion-content padding style="background-color: #f5f5ff"  >\n        <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "#488aff" \n              defaultColor = "red"\n              readonly="false"\n              [rating]="rating">\n        </ionic3-star-rating>\n      \n        Selected rating: {{rating}}\n      </ion-content>\n    -->\n\n    <ion-item-divider>Productos en oferta</ion-item-divider>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of ofertas | paginate: { itemsPerPage: 40, currentPage: p } "\n          text-wrap>\n\n\n          <button ion-item (click)="postDetail(product)">\n\n\n            <h2 ion-text color="secondary">Dias de oferta: {{product.diasOferta_pro}}</h2>\n            <ion-badge class="color" text-wrap>Quedan: {{product.finOferta_pro |\n              offerTime}}</ion-badge>\n            <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}, Fin de oferta:\n              {{product.finOferta_pro}}</h2>\n            <span>{{product.nombre_pro}}</span>\n\n            <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n              <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n            </ion-thumbnail>\n\n            <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n              <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n            </ion-thumbnail>\n\n            <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n            <div *ngIf="product.precioAnterior_pro">\n              <h2>Antes:\n                <del>{{product.precioAnterior_pro}}</del>\n              </h2>\n            </div>\n\n          </button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n  </ion-list>\n\n\n\n  <ion-list *ngIf="showList">\n\n\n\n    <div *ngIf="filter?.length == 0">\n      <p>No se encontraron resultados, por favor intenta de nuevo.</p>\n    </div>\n\n\n    <ion-item *ngIf="filter?.length != 0">\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="pricefilter">\n        <ion-option value="max">Precio: Mayor a menor</ion-option>\n        <ion-option value="min">Precio: Menor a mayor</ion-option>\n        <ion-option value="az">Producto: A-Z</ion-option>\n        <ion-option value="za">Producto: Z-A</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf=" (  !pricefilter )  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of filter | paginate: { itemsPerPage: 40, currentPage: p }"\n            text-wrap>\n\n            <button ion-item (click)="postDetail(product)">\n\n\n              <span class="producto">{{product.nombre_pro}}</span>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'max\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor=" let product of filter | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{ product.nombre_pro }} </h2>\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (pricefilter==\'min\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of filter | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': true | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(product)">\n\n              <span class="producto">{{product.nombre_pro}}</span>\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (pricefilter==\'az\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of filter | orderBy:\'nombre_pro\':true | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <span class="producto">{{product.nombre_pro}}</span>\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" ( pricefilter==\'za\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of filter | orderBy:\'nombre_pro\':false | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <span class="producto">{{product.nombre_pro}}</span>\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\offers\offers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], OffersPage);
    return OffersPage;
}());

//# sourceMappingURL=offers.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            // message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.usernames = '';
            this.emails = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Tu mensaje ha sido enviado.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Salir de esta página?',
                message: 'Estas seguro de dejar esta página? tu mensaje no sera enviado.'
            });
            alert.addButton({ text: 'Permanecer', handler: reject });
            alert.addButton({ text: 'Salir', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\support\support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Contactenos</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/commer.jpeg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n\n	\n\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Nombre</ion-label>\n				<ion-input [(ngModel)]="usernames" name="username" type="text" #username="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="username.valid || submitted == false" color="danger" padding-left>\n				Nombre es requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Correo</ion-label>\n				<ion-input [(ngModel)]="emails" name="email" type="email" #email="ngModel" required pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})">\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email es requerido\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Ingresa tu mensaje</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n\n\n			<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n				Mensaje es requerido\n			</p>\n\n		</ion-list>\n\n		<div padding>\n			<button ion-button block type="submit">Enviar</button>\n		</div>\n	</form>\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__business_products_business_products__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessPage = (function () {
    function BusinessPage(navCtrl, http, navParams, ServiceProvider, loading) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.ServiceProvider = ServiceProvider;
        this.loading = loading;
        this.p = 1;
    }
    BusinessPage.prototype.ngOnInit = function () {
        this.getBusiness();
    };
    BusinessPage.prototype.getBusiness = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.business = data[0]['empresa'];
                console.log(_this.business);
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    BusinessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessPage');
    };
    BusinessPage.prototype.ProductBusiness = function (companies) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__business_products_business_products__["a" /* BusinessProductsPage */], companies);
    };
    BusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-business',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\business\business.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Empresas </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n    <ion-item-divider>Empresas</ion-item-divider>\n    <button ion-item *ngFor="let companies of business | paginate: { itemsPerPage: 20, currentPage: p }" (click)="ProductBusiness(companies)">\n\n      <ion-thumbnail item-left *ngIf="companies.logo_emp.includes(\'http\')">\n        <!--<ion-img src="{{companies.logo_emp}}"></ion-img>-->\n        <img-loader src="{{companies.logo_emp}}" useImg></img-loader>\n      </ion-thumbnail>\n\n      <ion-thumbnail item-left *ngIf="companies.logo_emp.includes(\'uploads/\')">\n        <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{companies.logo_emp}}" useImg></img-loader>\n      </ion-thumbnail>\n\n      {{ companies[\'nombre_emp\'] }}\n    </button>\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\business\business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], BusinessPage);
    return BusinessPage;
}());

//# sourceMappingURL=business.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 170;

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 215;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminClientesPage = (function () {
    function AdminClientesPage(loading, navCtrl, navParams, alertCtrl, ServiceProvider) {
        /*
            this.columns = [
              { name: 'Nombre', prop: 'nombre_cli' },
              { name: 'Identificación', prop: 'identificacion_cli' },
              { name: 'Matrícula Mercantil', prop: 'matricula_mercantil_cli' },
              { name: 'Correo', prop: 'correo_cli' },
              { name: 'Teléfono', prop: 'telefono_cli' },
        
            ];
        */
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
    }
    AdminClientesPage_1 = AdminClientesPage;
    AdminClientesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Listando Clientes…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.rows = data[2]['clientes'];
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    AdminClientesPage.prototype.delete = function (value) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Estas seguro de eliminar este cliente?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteCustomers(value).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                loader.dismiss();
                                if (response == "Datos eliminados exitosamente") {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: "HECHO",
                                        subTitle: (response),
                                        buttons: ['OK']
                                    });
                                    alert_1.present();
                                    _this.navCtrl.push(AdminClientesPage_1);
                                }
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "ERROR",
                                    subTitle: ("No se eliminó el cliente"),
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
    };
    AdminClientesPage = AdminClientesPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-clientes',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\admin-clientes\admin-clientes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <!--\n         Embed the ngx-datatable component with following property bindings/values:\n         1. sorttype - allow data to be sorted on multiple columns\n         2. headerHeight - Set height of table header at 50 pixels\n         3. footerHeight - Set height of table footer at 50 pixels\n         4. rowHeight - Set height of table rows at 50 pixels\n         5. rows - Derives the data for the table rows from the component class\n                   property of rows\n         6. columns - Derives the names for the table columns from the component\n                      class property of columns\n         7. columnMode - Use of standard, flex or force - Force value makes columns\n                         equidistant and span the width of the parent container\n         8. limit - the number of records to display before paginating the results\n      -->\n    <ngx-datatable [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="50" [rows]="rows"\n      [columns]="columns" [columnMode]="\'force\'" [scrollbarH]="true" [limit]="10" [sortType]="\'multi\'">\n\n      <ngx-datatable-column name="Nombre" prop="nombre_cli">\n\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.nombre_cli}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Identificación">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.identificacion_cli}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Matrícula Mercantil">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.matricula_mercantil_cli}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Correo">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.correo_cli}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Teléfono">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.telefono_cli}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Acción">\n        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n          <button ion-button small outline (click)="delete(row)">Eliminar</button>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n    </ngx-datatable>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\admin-clientes\admin-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AdminClientesPage);
    return AdminClientesPage;
    var AdminClientesPage_1;
}());

//# sourceMappingURL=admin-clientes.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEmpresasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ver_empresa_edit_ver_empresa_edit__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_productos_admin_productos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminEmpresasPage = (function () {
    function AdminEmpresasPage(loading, navCtrl, navParams, alertCtrl, ServiceProvider) {
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
    }
    AdminEmpresasPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Listando Empresas…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.rows = data[0]['empresa'];
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    AdminEmpresasPage.prototype.view = function (id_empresa) {
        localStorage.setItem('id_empresa', id_empresa);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_productos_admin_productos__["a" /* AdminProductosPage */]);
    };
    AdminEmpresasPage.prototype.edit = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ver_empresa_edit_ver_empresa_edit__["a" /* VerEmpresaEditPage */], item);
        //envia identificador del cliente para editar el producto. 
        var admin = JSON.stringify(item.id_cliente);
        localStorage.setItem('itemAdmin', admin);
    };
    AdminEmpresasPage.prototype.delete = function (value) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            subTitle: 'Estas seguro de eliminar esta empresa?',
            message: 'Ten en cuenta que si eliminas la empresa, los productos tambien se eliminaran',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteBusiness(value).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                if (response == "Empresa eliminada exitosamente") {
                                    var alert_1 = _this.alertCtrl.create({
                                        title: "HECHO",
                                        subTitle: (response),
                                        buttons: ['OK']
                                    });
                                    alert_1.present();
                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */]);
                                }
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
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
    };
    AdminEmpresasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-empresas',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\admin-empresas\admin-empresas.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <!--\n             Embed the ngx-datatable component with following property bindings/values:\n             1. sorttype - allow data to be sorted on multiple columns\n             2. headerHeight - Set height of table header at 50 pixels\n             3. footerHeight - Set height of table footer at 50 pixels\n             4. rowHeight - Set height of table rows at 50 pixels\n             5. rows - Derives the data for the table rows from the component class\n                       property of rows\n             6. columns - Derives the names for the table columns from the component\n                          class property of columns\n             7. columnMode - Use of standard, flex or force - Force value makes columns\n                             equidistant and span the width of the parent container\n             8. limit - the number of records to display before paginating the results\n          -->\n  <ngx-datatable [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="200" [rows]="rows" [columns]="columns"\n    [columnMode]="\'force\'" [scrollbarH]="true" [sortType]="\'multi\'">\n\n    <ngx-datatable-column name="Nombre">\n\n      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n        <button ion-button small outline (click)="view(row.id_empresa)"> {{row.nombre_emp}}</button>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Dirección">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.direccion_emp}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name="Horario">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.horario_emp}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name="Teléfono">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n        {{row.telefono_emp}}\n      </ng-template>\n    </ngx-datatable-column>\n\n    <ngx-datatable-column name="Logo">\n      <ng-template let-row="row" ngx-datatable-cell-template>\n\n        <div *ngIf="row.logo_emp.includes(\'http\')">\n          <img-loader src="{{row.logo_emp}}" useImg></img-loader>\n        </div>\n\n\n        <div *ngIf="row.logo_emp.includes(\'uploads/\')">\n          <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.logo_emp}}" useImg></img-loader>\n        </div>\n\n\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Acción">\n      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n        <button ion-button small outline (click)="delete(row)">Eliminar</button>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n    <ngx-datatable-column name="Acción">\n      <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n        <button ion-button small outline (click)="edit(row)">Editar</button>\n      </ng-template>\n    </ngx-datatable-column>\n\n\n  </ngx-datatable>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\admin-empresas\admin-empresas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AdminEmpresasPage);
    return AdminEmpresasPage;
}());

//# sourceMappingURL=admin-empresas.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agregar_empresa_agregar_empresa__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agregar_sucursal_agregar_sucursal__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ver_empresa_ver_empresa__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agregar_producto_agregar_producto__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actualizar_datos_actualizar_datos__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agregar_productos_oferta_agregar_productos_oferta__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AccountPage = (function () {
    //currentItems: Item[];
    function AccountPage(alertCtrl, nav, userData, ServiceProvider, modalCtrl, navParams, storage
        //public items: Items
    ) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.userData = userData;
        this.ServiceProvider = ServiceProvider;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.storage = storage;
        //obtener clientes
        this.getCustomers();
    }
    AccountPage.prototype.getCustomers = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.users = data[1]['clientes'];
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    AccountPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AccountPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
            if (username == null) {
                _this.storage.remove('username');
            }
            else {
                //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
                localStorage.setItem('login', username);
            }
        });
    };
    AccountPage.prototype.updateData = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__actualizar_datos_actualizar_datos__["a" /* ActualizarDatosPage */], item);
    };
    AccountPage.prototype.changePassword = function (item) {
        console.log('Clicked to change password');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */], item);
    };
    AccountPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
        localStorage.clear();
    };
    AccountPage.prototype.support = function () {
        this.nav.push('SupportPage');
    };
    AccountPage.prototype.agregarProducto = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'El producto o los productos que va a ingresar estan en oferta?',
            message: 'recuerda que registrar productos en oferta, tiene un costo',
            buttons: [
                {
                    text: 'SI',
                    //role: 'SI',
                    handler: function () {
                        var json = JSON.stringify(item.id_cliente);
                        localStorage.setItem('id_cliente', json);
                        // envia id_empresa, una vez registra productos lista los que ya ha ingresado. 
                        var empresa = JSON.stringify(item);
                        localStorage.setItem('id_empresa', empresa);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_9__agregar_productos_oferta_agregar_productos_oferta__["a" /* AgregarProductosOfertaPage */], { item: item });
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        var json = JSON.stringify(item.id_cliente);
                        localStorage.setItem('id_cliente', json);
                        //this.nav.push(AgregarProductoPage);
                        // envia id_empresa, una vez registra productos lista los que ya ha ingresado. 
                        var empresa = JSON.stringify(item);
                        localStorage.setItem('id_empresa', empresa);
                        _this.nav.push(__WEBPACK_IMPORTED_MODULE_7__agregar_producto_agregar_producto__["a" /* AgregarProductoPage */], { item: item });
                    }
                }
            ]
        });
        alert.present();
    };
    AccountPage.prototype.verProducto = function (item) {
        //this.ParametroService.myParam = id_empresa;
        var json = JSON.stringify(item.id_empresa);
        localStorage.setItem('id_empresa', json);
        //envia datos del cliente para poder agregar producto
        var cliente = JSON.stringify(item);
        localStorage.setItem('item', cliente);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */], { item: item });
    };
    AccountPage.prototype.verEmpresa = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__ver_empresa_ver_empresa__["a" /* VerEmpresaPage */], item);
    };
    AccountPage.prototype.agregarEmpresa = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__agregar_empresa_agregar_empresa__["a" /* AgregarEmpresaPage */], item);
    };
    AccountPage.prototype.agregarSucursal = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__agregar_sucursal_agregar_sucursal__["a" /* AgregarSucursalPage */], item);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-account',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cuenta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n\n  <div padding-top text-center *ngIf="username">\n    <!--<img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">-->\n    <!--<h2>{{username}}</h2>-->\n\n\n\n    <div *ngFor="let item of users">\n      <div *ngIf="(item.correo_cli === username || item.correo_cli.toUpperCase() === username)">\n        <h2>Bienvenido: {{item.nombre_cli}}\n        </h2>\n\n        <h4>Para poder registrar productos primero registre su Empresa, Gracias.</h4>\n\n\n\n        <ion-list inset>\n\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label>Empresa</ion-label>\n                <button ion-button col-8 col-sm (click)="agregarEmpresa(item)">Agregar Empresa </button>\n                <button ion-button col-8 col-sm (click)="verEmpresa(item)">Ver Empresa</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <br />\n\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label>Productos</ion-label>\n                <button ion-button col-8 col-sm (click)="agregarProducto(item)">Agregar Producto</button>\n                <button ion-button col-8 col-sm (click)="verProducto(item)">Ver mis productos</button>\n                <!--col-lg-6 col-md-12 col-sm-12 col-xs-12-->\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <br />\n\n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-label>Mis datos</ion-label>\n                <button ion-button col-8 col-sm (click)="updateData(item)">Actualizar mis datos</button>\n                <button ion-button col-8 col-sm (click)="changePassword(item)">Cambiar contraseña </button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n          <button ion-item col-12 col-sm (click)="support()">Contactanos</button>\n          <button ion-item col-12 col-sm (click)="logout()">Salir</button>\n\n\n        </ion-list>\n\n      </div>\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_12__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["b" /* Storage */]
            //public items: Items
        ])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserData = (function () {
    function UserData(events, storage) {
        this.events = events;
        this.storage = storage;
        this._favorites = [];
        this.HAS_LOGGED_IN = 'hasLoggedIn';
        this.HAS_SEEN_TUTORIAL = 'hasSeenTutorial';
    }
    UserData.prototype.hasFavorite = function (sessionName) {
        return (this._favorites.indexOf(sessionName) > -1);
    };
    ;
    UserData.prototype.login = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:login');
    };
    ;
    UserData.prototype.signup = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:signup');
    };
    ;
    //cuando Administrador se loguea. 
    UserData.prototype.loginAdmin = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:loginAdmin');
    };
    ;
    //cuando usuario se loguea. 
    UserData.prototype.loginUser = function (username) {
        this.storage.set(this.HAS_LOGGED_IN, true);
        this.setUsername(username);
        this.events.publish('user:loginUser');
    };
    ;
    UserData.prototype.logout = function () {
        this.storage.remove(this.HAS_LOGGED_IN);
        this.storage.remove('username');
        this.events.publish('user:logout');
    };
    ;
    UserData.prototype.setUsername = function (username) {
        this.storage.set('username', username);
    };
    ;
    UserData.prototype.getUsername = function () {
        return this.storage.get('username').then(function (value) {
            return value;
        });
    };
    ;
    UserData.prototype.hasLoggedIn = function () {
        return this.storage.get(this.HAS_LOGGED_IN).then(function (value) {
            return value === true;
        });
    };
    ;
    UserData.prototype.checkHasSeenTutorial = function () {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then(function (value) {
            return value;
        });
    };
    ;
    UserData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UserData);
    return UserData;
}());

//# sourceMappingURL=user-data.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductOfertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProductOfertPage = (function () {
    function EditProductOfertPage(navCtrl, navParams, fb, _IMAGES, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this._IMAGES = _IMAGES;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        // Se usa para activar / desactivar elementos DOM dependiendo de si se ha seleccionado una imagen
        this.isSelected = false;
        this.getAllCategories();
    }
    EditProductOfertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProductOfertPage');
    };
    EditProductOfertPage.prototype.ngOnInit = function () {
        this.subcategorias = this.navParams.get('nombre_subcategoria');
        this.categorias = this.navParams.get('nombre_categoria');
        this.id = this.navParams.get('id');
        this.imagen = this.navParams.get('imagen_pro');
        this.name = this.navParams.get('nombre_pro');
        this.image = this.navParams.get('imagen_pro');
        this.price = this.navParams.get('precioNuevo_pro');
        this.priceAnterior = this.navParams.get('precioAnterior_pro');
        this.description = this.navParams.get('desripcion_pro');
        this.fechaInicio = this.navParams.get('inicioOferta_pro');
        this.fechaFin = this.navParams.get('finOferta_pro');
        this.empresa = this.navParams.get('id_empresa');
        this.diasofertas = this.navParams.get('diasOferta_pro');
        this.fechaInicio = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaInicio).format();
        this.fechaFin = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaFin).format();
        console.log('1', this.fechaInicio);
        /*
            this.fechaInicio = new Date(this.fechaInicioOferta).toISOString();
            this.fechaFin = new Date(this.fechaFinOferta).toISOString();
        */
        //fijar el valor minimo que puede tomar fechaFin dependiendo de la fecha de inicio
        var fecha = this.fechaInicio.split('-');
        this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));
    };
    EditProductOfertPage.prototype.getAllCategories = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.categories = data[4]['categorias'];
            _this.selectedSubcategory = _this.categories.filter(function (item) { return item.categoria === _this.categorias; });
        }, function (err) {
            console.log(err);
        });
    };
    EditProductOfertPage.prototype.changedate = function () {
        //fijar el valor minimo que puede tomar fechaFin dependiendo de la fecha de inicio
        var fecha = this.fechaInicio.split('-');
        this.minDate = (fecha[0] + "-" + fecha[1] + "-" + fecha[2].slice(0, 2));
        var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaInicio);
        var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaFin);
        this.diasofertas = endDate.diff(startDate, 'days') + 1;
        console.log(this.diasofertas);
    };
    EditProductOfertPage.prototype.changeFinDate = function () {
        var startDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaInicio);
        var endDate = __WEBPACK_IMPORTED_MODULE_5_moment__(this.fechaFin);
        this.diasofertas = endDate.diff(startDate, 'days') + 1;
        console.log(this.diasofertas);
    };
    EditProductOfertPage.prototype.selectFileToUpload = function (event) {
        var _this = this;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Retrieve the file type from the base64 data URI string
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Do we have correct file type?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                _this.namefile = event.target.files[0].name;
                // Oculte el campo de entrada del archivo, muestre la imagen en la plantilla del componente
                // y mostrar un botón de carga
                _this.isSelected = true;
                _this.newImage = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    EditProductOfertPage.prototype.subcategories = function (categoria) {
        this.selectedSubcategory = this.categories.filter(function (item) { return item.categoria === categoria; });
    };
    EditProductOfertPage.prototype.edit = function () {
        var _this = this;
        if (this.newPrice.value * 1 <= this.precioOferta.value * 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'El precio de oferta del producto no puede ser mayor o igual al precio normal',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        else {
            var data_1 = {
                categoria: this.categorias,
                subcategoria: this.subcategorias,
                name: this.name,
                price: this.price,
                image: this.imagen,
                description: this.description,
                empresa: this.empresa,
                id: this.id,
                diasOfertas: this.diasofertas,
                newName: this.newName.value,
                newPrice: this.newPrice.value,
                newOfferprice: this.precioOferta.value,
                newDescription: this.newDescription.value,
                newFechainicio: this.fechaInicio,
                newFechafin: this.fechaFin,
                newDiasoferta: this.diasofertas,
                newImage: this.newImage,
                namefile: this.namefile,
            };
            console.log(data_1);
            var loader_1 = this.loading.create({
                content: 'Procesando por favor espera...',
            });
            loader_1.present().then(function () {
                _this.ServiceProvider.editProductsOffers(data_1).subscribe(function (response) {
                    console.log(response);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: ("Actualización de datos exitosa"),
                        buttons: ['ok']
                    });
                    alert.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                }, function (err) {
                    console.log(err);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: ("No se pudo editar el producto"),
                        buttons: ['ok']
                    });
                    alert.present();
                });
            });
        }
    };
    EditProductOfertPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Aviso!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fechaInicioOferta"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "date", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fechaFinOferta"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "date2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newPrice"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "newPrice", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newName"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "newName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("newDescription"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "newDescription", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("precioOferta"),
        __metadata("design:type", Object)
    ], EditProductOfertPage.prototype, "precioOferta", void 0);
    EditProductOfertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-product-ofert',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\edit-product-ofert\edit-product-ofert.html"*/'<!--\n  Generated template for the EditProductOfertPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar producto en oferta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list no-line>\n\n\n\n    <ion-item>\n      <ion-icon name="list" item-start></ion-icon>\n      <ion-label>Categoría</ion-label>\n      <ion-select [(ngModel)]="categorias" name="categoria" #categoria (ionChange)="subcategories($event)">\n        <ion-option *ngFor="let category of categories; let i = index" value="{{category.categoria}}">{{category.categoria}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!--Subcategoria-->\n\n    <ion-item *ngFor="let x of selectedSubcategory">\n      <ion-icon name="list" item-start></ion-icon>\n      <ion-label>Subcategoria</ion-label>\n      <ion-select [(ngModel)]="subcategorias" name="subcategoria" #subcategoria>\n        <ion-option *ngFor="let subcategory of x.subcategoria" value="{{subcategory.subcategoria}}">{{subcategory.subcategoria}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Fecha y hora Inicio de Oferta*</ion-label>\n      <ion-datetime name="fechaInicioOferta" #fechaInicioOferta displayFormat="MMM/DD/YYYY, h:mm A" [(ngModel)]="fechaInicio"\n        (ionChange)="changedate($event)" min="2019" max="2030" cancelText=\'cancelar\' doneText=\'Hecho\' monthNames="Enero, Febrero, Marzo, Abril , Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"\n        monthShortNames="Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic"></ion-datetime>\n    </ion-item>\n\n\n    <ion-item *ngIf="minDate">\n      <ion-icon name="calendar" item-start></ion-icon>\n      <ion-label>Fecha y hora Fin de Oferta*</ion-label>\n      <ion-datetime name="fechaFinOferta" #fechaFinOferta displayFormat="MMM/DD/YYYY, h:mm A" min="{{minDate}}" max="2030"\n        [(ngModel)]="fechaFin" (ionChange)="changeFinDate($event)" cancelText=\'cancelar\' doneText=\'Hecho\' monthNames="Enero, Febrero, Marzo, Abril , Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre"\n        monthShortNames="Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic"></ion-datetime>\n    </ion-item>\n\n\n\n    <ion-item>\n      <ion-icon name="basket" item-start></ion-icon>\n      <ion-label floating>Nombre</ion-label>\n      <ion-input id="newName" type="text" name="newName" #newName [(ngModel)]="name"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name="pricetag" item-start></ion-icon>\n      <ion-label floating>Precio Normal</ion-label>\n      <ion-input id="newPrice" type="text" name="newPrice" #newPrice [(ngModel)]="price"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name="cash" item-start></ion-icon>\n      <ion-label stacked>Precio Oferta</ion-label>\n      <ion-input type="number" name="precioOferta" #precioOferta [(ngModel)]="priceAnterior"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-icon name="paper" item-start></ion-icon>\n      <ion-label floating>Descripción del producto</ion-label>\n      <ion-textarea id="newDescription" rows="6" maxLength="500" name="newDescription" #newDescription [(ngModel)]="description"></ion-textarea>\n    </ion-item>\n\n    <br />\n\n    <div *ngIf="imagen && !isSelected">\n      <h5>Imagen de producto</h5>\n      <img width="250" height="250" src="http://www.commerapp.com/ionic-php-mysql/{{imagen}}">\n    </div>\n\n    <ion-item>\n      <ion-icon name="image" item-start></ion-icon>\n      <ion-label stacked>Cambiar imagen del producto</ion-label>\n      <ion-input type="file" accept="image/*" (change)="selectFileToUpload($event)"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf="isSelected">\n      <img [src]="newImage" width="250" height="250" />\n    </ion-item>\n\n\n\n    <div>\n      <button ion-button round outline block (click)="edit()">Actualizar</button>\n    </div>\n\n\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\edit-product-ofert\edit-product-ofert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], EditProductOfertPage);
    return EditProductOfertPage;
}());

//# sourceMappingURL=edit-product-ofert.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEditPage = (function () {
    function AdminEditPage(navCtrl, navParams, alertCtrl, loading, postServiceProvider, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.postServiceProvider = postServiceProvider;
        this.ServiceProvider = ServiceProvider;
        this.submitted = false;
        var EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.authForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*')]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
        });
    }
    AdminEditPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('nombre_admin');
        this.emails = this.navParams.get('correo_admin');
        this.admin = this.navParams.get('id_administrador');
    };
    AdminEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminEditPage');
    };
    AdminEditPage.prototype.Update = function () {
        var _this = this;
        var data = {
            admin: this.admin,
            newName: this.username.value,
            newEmail: this.email.value,
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.updateAdminData(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "Actualización de datos exitosa") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (response),
                        buttons: ['ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__admin_admin__["a" /* AdminPage */]);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se pudo actualizar los datos"),
                    buttons: ['ok']
                });
                alert.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("username"),
        __metadata("design:type", Object)
    ], AdminEditPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], AdminEditPage.prototype, "email", void 0);
    AdminEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin-edit',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\admin-edit\admin-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar datos administrador</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <form [formGroup]="authForm" (ngSubmit)="Update()">\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n        <ion-label floating>Nombre administrador</ion-label>\n        <ion-input formControlName="username" type="text" name="username" #username [(ngModel)]="name"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n        <p>Nombre de administrador es requerido</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n        <p>Permitido solo letras</p>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n        <ion-label floating>Correo</ion-label>\n        <ion-input formControlName="email" type="email" name="email" #email [(ngModel)]="emails"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n        <p>Ingrese su correo electrónico</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n        <p>Dirección de correo electrónico no válida</p>\n      </ion-item>\n\n\n\n      <div padding>\n\n        <button ion-button round outline block color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;"\n          type="submit">Actualizar</button>\n      </div>\n\n    </form>\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\admin-edit\admin-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AdminEditPage);
    return AdminEditPage;
}());

//# sourceMappingURL=admin-edit.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioEditarDatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioEditarDatosPage = (function () {
    function UsuarioEditarDatosPage(navCtrl, navParams, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.submitted = false;
        var EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.authForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*')]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10)]),
        });
    }
    UsuarioEditarDatosPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('nombre_usu');
        this.emails = this.navParams.get('correo_usu');
        this.usuario = this.navParams.get('id_usuario');
        this.phone = this.navParams.get('telefono_usu');
    };
    UsuarioEditarDatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminEditPage');
    };
    UsuarioEditarDatosPage.prototype.Update = function () {
        var _this = this;
        var data = {
            usuario: this.usuario,
            newName: this.username.value,
            newEmail: this.email.value,
            newPhone: this.mobile.value,
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.UpdateUserData(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "actualización de datos exitosa") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: ("Actualización de datos exitosa"),
                        buttons: ['ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__usuario_usuario__["a" /* UsuarioPage */]);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: ("No se pudo actualizar los datos"),
                        buttons: ['ok']
                    });
                    alert_2.present();
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("username"),
        __metadata("design:type", Object)
    ], UsuarioEditarDatosPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], UsuarioEditarDatosPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mobile"),
        __metadata("design:type", Object)
    ], UsuarioEditarDatosPage.prototype, "mobile", void 0);
    UsuarioEditarDatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario-editar-datos',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\usuario-editar-datos\usuario-editar-datos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar datos usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <form [formGroup]="authForm" (ngSubmit)="Update()">\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n        <ion-label floating>Nombre usuario</ion-label>\n        <ion-input formControlName="username" type="text" name="username" #username [(ngModel)]="name"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n        <p>Nombre de usuario es requerido</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n        <p>Permitido solo letras</p>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n        <ion-label floating>Correo</ion-label>\n        <ion-input formControlName="email" type="email" name="email" #email [(ngModel)]="emails"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n        <p>Ingrese su correo electrónico</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n        <p>Dirección de correo electrónico no válida</p>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.mobile.valid && authForm.controls.mobile.touched}">\n        <ion-label floating>Número de celular</ion-label>\n        <ion-input formControlName="mobile" type="number" name="mobile" #mobile [(ngModel)]="phone"></ion-input>\n      </ion-item>\n      <div *ngIf="authForm.controls.mobile.hasError(\'required\') && authForm.controls.mobile.touched">\n        <p>campo Número celular es requerido!</p>\n      </div>\n      <div *ngIf="authForm.controls.mobile.hasError(\'minlength\') && authForm.controls.mobile.touched">\n        <p>longitud 10 Digitos!</p>\n      </div>\n\n\n\n      <div padding>\n\n        <button ion-button round outline block color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;"\n          type="submit">Actualizar</button>\n      </div>\n\n    </form>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\usuario-editar-datos\usuario-editar-datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UsuarioEditarDatosPage);
    return UsuarioEditarDatosPage;
}());

//# sourceMappingURL=usuario-editar-datos.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarEmpresaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { AgregarProductoPage } from '../agregar-producto/agregar-producto';
var AgregarEmpresaPage = (function () {
    function AgregarEmpresaPage(navCtrl, navParams, fb, _IMAGES, alertCtrl, http, loading, ServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._IMAGES = _IMAGES;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.isSelected = false;
        this.getCities();
        this.form = fb.group({
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            option: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            name: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            direction: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            // phone: ["", Validators.required], //aqui estaba el hp problema ome
            link: [""],
            Horario: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            image: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            tipo_contacto: ['Telefono', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            numero_contacto: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, AgregarEmpresaPage_1.checkPhoneSize]],
        });
        this.form.get('option')
            .valueChanges
            .subscribe(function (value) {
            console.log(value);
            if (value === 'si') {
                var validators = [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(50)];
                _this.form.get('link').setValidators(validators);
            }
            else {
                var validators = [];
                _this.form.get('link').setValidators(validators);
            }
            _this.form.updateValueAndValidity();
        });
        this.form.get('tipo_contacto')
            .valueChanges
            .subscribe(function (value) {
            console.log(value);
            if (value === 'Telefono') {
                var validators = [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, AgregarEmpresaPage_1.checkPhoneSize];
                _this.form.get('numero_contacto').setValidators(validators);
            }
            else {
                var validators = [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, AgregarEmpresaPage_1.checkCellPhoneSize];
                _this.form.get('numero_contacto').setValidators(validators);
            }
            _this.form.updateValueAndValidity();
        });
    }
    AgregarEmpresaPage_1 = AgregarEmpresaPage;
    AgregarEmpresaPage.checkPhoneSize = function (control) {
        var value = control.value;
        if (value && value.length > 7) {
            return {
                'phoneSize': true
            };
        }
        return null;
    };
    AgregarEmpresaPage.checkCellPhoneSize = function (control) {
        var value = control.value;
        if (value && value.length > 10) {
            return {
                'cellPhoneSize': true
            };
        }
        return null;
    };
    AgregarEmpresaPage.prototype.getCities = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.ubicacion = data[5]['colombia'];
        }, function (err) {
            console.log(err);
        });
    };
    AgregarEmpresaPage.prototype.ngOnInit = function () {
        this.id_cliente = this.navParams.get('id_cliente');
    };
    AgregarEmpresaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgregarEmpresaPage');
    };
    //seleccionar municipio de acuerdo al departamento seleccionado
    AgregarEmpresaPage.prototype.CountryChange = function (value) {
        this.selectedMunicipality = this.ubicacion.filter(function (item) { return item.departamento === value; });
    };
    /*hide() {
      this.hideMe = true;
    }*/
    AgregarEmpresaPage.prototype.selectFileToUpload = function (event) {
        var _this = this;
        this._IMAGES
            .handleImageSelection(event)
            .subscribe(function (res) {
            // Retrieve the file type from the base64 data URI string
            _this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];
            // Do we have correct file type?
            if (_this._IMAGES.isCorrectFileType(_this._SUFFIX)) {
                // Hide the file input field, display the image in the component template
                // and display an upload button
                _this.isSelected = true;
                _this.image = res;
            }
            else {
                _this.displayAlert('Debe seleccionar un archivo de imagen con uno de los siguientes tipos: jpg, gif o png');
            }
        }, function (error) {
            console.dir(error);
            _this.displayAlert(error.message);
        });
    };
    AgregarEmpresaPage.prototype.onSubmit = function () {
        var _this = this;
        var data = {
            name: this.name.value,
            image: this.image,
            paginaWeb: this.paginaWeb.value,
            numero_contacto: this.numero_contacto.value,
            direccion: this.direccion.value,
            horario: this.horario.value,
            departamento: this.departamento.value,
            municipio: this.municipio.value,
            id_cliente: this.id_cliente,
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espere…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.addBusiness(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                _this.form.reset();
                var alert = _this.alertCtrl.create({
                    title: "HECHO",
                    subTitle: ("registro exitoso"),
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */]);
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se registró la empresa"),
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    AgregarEmpresaPage.prototype.displayAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Heads up!',
            subTitle: message,
            buttons: ['Got it']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("name"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("paginaWeb"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "paginaWeb", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("direccion"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "direccion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("horario"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "horario", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("numero_contacto"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "numero_contacto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("departamento"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "departamento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("municipio"),
        __metadata("design:type", Object)
    ], AgregarEmpresaPage.prototype, "municipio", void 0);
    AgregarEmpresaPage = AgregarEmpresaPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agregar-empresa',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\agregar-empresa\agregar-empresa.html"*/'<!--\n  Generated template for the AgregarEmpresaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar Empresa</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="logo">\n    <img src="assets/img/commer.jpeg" alt="Logo">\n  </div>\n\n  <h2>Registre su empresa</h2><br>\n\n\n  <h5 text-wrap>Señor empresario por favor complete los campo de su establecimiento, una vez finalizado pueda registrar\n    su\n    productos, ten en cuenta que solo se puede registrar una empresa, si requiere modificar empresa escoge la opcion de\n    ver empresa y sucursal(es) Gracias.</h5><br>\n\n  <p>Todos los campos con * son obligatorios</p>\n\n  <h5 text-wrap>Tenga en cuenta que si su establecimiento tiene pagina web, no tienes necesidad de ingresar los\n    productos\n    manualmente\n    podemos extraerlos directamente de tu pagina web.\n  </h5><br>\n\n  <form  [formGroup]="form" (ngSubmit)="onSubmit()">\n\n\n    <ion-list no-line>\n\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.name.valid && form.controls.name.touched}">\n        <ion-icon name="briefcase" item-start></ion-icon>\n        <ion-label stacked>Nombre de la Empresa*</ion-label>\n        <ion-input type="text" name="name" #name formControlName="name"></ion-input>\n      </ion-item>\n\n\n      <div *ngIf="form.controls.name.hasError(\'required\') && form.controls.name.touched">\n        <p>Nombre de Empresa es requerido!</p>\n      </div>\n\n\n      <ion-title> Su empresa tiene página web?</ion-title>\n\n      <ion-row radio-group formControlName="option" [(ngModel)]="pagina">\n        <ion-col col-6>\n          <ion-item>\n            <ion-icon name="checkmark" item-left></ion-icon>\n            <ion-label>Si</ion-label>\n            <ion-radio value="si"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-icon name="close" item-left></ion-icon>\n            <ion-label>No</ion-label>\n            <ion-radio value="no"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n\n\n      <div *ngIf=" (pagina ==\'si\')">\n        <ion-item>\n          <ion-icon name="link" item-start></ion-icon>\n          <ion-label stacked>Ingrese su página web</ion-label>\n          <ion-input type="text" name="paginaWeb" #paginaWeb formControlName="link"></ion-input>\n        </ion-item>\n\n        <div *ngIf="form.controls.link.hasError(\'required\') && form.controls.link.touched">\n          <p>Página web es requerido!</p>\n        </div>\n\n        <div *ngIf="form.controls.link.hasError(\'pattern\') && form.controls.link.touched">\n          <p>Dirección de página web no válida</p>\n        </div>\n      </div>\n\n      <div *ngIf=" (pagina ==\'no\')">\n        <ion-item [hidden]="!value">\n          <ion-icon name="link" item-start></ion-icon>\n          <ion-label stacked>Ingrese su página web</ion-label>\n          <ion-input type="text" name="paginaWeb" #paginaWeb formControlName="link"></ion-input>\n        </ion-item>\n      </div>\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.direction.valid && form.controls.direction.touched}">\n        <ion-icon name="navigate" item-start></ion-icon>\n        <ion-label stacked>Dirección de la Empresa*</ion-label>\n        <ion-input type="text" name="direccion" #direccion placeholder="CR 16 N 41-10 LOCAL 260" formControlName="direction"></ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.direction.hasError(\'required\') && form.controls.direction.touched">\n        <p>Dirección de Empresa es requerido!</p>\n      </div>\n\n\n      <!---->\n      <ion-item>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Departamento</ion-label>\n        <ion-select name="departamento" #departamento formControlName="country" (ionChange)="CountryChange($event)">\n          <ion-option *ngFor="let department of ubicacion; let i = index" value="{{department.departamento}}">{{department.departamento}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf="form.controls.country.hasError(\'required\') && form.controls.country.touched">\n        <p>Departamento es requerido!</p>\n      </div>\n\n\n      <ion-item *ngFor="let x of selectedMunicipality">\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Municipio</ion-label>\n        <ion-select name="municipio" #municipio formControlName="state">\n          <ion-option *ngFor="let municipio of x.ciudades" value="{{municipio}}">{{municipio}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div *ngIf="form.controls.state.hasError(\'required\') && form.controls.state.touched">\n        <p>Municipio es requerido!</p>\n      </div>\n\n\n      <ion-item [ngClass]="{\'error-border\':!form.controls.Horario.valid && form.controls.Horario.touched}">\n        <ion-icon name="clock" item-start></ion-icon>\n        <ion-label stacked>Horario de Atención*</ion-label>\n        <ion-input type="text" name="horario" #horario placeholder="Lun-dom 10:00 am a 8:30 pm" formControlName="Horario"></ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.Horario.hasError(\'required\') && form.controls.Horario.touched">\n        <p>Horario de Empresa es requerido!</p>\n      </div>\n\n\n      <ion-row radio-group formControlName="tipo_contacto">\n        <ion-col col-6>\n          <ion-item>\n            <ion-icon name="call" item-left></ion-icon>\n            <ion-label>Telefono</ion-label>\n            <ion-radio value="Telefono"></ion-radio>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6>\n          <ion-item>\n            <ion-icon name="phone-portrait" item-left></ion-icon>\n            <ion-label>Celular</ion-label>\n            <ion-radio value="Celular"></ion-radio>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf="form.controls.tipo_contacto.hasError(\'required\') && form.controls.tipo_contacto.touched">\n        <p>El tipo de contacto es requerido!</p>\n      </div>\n\n      <ion-item>\n        <ion-icon name="call" item-left></ion-icon>\n        <ion-label stacked>Numero de contacto:</ion-label>\n        <ion-input formControlName="numero_contacto" type="number" placeholder="Numero de contacto" name="numero_contacto"\n          #numero_contacto>\n        </ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.numero_contacto.hasError(\'required\') && form.controls.numero_contacto.touched">\n        <p>Numero de contacto de la Empresa es requerido!</p>\n      </div>\n\n      <p *ngIf="form.controls.numero_contacto.hasError(\'phoneSize\')" class="error">\n        El numero de telefono no puede contener mas de 7 caracteres\n      </p>\n      <p *ngIf="form.controls.numero_contacto.hasError(\'cellPhoneSize\')" class="error">\n        El numero de celular no puede contener mas de 10 caracteres\n      </p>\n\n      <ion-item>\n        <ion-icon name="image" item-start></ion-icon>\n        <ion-label text-wrap>Imagen o logo de la empresa*</ion-label>\n        <ion-input type="file" accept="image/*" (change)="selectFileToUpload($event)" formControlName="image"></ion-input>\n      </ion-item>\n\n      <div *ngIf="form.controls.image.hasError(\'required\') && form.controls.image.touched">\n        <p>Imagen de la Empresa es requerido!</p>\n      </div>\n\n      <ion-item *ngIf="isSelected">\n        <img [src]="image" width="250" height="250" />\n      </ion-item>\n\n      <div>\n        <button class="registrar" ion-button round outline block color="primary" [disabled]="!form.valid" style="margin-top: 20px;"\n          type="submit">Registrar\n          Empresa</button>\n\n      </div>\n\n    </ion-list>\n\n  </form>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\agregar-empresa\agregar-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_image_image__["a" /* ImageProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AgregarEmpresaPage);
    return AgregarEmpresaPage;
    var AgregarEmpresaPage_1;
}());

//# sourceMappingURL=agregar-empresa.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarSucursalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AgregarSucursalPage = (function () {
    function AgregarSucursalPage(navCtrl, navParams, fb, http, loading, alertCtrl, keyboard, cdr) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.http = http;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.keyboard = keyboard;
        this.cdr = cdr;
        this.locate = null;
        this.form = fb.group({
            direction: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]],
            country: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
            state: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required],
        });
        this.http.get('http://www.commerapp.com/ionic-php-mysql/colombia.php?c=colombia').map(function (res) { return res.json(); }).subscribe(function (data) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.ubicacion = data.colombia;
            //this.posts = data.colombia.filter(item => item.departamento === this.locates);
        }, function (error) {
            console.log("Oops!", error);
        });
    }
    AgregarSucursalPage.prototype.ngOnInit = function () {
        this.id_cliente = this.navParams.get('id_cliente');
        // this.selectedMunicipality = this.ubicacion.filter(item => item.departamento === this.locate)
    };
    AgregarSucursalPage.prototype.CountryChange = function (value) {
        this.selectedMunicipality = this.ubicacion.filter(function (item) { return item.departamento === value; });
    };
    /**
     *  Recive los datos enviados del formulario
     */
    //manage(val: any) {
    AgregarSucursalPage.prototype.manage = function () {
        /*
        let data = { form: this.form.value, cliente: this.id_cliente };
        let resources = JSON.stringify(data);
    
        var myJson = JSON.stringify([this.form.value]);
        JSON.stringify(JSON.parse(myJson).push('this.id_cliente'));
    */
        var _this = this;
        //let resources = JSON.stringify(data);
        //console.log(resources);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data = {
            direction: this.direction.value,
            country: this.country.value,
            state: this.state.value,
        };
        var loader = this.loading.create({
            content: 'Procesando por favor espere…',
        });
        loader.present().then(function () {
            _this.http.post('http://www.commerapp.com/ionic-php-mysql/registrar_sucursal.php', data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                loader.dismiss();
                if (res == "registro exitoso") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */]);
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: (res),
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("state"),
        __metadata("design:type", Object)
    ], AgregarSucursalPage.prototype, "state", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("direction"),
        __metadata("design:type", Object)
    ], AgregarSucursalPage.prototype, "direction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("country"),
        __metadata("design:type", Object)
    ], AgregarSucursalPage.prototype, "country", void 0);
    AgregarSucursalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agregar-sucursal',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\agregar-sucursal\agregar-sucursal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agregar Sucursal </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <form [formGroup]="form" (ngSubmit)="manage(form.value)">\n\n    <ion-list margin-bottom>\n\n      <H2>Sucursal</H2><br>\n      <h4>Por favor si tu empresa o establecimiento tiene sucursales regístrelas, por ultimo da\n        Click en el Botón Registrar. Gracias</h4>\n      <br>\n\n      <p>Todos los campos con * son obligatorios, llene todos los campos para poder registrar</p>\n\n\n\n      <ion-item>\n        <ion-icon name="navigate" item-start></ion-icon>\n        <ion-label stacked>Dirección de la Empresa*</ion-label>\n        <ion-input type="text" maxlength="50" placeholder="CR 16 N 41-10 LOCAL 260" #direction formControlName="direction"></ion-input>\n      </ion-item>\n      <!--\n            <div *ngIf="form.controls.direction.hasError(\'required\') && form.controls.direction.touched">\n              <p>Dirección de Empresa es requerido!</p>\n            </div>-->\n\n\n      <ion-item>\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Departamento</ion-label>\n        <ion-select [(ngModel)]="locate" name="country" #country formControlName="country" (ionChange)="CountryChange($event)">\n          <ion-option *ngFor="let department of ubicacion; let i = index" value="{{department.departamento}}">{{department.departamento}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n\n      <ion-item *ngFor="let x of selectedMunicipality">\n\n        <ion-icon name="list" item-start></ion-icon>\n        <ion-label>Municipio</ion-label>\n        <ion-select name="state" #state formControlName="state">\n          <ion-option *ngFor="let municipio of x.ciudades" value="{{municipio}}">{{municipio}}</ion-option>\n        </ion-select>\n\n      </ion-item>\n\n      <button class="registrar" ion-button block margin-top color="primary" text-center [disabled]="!form.valid">Registrar</button>\n\n\n    </ion-list>\n\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\agregar-sucursal\agregar-sucursal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], AgregarSucursalPage);
    return AgregarSucursalPage;
}());

//# sourceMappingURL=agregar-sucursal.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerEmpresaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ver_empresa_edit_ver_empresa_edit__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerEmpresaPage = (function () {
    function VerEmpresaPage(loading, navCtrl, navParams, alertCtrl, ServiceProvider) {
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
    }
    VerEmpresaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.cliente = this.navParams.get('id_cliente');
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.rows = data[0]['empresa'].filter(function (item) { return item.id_cliente === _this.cliente; });
        }, function (err) {
            console.log(err);
        });
    };
    VerEmpresaPage.prototype.edit = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ver_empresa_edit_ver_empresa_edit__["a" /* VerEmpresaEditPage */], item);
    };
    VerEmpresaPage.prototype.delete = function (value) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            subTitle: 'Estas seguro de eliminar esta empresa?',
            message: 'Ten en cuenta que si eliminas la empresa, los productos tambien se eliminaran',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteBusiness(value).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "HECHO",
                                    subTitle: ("Empresa eliminada exitosamente"),
                                    buttons: ['OK']
                                });
                                alert.present();
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__account_account__["a" /* AccountPage */]);
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
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
    };
    VerEmpresaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ver-empresa',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\ver-empresa\ver-empresa.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Empresas</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="rows?.length == 0">\n    <h2>Aun no ha registrado empresa, por favor registra primero su empresa y luego sus productos, Gracias.</h2>\n  </div>\n\n\n\n  <div *ngIf="rows?.length != 0">\n\n    <!--\n         Embed the ngx-datatable component with following property bindings/values:\n         1. sorttype - allow data to be sorted on multiple columns\n         2. headerHeight - Set height of table header at 50 pixels\n         3. footerHeight - Set height of table footer at 50 pixels\n         4. rowHeight - Set height of table rows at 50 pixels\n         5. rows - Derives the data for the table rows from the component class\n                   property of rows\n         6. columns - Derives the names for the table columns from the component\n                      class property of columns\n         7. columnMode - Use of standard, flex or force - Force value makes columns\n                         equidistant and span the width of the parent container\n         8. limit - the number of records to display before paginating the results\n      -->\n    <ngx-datatable [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="200" [rows]="rows"\n      [columns]="columns" [columnMode]="\'force\'" [scrollbarH]="true" [sortType]="\'multi\'">\n\n      <ngx-datatable-column name="Nombre" prop="nombre_emp">\n\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.nombre_emp}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Dirección">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.direccion_emp}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Horario">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.horario_emp}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Teléfono">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.telefono_emp}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Logo">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n\n          <div *ngIf="row.logo_emp.includes(\'http\')">\n            <img src="{{row.logo_emp}}">\n          </div>\n\n\n          <div *ngIf="row.logo_emp.includes(\'uploads/\')">\n            <img src="http://www.commerapp.com/ionic-php-mysql/{{row.logo_emp}}">\n          </div>\n\n\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <ngx-datatable-column name="Acción">\n        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n          <button ion-button small outline (click)="delete(row)">Eliminar</button>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <ngx-datatable-column name="Acción">\n        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n          <button ion-button small outline (click)="edit(row)">Editar</button>\n        </ng-template>\n      </ngx-datatable-column>\n\n\n    </ngx-datatable>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\ver-empresa\ver-empresa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], VerEmpresaPage);
    return VerEmpresaPage;
}());

//# sourceMappingURL=ver-empresa.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarDatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActualizarDatosPage = (function () {
    function ActualizarDatosPage(navCtrl, navParams, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.submitted = false;
        var EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.authForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(80)]),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(7), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(10)]),
        });
    }
    ActualizarDatosPage.prototype.ngOnInit = function () {
        this.name = this.navParams.get('nombre_cli');
        this.emails = this.navParams.get('correo_cli');
        this.phone = this.navParams.get('telefono_cli');
        this.identification = this.navParams.get('identificacion_cli');
        this.oldNameValue = this.navParams.get('nombre_cli');
        this.cliente = this.navParams.get('id_cliente');
    };
    ActualizarDatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActualizarDatosPage');
    };
    ActualizarDatosPage.prototype.Update = function () {
        var _this = this;
        var data = {
            cliente: this.cliente,
            newName: this.username.value,
            newEmail: this.email.value,
            newPhone: this.mobile.value,
            identification: this.identification,
            name: this.oldNameValue
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.UpdateCustomerData(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "Actualización de datos exitosa") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (response),
                        buttons: ['ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */]);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se actulizaron los datos"),
                    buttons: ['ok']
                });
                alert.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("username"),
        __metadata("design:type", Object)
    ], ActualizarDatosPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], ActualizarDatosPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mobile"),
        __metadata("design:type", Object)
    ], ActualizarDatosPage.prototype, "mobile", void 0);
    ActualizarDatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-actualizar-datos',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\actualizar-datos\actualizar-datos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <form [formGroup]="authForm" (ngSubmit)="Update()">\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n        <ion-label floating>Nombre de usuario</ion-label>\n        <ion-input formControlName="username" type="text" name="username" #username [(ngModel)]="name"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n        <p>Nombre de usuario es requerido</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n        <p>Permitido solo letras</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n        <p>Longitud mínima del nombre de usuario es 4!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n        <p>Longiud máxima del nombre de usuario es 15!</p>\n      </ion-item>\n\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.email.valid && authForm.controls.email.touched}">\n        <ion-label floating>Correo</ion-label>\n        <ion-input formControlName="email" type="email" name="email" #email [(ngModel)]="emails"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'required\') && authForm.controls.email.touched">\n        <p>Ingrese su correo electrónico</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.email.hasError(\'pattern\') && authForm.controls.email.touched">\n        <p>Dirección de correo electrónico no válida</p>\n      </ion-item>\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.mobile.valid && authForm.controls.mobile.touched}">\n        <ion-label floating>Número de Contacto</ion-label>\n        <ion-input formControlName="mobile" type="number" name="mobile" #mobile [(ngModel)]="phone"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.mobile.hasError(\'required\') && authForm.controls.mobile.touched">\n        <p>campo Número celular es requerido!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.mobile.hasError(\'minlength\') && authForm.controls.mobile.touched">\n        <p>longitud 8 Digitos, para Número Teléfono!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.mobile.hasError(\'maxlength\') && authForm.controls.mobile.touched">\n        <p>longitud 10 Digitos, para Número Celular!</p>\n      </ion-item>\n\n\n      <div padding>\n\n        <button ion-button round outline block color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;"\n          type="submit">Actualizar</button>\n      </div>\n\n    </form>\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\actualizar-datos\actualizar-datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ActualizarDatosPage);
    return ActualizarDatosPage;
}());

//# sourceMappingURL=actualizar-datos.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AngularFireAuth } from 'angularfire2/auth';



/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        var EMAILPATTERN = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
        });
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpasswordPage');
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        var data = {
            email: this.email.value
        };
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.resetPassword(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "mensaje enviado") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "Tu contraseña ha sido enviada a tu correo",
                        subTitle: ("Mensaje enviado"),
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                else if (response == "El correo no esta registrado!!!!") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "Alerta",
                        subTitle: (response),
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se pudo recuperar tu contraseña"),
                    buttons: ['OK']
                });
                alert.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("email"),
        __metadata("design:type", Object)
    ], ResetPasswordPage.prototype, "email", void 0);
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\reset-password\reset-password.html"*/'<!--\n  Generated template for the ResetpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recuperar contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="logo">\n    <img src="assets/img/commer.jpeg" alt="Ionic logo">\n  </div>\n\n  <form [formGroup]="myForm" (ngSubmit)="resetPassword()">\n\n    <ion-list>\n      <ion-item [ngClass]="{\'error-border\':!myForm.controls.email.valid && myForm.controls.email.touched}">\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Correo</ion-label>\n        <ion-input formControlName="email" type="email" name="email" #email></ion-input>\n      </ion-item>\n      <ion-item *ngIf="myForm.controls.email.hasError(\'required\') && myForm.controls.email.touched">\n        <p>Ingrese su correo electrónico</p>\n      </ion-item>\n      <ion-item *ngIf="myForm.controls.email.hasError(\'pattern\') && myForm.controls.email.touched">\n        <p>Dirección de correo electrónico no válida</p>\n      </ion-item>\n\n    </ion-list>\n    <div padding>\n      <button ion-button round outline block type="submit" [disabled]="!myForm.valid">Recuperar</button>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfilePage = (function () {
    function ProfilePage(alertCtrl, app, loadingCtrl, modalCtrl, navCtrl, toastCtrl, confData, user, http, navParams, ServiceProvider) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.confData = confData;
        this.user = user;
        this.http = http;
        this.navParams = navParams;
        this.ServiceProvider = ServiceProvider;
        this.p = 1;
        //limpia variables globales
        localStorage.removeItem('product');
        //localStorage.clear();
        this.subcategory = this.navParams.get('subcategoria');
        console.log(this.subcategory);
        var loading = this.loadingCtrl.create({
            content: 'Cargando productos...',
        });
        loading.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.posts = data[3]['productos'].filter(function (item) { return item.nombre_subcategoria === _this.subcategory; });
                _this.initializeItems();
                loading.dismiss();
            }, function (error) {
                console.log(error);
                loading.dismiss();
            });
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
    };
    ProfilePage.prototype.postDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__details_details__["a" /* DetailsPage */], { product: product });
        var json = JSON.stringify(product);
        localStorage.setItem('product', json);
    };
    ProfilePage.prototype.initializeItems = function () {
        this.items = this.posts;
        this.p = 1;
    };
    ProfilePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (product) {
                return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-segment [(ngModel)]="segment" (ionChange)="updateSchedule()">\n      <ion-segment-button value="all">\n        Todo\n      </ion-segment-button>\n      <ion-segment-button value="favorites">\n        Ofertas\n      </ion-segment-button>\n    </ion-segment>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" (ionInput)="getItems($event)" placeholder="Buscar">\n    </ion-searchbar>\n    <!--<ion-searchbar [(ngModel)]="terms" placeholder="Buscar"> </ion-searchbar>-->\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!--<ion-list #scheduleList [hidden]="shownSessions === 0">-->\n  <ion-list>\n\n\n\n    <ion-item>\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="pricefilter">\n        <ion-option value="max">Precio: Mayor a menor</ion-option>\n        <ion-option value="min">Precio: Menor a mayor</ion-option>\n        <ion-option value="az">Producto: A-Z</ion-option>\n        <ion-option value="za">Producto: Z-A</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item-divider>Subcategoria: {{subcategory}}</ion-item-divider>\n\n\n    <div *ngIf=" (  !pricefilter )  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor="let product of items  | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{product.nombre_pro}}</h2>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <h2>precio: {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n    <div *ngIf=" (  pricefilter==\'max\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{ product.nombre_pro }} </h2>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'min\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | replace: \'precioNuevo_pro\' | orderBy:\'precioNuevo_pro\':true | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{ product.nombre_pro }} </h2>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'az\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | orderBy:\'nombre_pro\':true | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{ product.nombre_pro }} </h2>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'za\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | orderBy:\'nombre_pro\':false | paginate: { itemsPerPage: 20, currentPage: p } ">\n            <button ion-item (click)="postDetail(product)" text-wrap>\n\n              <h2>{{ product.nombre_pro }} </h2>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n\n  </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComparePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ComparePage = (function () {
    function ComparePage(loading, navCtrl, navParams, alertCtrl, ServiceProvider) {
        var _this = this;
        this.loading = loading;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
        this.scrollBarHorizontal = (window.innerWidth < 1200);
        this.item = this.navParams.get('nombre_pro');
        window.onresize = function () {
            _this.scrollBarHorizontal = (window.innerWidth < 1200);
        };
    }
    ComparePage.prototype.ionViewDidLoad = function () {
        //let result = firsword.toString + ' ' + secondword.toString;
        var _this = this;
        var words = this.item.split(' ')[0] + ' ' + this.item.split(' ')[1] + ' ' + this.item.split(' ')[2];
        console.log(words);
        var loader = this.loading.create({
            content: 'Comparando…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.rows = data[3]['productos'].filter(function (item) { return item.nombre_pro.indexOf(words) !== -1; });
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    ComparePage.prototype.postDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], { product: product });
        var json = JSON.stringify(product);
        localStorage.setItem('product', json);
    };
    ComparePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-compare',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\compare\compare.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Comparar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <div>\n\n    <ion-item>\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="pricefilter">\n        <ion-option value="max">Precio: Mayor a menor</ion-option>\n        <ion-option value="min">Precio: Menor a mayor</ion-option>\n      </ion-select>\n    </ion-item>\n    <!--\n         Embed the ngx-datatable component with following property bindings/values:\n         1. sorttype - allow data to be sorted on multiple columns\n         2. headerHeight - Set height of table header at 50 pixels\n         3. footerHeight - Set height of table footer at 50 pixels\n         4. rowHeight - Set height of table rows at 50 pixels\n         5. rows - Derives the data for the table rows from the component class\n                   property of rows\n         6. columns - Derives the names for the table columns from the component\n                      class property of columns\n         7. columnMode - Use of standard, flex or force - Force value makes columns\n                         equidistant and span the width of the parent container\n         8. limit - the number of records to display before paginating the results\n      -->\n\n\n\n    <div *ngIf=" (  !pricefilter )  ">\n\n      <ngx-datatable class="material" [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="200"\n        [rows]="rows" [columns]="columns" [columnMode]="\'force\'" [scrollbarH]="true" [limit]="20"\n        [sortType]="\'multi\'">\n\n\n        <ngx-datatable-column name="Empresa">\n          <ng-template let-row="row" ngx-datatable-cell-template>\n\n            <div *ngIf="row.logo_emp.includes(\'http\')">\n              <img-loader src="{{row.logo_emp}}" useImg></img-loader>\n            </div>\n\n\n            <div *ngIf="row.logo_emp.includes(\'uploads/\')">\n              <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.logo_emp}}" useImg></img-loader>\n            </div>\n\n\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [width]="350" name="Nombre">\n\n          <ng-template let-row="row" ngx-datatable-cell-template>\n            {{row.nombre_pro}}\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column name="Imagen">\n          <ng-template let-row="row" ngx-datatable-cell-template>\n\n            <div *ngIf="row.imagen_pro.includes(\'http\')">\n              <img-loader src="{{row.imagen_pro}}" useImg></img-loader>\n            </div>\n\n\n            <div *ngIf="row.imagen_pro.includes(\'uploads/\')">\n              <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.imagen_pro}}" useImg></img-loader>\n            </div>\n\n\n          </ng-template>\n        </ngx-datatable-column>\n\n        <ngx-datatable-column [sortable]="true" name="Precio">\n          <ng-template let-row="row" ngx-datatable-cell-template>\n            ${{row.precioNuevo_pro | number | replace}}\n          </ng-template>\n        </ngx-datatable-column>\n\n\n        <ngx-datatable-column name="Detalles">\n          <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n            <button ion-button small outline (click)="postDetail(row)">Ver</button>\n          </ng-template>\n        </ngx-datatable-column>\n\n\n      </ngx-datatable>\n\n    </div>\n\n  </div>\n\n  <div *ngIf=" (  pricefilter==\'max\')  ">\n\n    <ngx-datatable [sortType]="\'multi\'" [headerHeight]="50" [footerHeight]="50" [rowHeight]="200" [rows]="rows"\n      [columns]="columns" [columnMode]="\'force\'" [scrollbarH]="true" [limit]="20" [sortType]="\'multi\'"\n      [sorts]="[{prop: \'precioNuevo_pro\', dir: \'desc\'}]">\n\n      <!--<div *ngFor="let row of rows| replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false">-->\n\n      <ngx-datatable-column name="Empresa">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n\n          <div *ngIf="row.logo_emp.includes(\'http\')">\n            <img-loader src="{{row.logo_emp}}" useImg></img-loader>\n          </div>\n\n\n          <div *ngIf="row.logo_emp.includes(\'uploads/\')">\n            <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.logo_emp}}" useImg></img-loader>\n          </div>\n\n\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column [width]="350" name="Nombre">\n\n        <ng-template let-row="row" ngx-datatable-cell-template>\n          {{row.nombre_pro}}\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Imagen">\n        <ng-template let-row="row" ngx-datatable-cell-template>\n\n          <div *ngIf="row.imagen_pro.includes(\'http\')">\n            <img-loader src="{{row.imagen_pro}}" useImg></img-loader>\n          </div>\n\n\n          <div *ngIf="row.imagen_pro.includes(\'uploads/\')">\n            <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{row.imagen_pro}}" useImg></img-loader>\n          </div>\n\n\n        </ng-template>\n      </ngx-datatable-column>\n\n      <ngx-datatable-column name="Precio" prop="precioNuevo_pro">\n        <ng-template let-row="row" let-sort="sortFn" ngx-datatable-cell-template>\n          ${{row.precioNuevo_pro | number | replace}}\n        </ng-template>\n      </ngx-datatable-column>\n\n\n      <ngx-datatable-column name="Detalles">\n        <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>\n          <button ion-button small outline (click)="postDetail(row)">Ver</button>\n        </ng-template>\n      </ngx-datatable-column>\n\n      <!--</div>-->\n\n    </ngx-datatable>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\compare\compare.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ComparePage);
    return ComparePage;
}());

//# sourceMappingURL=compare.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BusinessProductsPage = (function () {
    function BusinessProductsPage(navCtrl, navParams, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.empresa = this.navParams.get('id_empresa');
        this.nombre_empresa = this.navParams.get('nombre_emp');
        this.getProducts();
    }
    BusinessProductsPage.prototype.getProducts = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Cargando productos…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.posts = data[3]['productos'].filter(function (item) { return item.id_empresa === _this.empresa; });
                loader.dismiss();
                _this.initializeItems();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    BusinessProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessProductsPage');
    };
    BusinessProductsPage.prototype.postDetail = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], { product: product });
        var json = JSON.stringify(product);
        localStorage.setItem('product', json);
    };
    BusinessProductsPage.prototype.CategorySelected = function (value) {
        this.selectedCategory = this.posts.filter(function (item) { return item.nombre_categoria === value; });
        this.initializeCategories();
    };
    BusinessProductsPage.prototype.initializeItems = function () {
        this.items = this.posts;
    };
    BusinessProductsPage.prototype.initializeCategories = function () {
        this.selectedCategories = this.selectedCategory;
    };
    BusinessProductsPage.prototype.onInput = function (ev) {
        // Se reinician los valores
        this.initializeItems();
        this.initializeCategories();
        // establece el valor del buscador
        var val = ev.target.value;
        // comprueba que no este vacio
        if (val && val.trim() != '' && val.length > 1 && this.items) {
            this.items = this.items.filter(function (product) {
                return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        if (val && val.trim() != '' && val.length > 1 && this.selectedCategories) {
            this.selectedCategories = this.selectedCategories.filter(function (product) {
                return (product.nombre_pro.replace(/\á/g, 'a').replace(/\é/g, 'e').replace(/\í/g, 'i').replace(/\ó/g, 'o').replace(/\ú/g, 'u').toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BusinessProductsPage.prototype.onCancel = function (ev) {
        // reestablece el campo
        ev.target.value = '';
    };
    BusinessProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-business-products',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\business-products\business-products.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{nombre_empresa}}</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" (ionInput)="onInput($event)" (ionCancel)="onCancel($event)" placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="items?.length == 0">\n    <p>No se encontraron resultados, por favor intenta de nuevo.</p>\n  </div>\n\n  <!--<div *ngIf="items">-->\n\n  <ion-item *ngIf="items?.length != 0">\n    <ion-label>Categoria:</ion-label>\n    <ion-select [(ngModel)]="category" name="categoria" #categoria (ionChange)="CategorySelected($event)">\n      <ion-option value="">Seleccione</ion-option>\n      <ion-option *ngFor="let product of posts | unique; let i = index" value="{{product.nombre_categoria}}">{{product.nombre_categoria}}</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n\n  <div *ngIf="(category)">\n\n    <ion-item>\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="filter">\n        <ion-option value="maxi">Precio: Mayor a menor</ion-option>\n        <ion-option value="mini">Precio: Menor a mayor</ion-option>\n        <ion-option value="a-z">Producto: A-Z</ion-option>\n        <ion-option value="z-a">Porducto: Z-A</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item *ngIf=" (  !filter ) ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of selectedCategories  | replace: \'precioNuevo_pro\' | paginate: { itemsPerPage: 20, currentPage: p }"\n            text-wrap>\n\n            <button ion-item (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item *ngIf=" (filter==\'maxi\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of selectedCategories | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false  | paginate: { itemsPerPage: 40, currentPage: p } "\n            text-wrap>\n\n            <button ion-item (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item *ngIf=" (filter==\'mini\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of selectedCategories | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': true   | paginate: { itemsPerPage: 40, currentPage: p } "\n            text-wrap>\n\n            <button ion-item (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <ion-item *ngIf=" (filter==\'a-z\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of selectedCategories  | orderBy:\'nombre_pro\':true | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <ion-item *ngIf=" (filter==\'z-a\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of selectedCategories | orderBy:\'nombre_pro\':false | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </div>\n\n\n  <div *ngIf=" (!category) ">\n\n    <ion-item>\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="pricefilter">\n        <ion-option value="max">Precio: Mayor a menor</ion-option>\n        <ion-option value="min">Precio: Menor a mayor</ion-option>\n        <ion-option value="az">Producto: A-Z</ion-option>\n        <ion-option value="za">Porducto: Z-A</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item *ngIf=" (  !pricefilter ) ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of items  | replace: \'precioNuevo_pro\' | paginate: { itemsPerPage: 20, currentPage: p }"\n            text-wrap>\n\n            <button ion-item (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n\n    <ion-item *ngIf=" (pricefilter==\'max\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of items | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n\n\n    <ion-item *ngIf=" (pricefilter==\'min\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of items | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': true | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(product)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <ion-item *ngIf=" (pricefilter==\'az\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of items | orderBy:\'nombre_pro\':true | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n    <ion-item *ngIf=" ( pricefilter==\'za\')  ">\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-xs-12 *ngFor="let product of items | orderBy:\'nombre_pro\':false | paginate: { itemsPerPage: 40, currentPage: p } ">\n\n            <button ion-item text-wrap (click)="postDetail(producto)">\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'http\')">\n                <img-loader src="{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n\n              <ion-thumbnail item-left *ngIf="product.imagen_pro.includes(\'uploads/\')">\n                <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n              </ion-thumbnail>\n\n              <h2>{{ product.nombre_pro }} </h2>\n              <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n              <div *ngIf="product.precioAnterior_pro">\n                <h2>Antes:\n                  <del>{{product.precioAnterior_pro}}</del>\n                </h2>\n              </div>\n\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n\n  </div>\n\n  <!--</div>-->\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\business-products\business-products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], BusinessProductsPage);
    return BusinessProductsPage;
}());

//# sourceMappingURL=business-products.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TutorialPage = (function () {
    function TutorialPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    TutorialPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_page_tabs_page__["a" /* TabsPage */]).then(function () {
            _this.storage.set('hasSeenTutorial', 'true');
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Slides */])
    ], TutorialPage.prototype, "slides", void 0);
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tutorial',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\tutorial\tutorial.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides #slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>ICA</b>\n      </h2>\n      <p>\n        The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a demonstration of proper code use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-2.png" class="slide-image"/>\n      <h2 class="slide-title" >What is Ionic?</h2>\n      <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">What is Ionic Pro?</h2>\n      <p><b>Ionic Pro</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Play?</h2>\n      <button ion-button icon-end large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\tutorial\tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(438);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_actualizar_datos_actualizar_datos__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_business_business__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_business_products_business_products__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_compare_compare__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_offers_offers__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_support_support__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_home__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_agregar_producto_agregar_producto__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_agregar_productos_oferta_agregar_productos_oferta__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_categories_categories__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_details_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_reset_password_reset_password__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_edit_edit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_edit_product_ofert_edit_product_ofert__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_change_password_change_password__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_agregar_empresa_agregar_empresa__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_agregar_sucursal_agregar_sucursal__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_ver_empresa_ver_empresa__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_ver_empresa_edit_ver_empresa_edit__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_admin_admin__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_admin_clientes_admin_clientes__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_admin_empresas_admin_empresas__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_admin_productos_admin_productos__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_admin_edit_admin_edit__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_usuario_editar_datos_usuario_editar_datos__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__providers_conference_data__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_angularfire2__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_angularfire2_auth__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__providers_auth_service_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pipes_pipes_module__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52_ngx_pagination__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_datatable__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_ngx_filter_pipe__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55_ionic3_star_rating__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__angular_platform_browser_animations__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58_ngx_pinch_zoom__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__providers_image_image__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__directives_caps_lock_caps_lock__ = __webpack_require__(622);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































//tablas con paginacion

//filtrar busqueda

//calificacion por estrellas

//animacion

//cargar imagenes por vista

//zomm imagen



var config = {
    apiKey: "AIzaSyBR3YL7I-JZRRCMdBQ6mFlyvj-AJYtoD_Y",
    authDomain: "commerline-1de87.firebaseapp.com",
    databaseURL: "https://commerline-1de87.firebaseio.com",
    projectId: "commerline-1de87",
    storageBucket: "commerline-1de87.appspot.com",
    messagingSenderId: "955829251799"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_actualizar_datos_actualizar_datos__["a" /* ActualizarDatosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_agregar_producto_agregar_producto__["a" /* AgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_agregar_productos_oferta_agregar_productos_oferta__["a" /* AgregarProductosOfertaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_business_products_business_products__["a" /* BusinessProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_compare_compare__["a" /* ComparePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_product_ofert_edit_product_ofert__["a" /* EditProductOfertPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_agregar_empresa_agregar_empresa__["a" /* AgregarEmpresaPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_agregar_sucursal_agregar_sucursal__["a" /* AgregarSucursalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_ver_empresa_ver_empresa__["a" /* VerEmpresaPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_ver_empresa_edit_ver_empresa_edit__["a" /* VerEmpresaEditPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_admin_clientes_admin_clientes__["a" /* AdminClientesPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_admin_empresas_admin_empresas__["a" /* AdminEmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_admin_productos_admin_productos__["a" /* AdminProductosPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_admin_edit_admin_edit__["a" /* AdminEditPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_usuario_editar_datos_usuario_editar_datos__["a" /* UsuarioEditarDatosPage */],
                __WEBPACK_IMPORTED_MODULE_60__directives_caps_lock_caps_lock__["a" /* CapsLockDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_51__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_52_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_53__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_54_ngx_filter_pipe__["a" /* FilterPipeModule */],
                __WEBPACK_IMPORTED_MODULE_55_ionic3_star_rating__["a" /* StarRatingModule */],
                __WEBPACK_IMPORTED_MODULE_56__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_58_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_57_ionic_image_loader__["a" /* IonicImageLoader */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */], name: 'TabsPage', segment: 'tabs-page' },
                        //{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
                        //{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
                        { component: __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */], name: 'About', segment: 'about' },
                        { component: __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */], name: 'Tutorial', segment: 'tutorial' },
                        { component: __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */], name: 'SupportPage', segment: 'support' },
                        { component: __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' },
                        { component: __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */], name: 'AccountPage', segment: 'account' },
                        { component: __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */], name: 'SignupPage', segment: 'signup' },
                        { component: __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */], name: 'HomePage', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_29__pages_categories_categories__["a" /* CategoriesPage */], name: 'Categories', segment: 'categories' },
                        { component: __WEBPACK_IMPORTED_MODULE_16__pages_business_business__["a" /* BusinessPage */], name: 'BusinessPage', segment: 'business' },
                        { component: __WEBPACK_IMPORTED_MODULE_39__pages_admin_admin__["a" /* AdminPage */], name: 'AdminPage', segment: 'admin' },
                        { component: __WEBPACK_IMPORTED_MODULE_44__pages_usuario_usuario__["a" /* UsuarioPage */], name: 'UsuarioPage', segment: 'user' },
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_48_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_49_angularfire2_auth__["a" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_actualizar_datos_actualizar_datos__["a" /* ActualizarDatosPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_tabs_page_tabs_page__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tutorial_tutorial__["a" /* TutorialPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_agregar_producto_agregar_producto__["a" /* AgregarProductoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_agregar_productos_oferta_agregar_productos_oferta__["a" /* AgregarProductosOfertaPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_details_details__["a" /* DetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_business_products_business_products__["a" /* BusinessProductsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_compare_compare__["a" /* ComparePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_offers_offers__["a" /* OffersPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_edit_edit__["a" /* EditPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_edit_product_ofert_edit_product_ofert__["a" /* EditProductOfertPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_agregar_empresa_agregar_empresa__["a" /* AgregarEmpresaPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_agregar_sucursal_agregar_sucursal__["a" /* AgregarSucursalPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_ver_empresa_ver_empresa__["a" /* VerEmpresaPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_ver_empresa_edit_ver_empresa_edit__["a" /* VerEmpresaEditPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_admin_clientes_admin_clientes__["a" /* AdminClientesPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_admin_empresas_admin_empresas__["a" /* AdminEmpresasPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_admin_productos_admin_productos__["a" /* AdminProductosPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_admin_edit_admin_edit__["a" /* AdminEditPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_usuario_usuario__["a" /* UsuarioPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_usuario_editar_datos_usuario_editar_datos__["a" /* UsuarioEditarDatosPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_46__providers_conference_data__["a" /* ConferenceData */],
                __WEBPACK_IMPORTED_MODULE_47__providers_user_data__["a" /* UserData */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_50__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_59__providers_image_image__["a" /* ImageProvider */],
                __WEBPACK_IMPORTED_MODULE_50__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_support_support__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_categories_categories__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_business_business__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_offers_offers__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ConferenceApp = (function () {
    function ConferenceApp(events, userData, menu, platform, confData, storage, splashScreen) {
        var _this = this;
        this.events = events;
        this.userData = userData;
        this.menu = menu;
        this.platform = platform;
        this.confData = confData;
        this.storage = storage;
        this.splashScreen = splashScreen;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'Inicio', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_13__pages_offers_offers__["a" /* OffersPage */], index: 0, icon: 'home' },
            { title: 'Categorias', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_11__pages_categories_categories__["a" /* CategoriesPage */], index: 1, icon: 'list-box' },
            { title: 'Empresas', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_12__pages_business_business__["a" /* BusinessPage */], index: 2, icon: 'cart' },
            { title: 'Acerca de Nosotros', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], tabComponent: __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */], index: 3, icon: 'information-circle' }
        ];
        this.loggedInPages = [
            { title: 'Cuenta', name: 'AccountPage', component: __WEBPACK_IMPORTED_MODULE_5__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'Contactenos', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_support_support__["a" /* SupportPage */], icon: 'mail' },
            { title: 'Salir', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        //admin
        this.loggedInPagesAdmin = [
            { title: 'Administrador', name: 'AdminPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */], icon: 'person' },
            { title: 'Salir', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        //user
        this.loggedInPagesUser = [
            { title: 'Usuario', name: 'UsuarioPage', component: __WEBPACK_IMPORTED_MODULE_16__pages_admin_admin__["a" /* AdminPage */], icon: 'person' },
            { title: 'Salir', name: 'TabsPage', component: __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'Ingreso', name: 'LoginPage', component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'Contactenos', name: 'SupportPage', component: __WEBPACK_IMPORTED_MODULE_10__pages_support_support__["a" /* SupportPage */], icon: 'contacts' },
            { title: 'Registro', name: 'SignupPage', component: __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        // Check if the user has already seen the tutorial
        this.storage.get('hasSeenTutorial')
            .then(function (hasSeenTutorial) {
            if (hasSeenTutorial) {
                //this.rootPage = TabsPage;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_page_tabs_page__["a" /* TabsPage */];
                //limpia las variables globales
                localStorage.clear();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */];
            }
            _this.platformReady();
        });
        // load the conference data
        confData.load();
        // decide which menu items should be hidden by current login status stored in local storage
        /*
        this.userData.hasLoggedIn().then((hasLoggedIn) => {
          this.enableMenu(hasLoggedIn === true);
        });
    
        this.enableMenu(true);
        this.enableMenuAdmin(true);
    
        this.listenToLoginEvents();
        //js
        //alert(testvar);
    
        */
    }
    ConferenceApp.prototype.openPage = function (page) {
        var params = {};
        // the nav component was found using @ViewChild(Nav)
        // setRoot on the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            params = { tabIndex: page.index };
        }
        // If we are already on tabs just change the selected tab
        // don't setRoot again, this maintains the history stack of the
        // tabs even if changing them from the menu
        if (this.nav.getActiveChildNavs().length && page.index != undefined) {
            this.nav.getActiveChildNavs()[0].select(page.index);
        }
        else {
            // Set the root of the nav with params if it's a tab index
            this.nav.setRoot(page.name, params).catch(function (err) {
                console.log("Didn't set nav root: " + err);
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            this.userData.logout();
            //limpia las variables globales
            localStorage.clear();
        }
    };
    ConferenceApp.prototype.openTutorial = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_tutorial_tutorial__["a" /* TutorialPage */]);
    };
    ConferenceApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:signup', function () {
            _this.enableMenu(true);
        });
        //cuando admin se loguea
        this.events.subscribe('user:loginAdmin', function () {
            _this.enableMenuAdmin(true);
        });
        //cuando user se loguea
        this.events.subscribe('user:loginUser', function () {
            _this.enableMenuUser(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    ConferenceApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.enableMenuAdmin = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenuAdmin');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.enableMenuUser = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenuUser');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    ConferenceApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    };
    ConferenceApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\app\app.template.html"*/'<ion-split-pane>\n\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegación\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Cuenta\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Mostrar Tutorial\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegación\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Cuenta\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Tutorial\n        </ion-list-header>\n        <button ion-item menuClose (click)="openTutorial()">\n          <ion-icon item-start name="hammer"></ion-icon>\n          Mostrar Tutorial\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n  <!-- logged in menu Administrador -->\n  <ion-menu id="loggedInMenuAdmin" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegación\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <!--ADMINISTRADOR-->\n      <ion-list>\n        <ion-list-header>\n          Administrador\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPagesAdmin" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n\n    </ion-content>\n\n  </ion-menu>\n\n\n\n  <!-- logged in menu Usuarios -->\n  <ion-menu id="loggedInMenuUser" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Navegación\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n      <!--usuario-->\n      <ion-list>\n        <ion-list-header>\n          Usuario\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPagesUser" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n\n\n    </ion-content>\n\n  </ion-menu>\n\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\app\app.template.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_15__providers_user_data__["a" /* UserData */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_14__providers_conference_data__["a" /* ConferenceData */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_clientes_admin_clientes__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_empresas_admin_empresas__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_edit_admin_edit__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password_change_password__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminPage = (function () {
    function AdminPage(navParams, userData, nav, storage, ServiceProvider) {
        //obtener empresarios
        this.navParams = navParams;
        this.userData = userData;
        this.nav = nav;
        this.storage = storage;
        this.ServiceProvider = ServiceProvider;
        this.getAdmin();
    }
    AdminPage.prototype.getAdmin = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.users = data[7]['admin'];
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    AdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    AdminPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    AdminPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
            if (username == null) {
                _this.storage.remove('username');
            }
            else {
                //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
                localStorage.setItem('login', username);
            }
        });
    };
    AdminPage.prototype.verEmpresas = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__admin_empresas_admin_empresas__["a" /* AdminEmpresasPage */]);
    };
    AdminPage.prototype.verClientes = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__admin_clientes_admin_clientes__["a" /* AdminClientesPage */]);
    };
    AdminPage.prototype.updateDate = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__admin_edit_admin_edit__["a" /* AdminEditPage */], item);
    };
    AdminPage.prototype.changePassword = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__change_password_change_password__["a" /* ChangePasswordPage */], item);
    };
    AdminPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
        //si sale del sistema, la variable global se establece como null;
        localStorage.clear();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Administrador</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n\n  <div padding-top text-center *ngIf="username">\n    <!--<img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n    <h2>{{username}}</h2> -->\n\n\n    <div *ngFor="let item of users">\n      <div *ngIf="(item.correo_admin === username || item.correo_admin.toUpperCase() === username)">\n        <h2> Bienvenido: {{item.nombre_admin}}\n        </h2>\n\n\n\n        <ion-list inset>\n\n          <button ion-item (click)="verEmpresas()">Ver Empresas</button>\n          <button ion-item (click)="verClientes()">Ver Clientes</button>\n          <button ion-item (click)="updateDate(item)">Actualizar Datos</button>\n          <button ion-item (click)="changePassword(item)">Cambiar contraseña</button>\n          <button ion-item (click)="logout()">Salir</button>\n\n\n        </ion-list>\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ImageProvider = (function () {
    function ImageProvider(http) {
        this.http = http;
        /**
       * @name _READER
       * @type object
       * @private
       * @description              Creates a FileReader API object
       */
        this._READER = new FileReader();
        console.log('Hello ImageProvider Provider');
    }
    /**
     * @public
     * @method handleImageSelection
     * @param event  {any}     	The DOM event that we are capturing from the File input field
     * @description    			Uses the FileReader API to capture the input field event, retrieve
     *                 			the selected image and return that as a base64 data URL courtesy of
     *							an Observable
     * @return {Observable}
     */
    ImageProvider.prototype.handleImageSelection = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this._READER.readAsDataURL(file);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this._READER.onloadend = function () {
                observer.next(_this._READER.result);
                observer.complete();
            };
        });
    };
    /**
     * @public
     * @method isCorrectFile
     * @param file  {String}    The file type we want to check
     * @description    			Uses a regular expression to check that the supplied file format
     *                 			matches those specified within the method
     * @return {any}
     */
    ImageProvider.prototype.isCorrectFileType = function (file) {
        return (/^(gif|jpg|jpeg|png)$/i).test(file);
    };
    ImageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ImageProvider);
    return ImageProvider;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_edit__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agregar_producto_agregar_producto__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agregar_productos_oferta_agregar_productos_oferta__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_product_ofert_edit_product_ofert__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, loading, navParams, alertCtrl, userData, ServiceProvider) {
        //this.empresa = this.navParams.get('id_empresa');
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.userData = userData;
        this.ServiceProvider = ServiceProvider;
        this.p = 1;
        this.checked = [];
        this.showButton = false;
        this.empresa = JSON.parse(localStorage.getItem('id_empresa'));
        this.getProducts();
    }
    HomePage_1 = HomePage;
    HomePage.prototype.getProducts = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Cargando productos…',
        });
        loader.present().then(function () {
            _this.ServiceProvider.getData()
                .subscribe(function (data) {
                _this.posts = data[3]['productos'].filter(function (item) { return item.id_empresa === _this.empresa; });
                _this.initializeItems();
                loader.dismiss();
            }, function (err) {
                console.log(err);
                loader.dismiss();
            });
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewProductsPage');
    };
    HomePage.prototype.ngOnInit = function () {
        this.cliente = JSON.parse(localStorage.getItem('item'));
    };
    HomePage.prototype.Post = function () {
        //localStorage.setItem('id_cliente', this.cliente);
        //this.navCtrl.push(AgregarProductoPage)
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'El producto o los productos que va a ingresar estan en oferta?',
            message: 'recuerda que registrar productos en oferta, tiene un costo',
            buttons: [
                {
                    text: 'SI',
                    //role: 'SI',
                    handler: function () {
                        //localStorage.setItem('id_cliente', this.cliente);
                        //this.navCtrl.push(AgregarProductosOfertaPage);
                        var cliente = JSON.stringify(_this.cliente.id_cliente);
                        localStorage.setItem('id_cliente', cliente);
                        var empresa = JSON.stringify(_this.cliente);
                        localStorage.setItem('id_empresa', empresa);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__agregar_productos_oferta_agregar_productos_oferta__["a" /* AgregarProductosOfertaPage */], { item: _this.cliente });
                    }
                },
                {
                    text: 'NO',
                    handler: function () {
                        var cliente = JSON.stringify(_this.cliente.id_cliente);
                        localStorage.setItem('id_cliente', cliente);
                        var empresa = JSON.stringify(_this.cliente);
                        localStorage.setItem('id_empresa', empresa);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__agregar_producto_agregar_producto__["a" /* AgregarProductoPage */], { item: _this.cliente });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.editPost = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__edit_edit__["a" /* EditPage */], item);
    };
    HomePage.prototype.editProductOfert = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_product_ofert_edit_product_ofert__["a" /* EditProductOfertPage */], item);
    };
    HomePage.prototype.initializeItems = function () {
        this.items = this.posts;
        this.p = 1;
    };
    HomePage.prototype.getItems = function (ev) {
        // Restablecer artículos de nuevo a todos los artículos
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // si el valor es una cadena vacía no filtre los elementos
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.nombre_pro.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    //agrega checkedbox a el array y verifica si se deselecciona 
    HomePage.prototype.addCheckbox = function (event, checkbox) {
        this.showButton = true;
        if (event.checked) {
            this.checked.push(checkbox);
        }
        else {
            var index = this.removeCheckedFromArray(checkbox);
            this.checked.splice(index, 1);
        }
        if (this.checked.length == 0) {
            this.showButton = false;
        }
    };
    //remueve checkbox desde array cuando se desmarca
    HomePage.prototype.removeCheckedFromArray = function (checkbox) {
        return this.checked.findIndex(function (item) {
            return item === checkbox;
        });
    };
    HomePage.prototype.deletePost2 = function () {
        var _this = this;
        console.log('productos a eliminar:', this.checked);
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Estas seguro de eliminar estos productos?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var resources = JSON.stringify(_this.checked);
                        console.log(resources);
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteSeveralProducts(resources).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "HECHO",
                                    subTitle: ("Datos eliminados exitosamente"),
                                    buttons: ['OK']
                                });
                                alert.present();
                                _this.navCtrl.setRoot(HomePage_1);
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "ERROR",
                                    subTitle: ("No se pudo eliminar los productos"),
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
    };
    HomePage.prototype.deletePost = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Estas seguro de eliminar este producto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteProducts(item).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
                                    title: "HECHO",
                                    subTitle: ("Datos eliminados exitosamente"),
                                    buttons: ['OK']
                                });
                                alert.present();
                                _this.navCtrl.setRoot(HomePage_1);
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
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
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis productos</ion-title>\n  </ion-navbar>\n\n\n  <ion-toolbar no-border-top>\n    <ion-searchbar color="primary" (ionInput)="getItems($event)" placeholder="Buscar">\n    </ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div *ngIf="items?.length == 0">\n    <h2>Aun no ha registrado productos, por favor registra primero su empresa y luego sus productos, Gracias.</h2>\n  </div>\n\n\n  <div *ngIf="items?.length != 0">\n\n    <ion-item>\n      <button class="add" ion-button item-right icon-right margin-bottom color="primary" (click)="Post()">\n        Agregar Producto\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ordenar por</ion-label>\n      <ion-select [(ngModel)]="pricefilter">\n        <ion-option value="max">Precio: Mayor a menor</ion-option>\n        <ion-option value="min">Precio: Menor a mayor</ion-option>\n        <ion-option value="az">Producto: A-Z</ion-option>\n        <ion-option value="za">Porducto: Z-A</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <div *ngIf="showButton">\n      <button ion-button icon-end color="secondary" item-right (click)="deletePost2()">Eliminar Elementos\n        seleccionados\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </div>\n\n\n\n    <div *ngIf=" (  !pricefilter )  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor="let product of items | paginate: { itemsPerPage: 20, currentPage: p }">\n\n\n            <ion-item text-wrap>\n\n              <ion-label>\n\n                <ion-checkbox color="danger" (ionChange)="addCheckbox($event,product)"></ion-checkbox>\n\n                <ion-thumbnail item-left>\n                  <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n                </ion-thumbnail>\n\n\n                <div *ngIf="product.diasOferta_pro">\n                  <ion-badge class="color">Oferta</ion-badge>\n                  <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}</h2>\n                  <h2 ion-text color="primary">Fin de oferta: {{product.finOferta_pro}}</h2>\n                </div>\n\n                <h2>{{ product.nombre_pro }} </h2>\n                <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n                <h2 *ngIf="product.diasOferta_pro">precio oferta: $ {{product.precioAnterior_pro | number | replace}}</h2>\n                <p>descripción: {{product.desripcion_pro}}</p>\n\n\n\n                <button *ngIf="product.diasOferta_pro" ion-button icon-end color="light" item-right (click)="editProductOfert(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button *ngIf="product.diasOferta_pro == \'\'" ion-button icon-end color="primary" item-right (click)="editPost(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button ion-button icon-end color="secondary" item-right (click)="deletePost(product)">Eliminar\n                  <ion-icon name="close"></ion-icon>\n                </button>\n\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </div>\n\n\n    <div *ngIf=" (  pricefilter==\'max\')  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items  | replace: \'precioNuevo_pro\'  | orderBy: \'precioNuevo_pro\': false | paginate: { itemsPerPage: 20, currentPage: p } ">\n\n            <ion-item text-wrap>\n\n              <ion-label>\n\n                <ion-checkbox color="danger" (ionChange)="addCheckbox($event,product)"></ion-checkbox>\n\n                <ion-thumbnail item-left>\n                  <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n                </ion-thumbnail>\n\n\n                <div *ngIf="product.diasOferta_pro">\n                  <ion-badge class="color">Oferta</ion-badge>\n                  <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}</h2>\n                  <h2 ion-text color="primary">Fin de oferta: {{product.finOferta_pro}}</h2>\n                </div>\n\n                <h2>{{ product.nombre_pro }} </h2>\n                <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n                <h2 *ngIf="product.diasOferta_pro">precio oferta: $ {{product.precioAnterior_pro | number | replace}}</h2>\n                <p>descripción: {{product.desripcion_pro}}</p>\n\n\n\n                <button *ngIf="product.diasOferta_pro" ion-button icon-end color="light" item-right (click)="editProductOfert(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button *ngIf="product.diasOferta_pro == \'\'" ion-button icon-end color="primary" item-right (click)="editPost(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button ion-button icon-end color="secondary" item-right (click)="deletePost(product)">Eliminar\n                  <ion-icon name="close"></ion-icon>\n                </button>\n\n\n              </ion-label>\n\n            </ion-item>\n\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'min\')  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | replace: \'precioNuevo_pro\' | orderBy:\'precioNuevo_pro\':true | paginate: { itemsPerPage: 20, currentPage: p } ">\n\n            <ion-item text-wrap>\n\n              <ion-label>\n\n                <ion-checkbox color="danger" (ionChange)="addCheckbox($event,product)"></ion-checkbox>\n\n                <ion-thumbnail item-left>\n                  <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n                </ion-thumbnail>\n\n\n                <div *ngIf="product.diasOferta_pro">\n                  <ion-badge class="color">Oferta</ion-badge>\n                  <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}</h2>\n                  <h2 ion-text color="primary">Fin de oferta: {{product.finOferta_pro}}</h2>\n                </div>\n\n                <h2>{{ product.nombre_pro }} </h2>\n                <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n                <h2 *ngIf="product.diasOferta_pro">precio oferta: $ {{product.precioAnterior_pro | number | replace}}</h2>\n                <p>descripción: {{product.desripcion_pro}}</p>\n\n\n\n                <button *ngIf="product.diasOferta_pro" ion-button icon-end color="light" item-right (click)="editProductOfert(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button *ngIf="product.diasOferta_pro == \'\'" ion-button icon-end color="primary" item-right (click)="editPost(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button ion-button icon-end color="secondary" item-right (click)="deletePost(product)">Eliminar\n                  <ion-icon name="close"></ion-icon>\n                </button>\n\n\n              </ion-label>\n\n            </ion-item>\n\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'az\')  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | orderBy:\'nombre_pro\':true | paginate: { itemsPerPage: 20, currentPage: p } ">\n\n            <ion-item text-wrap>\n\n              <ion-label>\n\n                <ion-checkbox color="danger" (ionChange)="addCheckbox($event,product)"></ion-checkbox>\n\n                <ion-thumbnail item-left>\n                  <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n                </ion-thumbnail>\n\n\n                <div *ngIf="product.diasOferta_pro">\n                  <ion-badge class="color">Oferta</ion-badge>\n                  <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}</h2>\n                  <h2 ion-text color="primary">Fin de oferta: {{product.finOferta_pro}}</h2>\n                </div>\n\n                <h2>{{ product.nombre_pro }} </h2>\n                <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n                <h2 *ngIf="product.diasOferta_pro">precio oferta: $ {{product.precioAnterior_pro | number | replace}}</h2>\n                <p>descripción: {{product.desripcion_pro}}</p>\n\n\n\n                <button *ngIf="product.diasOferta_pro" ion-button icon-end color="light" item-right (click)="editProductOfert(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button *ngIf="product.diasOferta_pro == \'\'" ion-button icon-end color="primary" item-right (click)="editPost(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button ion-button icon-end color="secondary" item-right (click)="deletePost(product)">Eliminar\n                  <ion-icon name="close"></ion-icon>\n                </button>\n\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf=" (  pricefilter==\'za\')  ">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-lg-6 col-md-12 col-sm-12 col-12 *ngFor=" let product of items | orderBy:\'nombre_pro\':false | paginate: { itemsPerPage: 20, currentPage: p } ">\n\n            <ion-item text-wrap>\n\n              <ion-label>\n\n                <ion-checkbox color="danger" (ionChange)="addCheckbox($event,product)"></ion-checkbox>\n\n                <ion-thumbnail item-left>\n                  <img-loader src="http://www.commerapp.com/ionic-php-mysql/{{product.imagen_pro}}" useImg></img-loader>\n                </ion-thumbnail>\n\n\n                <div *ngIf="product.diasOferta_pro">\n                  <ion-badge class="color">Oferta</ion-badge>\n                  <h2 ion-text color="primary"> Fecha inicio de oferta: {{product.inicioOferta_pro}}</h2>\n                  <h2 ion-text color="primary">Fin de oferta: {{product.finOferta_pro}}</h2>\n                </div>\n\n                <h2>{{ product.nombre_pro }} </h2>\n                <h2>precio: $ {{product.precioNuevo_pro | number | replace}}</h2>\n                <h2 *ngIf="product.diasOferta_pro">precio oferta: $ {{product.precioAnterior_pro | number | replace}}</h2>\n                <p>descripción: {{product.desripcion_pro}}</p>\n\n\n\n                <button *ngIf="product.diasOferta_pro" ion-button icon-end color="light" item-right (click)="editProductOfert(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button *ngIf="product.diasOferta_pro == \'\'" ion-button icon-end color="primary" item-right (click)="editPost(product)">Editar\n                  <ion-icon name="create"></ion-icon>\n                </button>\n\n                <button ion-button icon-end color="secondary" item-right (click)="deletePost(product)">Eliminar\n                  <ion-icon name="close"></ion-icon>\n                </button>\n\n\n              </ion-label>\n\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div *ngIf="showButton">\n      <button ion-button icon-end color="secondary" item-right (click)="deletePost2()">Eliminar Elementos\n        seleccionados\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </div>\n\n    <pagination-controls class="my-pagination" (pageChange)="p = $event" maxSize="12" directionLinks="true" autoHide="true"\n      responsive="true" previousLabel="Anterior" nextLabel="Siguiente" screenReaderPaginationLabel="Pagination"\n      screenReaderPageLabel="page" screenReaderCurrentLabel="You\'re on page">\n    </pagination-controls>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 281,
	"./af.js": 281,
	"./ar": 282,
	"./ar-dz": 283,
	"./ar-dz.js": 283,
	"./ar-kw": 284,
	"./ar-kw.js": 284,
	"./ar-ly": 285,
	"./ar-ly.js": 285,
	"./ar-ma": 286,
	"./ar-ma.js": 286,
	"./ar-sa": 287,
	"./ar-sa.js": 287,
	"./ar-tn": 288,
	"./ar-tn.js": 288,
	"./ar.js": 282,
	"./az": 289,
	"./az.js": 289,
	"./be": 290,
	"./be.js": 290,
	"./bg": 291,
	"./bg.js": 291,
	"./bm": 292,
	"./bm.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 302,
	"./de-at": 303,
	"./de-at.js": 303,
	"./de-ch": 304,
	"./de-ch.js": 304,
	"./de.js": 302,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-SG": 307,
	"./en-SG.js": 307,
	"./en-au": 308,
	"./en-au.js": 308,
	"./en-ca": 309,
	"./en-ca.js": 309,
	"./en-gb": 310,
	"./en-gb.js": 310,
	"./en-ie": 311,
	"./en-ie.js": 311,
	"./en-il": 312,
	"./en-il.js": 312,
	"./en-nz": 313,
	"./en-nz.js": 313,
	"./eo": 314,
	"./eo.js": 314,
	"./es": 315,
	"./es-do": 316,
	"./es-do.js": 316,
	"./es-us": 317,
	"./es-us.js": 317,
	"./es.js": 315,
	"./et": 318,
	"./et.js": 318,
	"./eu": 319,
	"./eu.js": 319,
	"./fa": 320,
	"./fa.js": 320,
	"./fi": 321,
	"./fi.js": 321,
	"./fo": 322,
	"./fo.js": 322,
	"./fr": 323,
	"./fr-ca": 324,
	"./fr-ca.js": 324,
	"./fr-ch": 325,
	"./fr-ch.js": 325,
	"./fr.js": 323,
	"./fy": 326,
	"./fy.js": 326,
	"./ga": 327,
	"./ga.js": 327,
	"./gd": 328,
	"./gd.js": 328,
	"./gl": 329,
	"./gl.js": 329,
	"./gom-latn": 330,
	"./gom-latn.js": 330,
	"./gu": 331,
	"./gu.js": 331,
	"./he": 332,
	"./he.js": 332,
	"./hi": 333,
	"./hi.js": 333,
	"./hr": 334,
	"./hr.js": 334,
	"./hu": 335,
	"./hu.js": 335,
	"./hy-am": 336,
	"./hy-am.js": 336,
	"./id": 337,
	"./id.js": 337,
	"./is": 338,
	"./is.js": 338,
	"./it": 339,
	"./it-ch": 340,
	"./it-ch.js": 340,
	"./it.js": 339,
	"./ja": 341,
	"./ja.js": 341,
	"./jv": 342,
	"./jv.js": 342,
	"./ka": 343,
	"./ka.js": 343,
	"./kk": 344,
	"./kk.js": 344,
	"./km": 345,
	"./km.js": 345,
	"./kn": 346,
	"./kn.js": 346,
	"./ko": 347,
	"./ko.js": 347,
	"./ku": 348,
	"./ku.js": 348,
	"./ky": 349,
	"./ky.js": 349,
	"./lb": 350,
	"./lb.js": 350,
	"./lo": 351,
	"./lo.js": 351,
	"./lt": 352,
	"./lt.js": 352,
	"./lv": 353,
	"./lv.js": 353,
	"./me": 354,
	"./me.js": 354,
	"./mi": 355,
	"./mi.js": 355,
	"./mk": 356,
	"./mk.js": 356,
	"./ml": 357,
	"./ml.js": 357,
	"./mn": 358,
	"./mn.js": 358,
	"./mr": 359,
	"./mr.js": 359,
	"./ms": 360,
	"./ms-my": 361,
	"./ms-my.js": 361,
	"./ms.js": 360,
	"./mt": 362,
	"./mt.js": 362,
	"./my": 363,
	"./my.js": 363,
	"./nb": 364,
	"./nb.js": 364,
	"./ne": 365,
	"./ne.js": 365,
	"./nl": 366,
	"./nl-be": 367,
	"./nl-be.js": 367,
	"./nl.js": 366,
	"./nn": 368,
	"./nn.js": 368,
	"./pa-in": 369,
	"./pa-in.js": 369,
	"./pl": 370,
	"./pl.js": 370,
	"./pt": 371,
	"./pt-br": 372,
	"./pt-br.js": 372,
	"./pt.js": 371,
	"./ro": 373,
	"./ro.js": 373,
	"./ru": 374,
	"./ru.js": 374,
	"./sd": 375,
	"./sd.js": 375,
	"./se": 376,
	"./se.js": 376,
	"./si": 377,
	"./si.js": 377,
	"./sk": 378,
	"./sk.js": 378,
	"./sl": 379,
	"./sl.js": 379,
	"./sq": 380,
	"./sq.js": 380,
	"./sr": 381,
	"./sr-cyrl": 382,
	"./sr-cyrl.js": 382,
	"./sr.js": 381,
	"./ss": 383,
	"./ss.js": 383,
	"./sv": 384,
	"./sv.js": 384,
	"./sw": 385,
	"./sw.js": 385,
	"./ta": 386,
	"./ta.js": 386,
	"./te": 387,
	"./te.js": 387,
	"./tet": 388,
	"./tet.js": 388,
	"./tg": 389,
	"./tg.js": 389,
	"./th": 390,
	"./th.js": 390,
	"./tl-ph": 391,
	"./tl-ph.js": 391,
	"./tlh": 392,
	"./tlh.js": 392,
	"./tr": 393,
	"./tr.js": 393,
	"./tzl": 394,
	"./tzl.js": 394,
	"./tzm": 395,
	"./tzm-latn": 396,
	"./tzm-latn.js": 396,
	"./tzm.js": 395,
	"./ug-cn": 397,
	"./ug-cn.js": 397,
	"./uk": 398,
	"./uk.js": 398,
	"./ur": 399,
	"./ur.js": 399,
	"./uz": 400,
	"./uz-latn": 401,
	"./uz-latn.js": 401,
	"./uz.js": 400,
	"./vi": 402,
	"./vi.js": 402,
	"./x-pseudo": 403,
	"./x-pseudo.js": 403,
	"./yo": 404,
	"./yo.js": 404,
	"./zh-cn": 405,
	"./zh-cn.js": 405,
	"./zh-hk": 406,
	"./zh-hk.js": 406,
	"./zh-tw": 407,
	"./zh-tw.js": 407
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 590;

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__unique_unique__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__replace_replace__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__safe_safe__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__autocompletewords_autocompletewords__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter_unique_filter_unique__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__offer_time_offer_time__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__unique_unique__["a" /* UniquePipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_replace__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__safe_safe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_5__autocompletewords_autocompletewords__["a" /* AutocompletewordsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__filter_unique_filter_unique__["a" /* FilterUniquePipe */],
                __WEBPACK_IMPORTED_MODULE_7__offer_time_offer_time__["a" /* OfferTimePipe */],
            ],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__unique_unique__["a" /* UniquePipe */],
                __WEBPACK_IMPORTED_MODULE_2__replace_replace__["a" /* ReplacePipe */],
                __WEBPACK_IMPORTED_MODULE_3__order_by_order_by__["a" /* OrderByPipe */],
                __WEBPACK_IMPORTED_MODULE_4__safe_safe__["a" /* SafePipe */],
                __WEBPACK_IMPORTED_MODULE_5__autocompletewords_autocompletewords__["a" /* AutocompletewordsPipe */],
                __WEBPACK_IMPORTED_MODULE_6__filter_unique_filter_unique__["a" /* FilterUniquePipe */],
                __WEBPACK_IMPORTED_MODULE_7__offer_time_offer_time__["a" /* OfferTimePipe */],
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (value, term) {
        if (value !== undefined && value !== null) {
            if (term) {
                // term.indexOf(value);
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, term);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_lodash__["uniqBy"](value, 'nombre_categoria');
            }
        }
        return value;
    };
    UniquePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'unique',
        })
    ], UniquePipe);
    return UniquePipe;
}());

//# sourceMappingURL=unique.js.map

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the ReplacePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var ReplacePipe = (function () {
    function ReplacePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    ReplacePipe.prototype.transform = function (items, term) {
        if (items && items.length)
            if (term) {
                return items.filter(function (it) { return it[term] = it[term].replace(/\D/g, '').replace(/\./g, ''); });
            }
            else {
                return items.replace(/\,/g, '.');
            }
        return items;
    };
    ReplacePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'replace',
        })
    ], ReplacePipe);
    return ReplacePipe;
}());

//# sourceMappingURL=replace.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OrderByPipe.prototype.transform = function (array, orderBy, asc) {
        var _this = this;
        if (asc === void 0) { asc = true; }
        if (!orderBy || orderBy.trim() == "") {
            return array;
        }
        //ascending
        if (asc) {
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item1[orderBy], item2[orderBy]);
            });
        }
        else {
            //not asc
            return Array.from(array).sort(function (item1, item2) {
                return _this.orderByComparator(item2[orderBy], item1[orderBy]);
            });
        }
    };
    OrderByPipe.prototype.orderByComparator = function (a, b) {
        if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
            //Isn't a number so lowercase the string to properly compare
            if (a.toLowerCase() < b.toLowerCase())
                return -1;
            if (a.toLowerCase() > b.toLowerCase())
                return 1;
            //.toLowerCase().indexOf(val.toLowerCase()) > -1)
        }
        else {
            //Parse strings as numbers to compare properly
            if (parseFloat(a) < parseFloat(b))
                return -1;
            if (parseFloat(a) > parseFloat(b))
                return 1;
        }
        return 0; //equal each other
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'safe',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompletewordsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import * as _ from 'lodash';
var AutocompletewordsPipe = (function () {
    function AutocompletewordsPipe() {
        this.Array = [];
    }
    AutocompletewordsPipe.prototype.transform = function (value) {
        if (!value) {
            return value;
        }
        //value = value.trim();
        var firsword = value.split(' ')[0];
        var secondword = value.split(' ')[1];
        //let sd = _.uniqBy(secondword, 'nombre_pro');
        //let result = firsword + secondword;
        //let result: any;
        var result = (firsword + secondword);
        //let result = firsword.toString + ' ' + secondword.toString;
        //result.replace(/\s/g, "");
        //let final: any;
        //final = this.Array.push({ search: result }).toString();
        //let names = value.split(" ");
        //let hp = names[(names.length - 2)]
        return result;
    };
    AutocompletewordsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'autocompletewords',
        })
    ], AutocompletewordsPipe);
    return AutocompletewordsPipe;
}());

//# sourceMappingURL=autocompletewords.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterUniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Generated class for the FilterUniquePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var FilterUniquePipe = (function () {
    function FilterUniquePipe() {
    }
    FilterUniquePipe.prototype.transform = function (value) {
        /* let firsword: any;
        let secondword: any;
        let words: any;
    
    
        words = value.split(' ').toString();
    
    
        let word0 : any;
        word0 = words[0].toString();
        //var word1 = words[1];
    
        let result: any
        //result = (firsword + ' ' + secondword);
        result = value.slice(0, 2);
        */
        //eliminar los elementos dupllicados
        var uniqueArray = value.filter(function (el, index, array) {
            return array.indexOf(el) == index;
        });
        return uniqueArray;
    };
    FilterUniquePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterUnique',
        })
    ], FilterUniquePipe);
    return FilterUniquePipe;
}());

//# sourceMappingURL=filter-unique.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferTimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the OfferTimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var OfferTimePipe = (function () {
    function OfferTimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    OfferTimePipe.prototype.transform = function (date1) {
        var before = __WEBPACK_IMPORTED_MODULE_1_moment__(date1);
        var now = __WEBPACK_IMPORTED_MODULE_1_moment__();
        var days = before.diff(now, 'days') + 1;
        var hours = before.diff(now, 'hours');
        var minutes = before.diff(now, 'minutes');
        if (days > 0) {
            return (days + ' Dias ' + hours + ' Horas ' + minutes + ' Minutos ');
        }
    };
    OfferTimePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'offerTime',
        })
    ], OfferTimePipe);
    return OfferTimePipe;
}());

//# sourceMappingURL=offer-time.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapsLockDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CapsLockDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var CapsLockDirective = (function () {
    function CapsLockDirective() {
        this.capsLock = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CapsLockDirective.prototype.onKeyDown = function (event) {
        var capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    };
    CapsLockDirective.prototype.onKeyUp = function (event) {
        var capsOn = event.getModifierState && event.getModifierState('CapsLock');
        this.capsLock.emit(capsOn);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('capsLock'),
        __metadata("design:type", Object)
    ], CapsLockDirective.prototype, "capsLock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CapsLockDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CapsLockDirective.prototype, "onKeyUp", null);
    CapsLockDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[capsLock]' })
    ], CapsLockDirective);
    return CapsLockDirective;
}());

//# sourceMappingURL=caps-lock.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compare_compare__ = __webpack_require__(418);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsPage = (function () {
    function DetailsPage(navCtrl, navParams, events, loading, alertCtrl, ServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loading = loading;
        this.alertCtrl = alertCtrl;
        this.ServiceProvider = ServiceProvider;
        //numero de estrellas
        this.rating = 5;
        this.newrating = 5;
        this.checkRating = false;
        this.showMe = false;
        this.Edit = false;
        //obtiene la variable global cuando usuario se loguee
        this.ratingStar = localStorage.getItem('username');
        this.idProduct = JSON.parse(localStorage.getItem('id'));
        //obtener informacion de la empresa, para mostrarlo junto con detalles del producto. 
        this.getBusiness();
        //obtener calificacion
        this.getScore();
        //calificar productos
        events.subscribe('star-rating:changed', function (starRating) {
            console.log(starRating);
            _this.rating = starRating;
            _this.newrating = starRating;
        });
    }
    DetailsPage_1 = DetailsPage;
    DetailsPage.prototype.getScore = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.calificacion = data[9]['calificacion'].filter(function (item) {
                return (item.correo_usu === _this.ratingStar && item.id_pro === _this.idProduct);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DetailsPage.prototype.getBusiness = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.business = data[0]['empresa'];
        }, function (err) {
            console.log(err);
        });
    };
    DetailsPage.prototype.show = function () {
        this.showMe = true;
    };
    DetailsPage.prototype.hide = function () {
        this.showMe = false;
    };
    DetailsPage.prototype.showedit = function () {
        this.Edit = true;
    };
    DetailsPage.prototype.ngOnInit = function () {
        //this.item = this.navParams.get('product');
        var test = localStorage.getItem('product');
        this.item = JSON.parse(test);
        console.log(this.item);
    };
    DetailsPage.prototype.edit = function (idCalificacion) {
        var _this = this;
        var data = {
            idcalificacion: idCalificacion,
            newvalue: this.newrating,
        };
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.editScore(data).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "Actualización de calificación exitosa") {
                    var alert_1 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (response),
                        buttons: ['ok']
                    });
                    alert_1.present();
                    _this.navCtrl.push(DetailsPage_1);
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se actualizó calificación"),
                    buttons: ['ok']
                });
                alert.present();
            });
        });
    };
    DetailsPage.prototype.saveRating = function (item) {
        var _this = this;
        var data = {
            idPro: item,
            value: this.rating,
            usuario: this.ratingStar,
        };
        console.log(data);
        var loader = this.loading.create({
            content: 'Procesando por favor espera...',
        });
        loader.present().then(function () {
            _this.ServiceProvider.addScore(item).subscribe(function (response) {
                console.log(response);
                loader.dismiss();
                if (response == "Valor registrado, Gracias") {
                    var alert_2 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (response),
                        buttons: ['ok']
                    });
                    alert_2.present();
                    _this.navCtrl.push(DetailsPage_1);
                }
                else if (response == "Ya calificaste este producto, si desea modificar, selecciona Editar, Gracias!!") {
                    var alert_3 = _this.alertCtrl.create({
                        title: "HECHO",
                        subTitle: (response),
                        buttons: ['ok']
                    });
                    alert_3.present();
                }
            }, function (err) {
                console.log(err);
                loader.dismiss();
                var alert = _this.alertCtrl.create({
                    title: "ERROR",
                    subTitle: ("No se registró la calificación"),
                    buttons: ['ok']
                });
                alert.present();
            });
        });
    };
    DetailsPage.prototype.delete = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirmar eliminación',
            message: 'Estas seguro de eliminar calificación?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'Cancelar',
                    handler: function () {
                        console.log('Cancelar seleccionado');
                    }
                },
                {
                    text: 'Eliminar',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: 'Procesando por favor espere…',
                        });
                        loader.present().then(function () {
                            _this.ServiceProvider.deleteScore(item).subscribe(function (response) {
                                console.log(response);
                                loader.dismiss();
                                loader.dismiss();
                                if (response == "Datos eliminados exitosamente") {
                                    var alert_4 = _this.alertCtrl.create({
                                        title: "HECHO",
                                        subTitle: (response),
                                        buttons: ['OK']
                                    });
                                    alert_4.present();
                                    _this.navCtrl.setRoot(DetailsPage_1);
                                }
                            }, function (err) {
                                console.log(err);
                                loader.dismiss();
                                var alert = _this.alertCtrl.create({
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
    };
    DetailsPage.prototype.compare = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__compare_compare__["a" /* ComparePage */], item);
    };
    DetailsPage = DetailsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-details',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\details\details.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Detalles</ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div *ngIf="item">\n\n\n      <ion-item text-wrap>\n\n        <h1>Descripción</h1>\n\n        <!--<img [src]="item.imagen_pro" class="img-res" height="550 px" width="550 px" />-->\n\n        <div *ngIf="item.imagen_pro.includes(\'http\')">\n          <pinch-zoom>\n            <img src="{{item.imagen_pro}}" height="550 px" width="550 px" />\n          </pinch-zoom>\n        </div>\n\n\n        <div *ngIf="item.imagen_pro.includes(\'uploads/\')">\n          <pinch-zoom>\n            <img class="resize" src="http://www.commerapp.com/ionic-php-mysql/{{item.imagen_pro}}" />\n          </pinch-zoom>\n        </div>\n\n\n        <button ion-button size="large" (click)="compare(item)">\n          <!--<ion-icon item-left name="cash"></ion-icon>-->\n          Comparar\n        </button><br /><br />\n\n\n\n        <h2> {{item.desripcion_pro}}</h2>\n\n\n\n        <!--Muestra la calificacion ya seleccionada por el usuario, y la opcion de edita o eliminar-->\n        <div *ngIf="ratingStar">\n          <div *ngFor="let rating of calificacion">\n            <!-- <div *ngIf="(rating.id_pro === item.id)">-->\n\n            <ion-item-divider></ion-item-divider><br />\n\n            <h5>Tu calificación</h5><br />\n\n            <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#488aff" defaultColor="red"\n              readonly="true" [rating]="rating.valor_cal">\n            </ionic3-star-rating><br />\n\n\n\n\n            <button ion-button color="success" (click)="showedit()">\n              <ion-icon item-left name="create"></ion-icon>\n              Editar\n            </button>\n\n            <button ion-button color="warning" (click)="delete(rating)">\n              <ion-icon item-left name="trash"></ion-icon>\n              Eliminar\n            </button>\n\n\n\n\n            <!--Editar-->\n            <div *ngIf="Edit">\n\n              <br />\n              <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#488aff"\n                defaultColor="red" readonly="false" [rating]="newrating">\n              </ionic3-star-rating><br />\n\n              <button ion-button size="small" (click)="edit(rating.id_calificacion)">Guardar nueva calificación</button>\n            </div>\n\n            <!--</div>-->\n          </div>\n\n\n          <div *ngIf="calificacion?.length == \'\'">\n            <ion-item-divider></ion-item-divider><br />\n            <button *ngIf="!showMe" ion-button (click)="show()">Calificar Producto</button>\n            <button *ngIf="showMe" ion-button (click)="hide()">Calificar Producto</button>\n\n            <div *ngIf="showMe">\n              <br />\n              <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#488aff"\n                defaultColor="red" readonly="false" [rating]="rating">\n              </ionic3-star-rating><br />\n\n\n              <div>\n                Calificación seleccionada: {{rating}}\n              </div><br />\n\n              <button ion-button size="small" (click)="saveRating(item.id)">Guardar calificación</button>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <!--Si el usuario ya califico un producto, le muestra la calificación seleccionada, puede eliminarla o editarla-->\n        <!--\n      <ion-item *ngFor="let rating of calificacion">\n        <div *ngIf="(rating.id_pro === item.id) && (rating.correo_usu === {{ratingStar}} )">\n\n          <ionic3-star-rating activeIcon="ios-star" defaultIcon="ios-star-outline" activeColor="#488aff" defaultColor="red"\n            readonly="false" [rating]="rating.valor_cal">\n          </ionic3-star-rating><br />\n\n        </div>\n      </ion-item>\n    -->\n\n        <ion-item-divider>Empresa</ion-item-divider>\n        <div *ngFor="let companies of business">\n          <div *ngIf="(companies.id_empresa === item.id_empresa)">\n            <!--<img [src]="companies.logo_emp" class="img-res" height="550 px" width="550 px" />-->\n\n            <div *ngIf="companies.logo_emp.includes(\'http\')">\n              <img src="{{companies.logo_emp}}" height="550 px" width="550 px" />\n            </div>\n\n\n            <div *ngIf="companies.logo_emp.includes(\'uploads/\')">\n              <img src="http://www.commerapp.com/ionic-php-mysql/{{companies.logo_emp}}" height="550 px" width="550 px" />\n            </div>\n\n            <h2> {{ companies.nombre_emp }}</h2>\n            <h2>Direccion: {{companies.direccion_emp}}</h2>\n            <h2>Horario: {{companies.horario_emp}}</h2>\n          </div>\n        </div>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\details\details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], DetailsPage);
    return DetailsPage;
    var DetailsPage_1;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_admin__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__usuario_usuario__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, alertCtrl, loading, ServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loading = loading;
        this.ServiceProvider = ServiceProvider;
        this.submitted = false;
        this.authForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormGroup */]({
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(12)]),
            passwordRetyped: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            currentPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
        });
    }
    ChangePasswordPage.prototype.ngOnInit = function () {
        //obtiene el id_rol
        this.rol = this.navParams.get('id_rol');
        this.admin = this.navParams.get('id_administrador');
        //cliente o empresarios
        this.cliente = this.navParams.get('id_cliente');
        //usuario
        this.usuario = this.navParams.get('id_usuario');
    };
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.ChangePassword = function () {
        var _this = this;
        this.submitted = true;
        if (this.password.value !== this.passwordRetyped.value) {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                message: 'Las contraseñas no coinciden.',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        else {
            var data_1 = {
                currentPassword: this.currentPassword.value,
                password: this.password.value,
                //name: this.name,
                admin: this.admin,
                cliente: this.cliente,
                usuario: this.usuario,
                rol: this.rol,
            };
            console.log(data_1);
            var loader_1 = this.loading.create({
                content: 'Procesando por favor espere…',
            });
            loader_1.present().then(function () {
                _this.ServiceProvider.changePassword(data_1).subscribe(function (response) {
                    console.log(response);
                    loader_1.dismiss();
                    if (response == "Su clave se cambio con exito") {
                        var alert_2 = _this.alertCtrl.create({
                            title: "HECHO",
                            subTitle: (response),
                            buttons: ['OK']
                        });
                        if (_this.rol == 1) {
                            alert_2.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__admin_admin__["a" /* AdminPage */]);
                        }
                        else if (_this.rol == 2) {
                            alert_2.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */]);
                        }
                        else {
                            alert_2.present();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__usuario_usuario__["a" /* UsuarioPage */]);
                        }
                    }
                    else if (response == "La contraseña actual es incorrecta!!") {
                        var alert_3 = _this.alertCtrl.create({
                            title: "Error",
                            subTitle: (response),
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                }, function (err) {
                    console.log(err);
                    loader_1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: "ERROR",
                        subTitle: ("No se pudo cambiar su contraseña"),
                        buttons: ['OK']
                    });
                    alert.present();
                });
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("currentPassword"),
        __metadata("design:type", Object)
    ], ChangePasswordPage.prototype, "currentPassword", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("password"),
        __metadata("design:type", Object)
    ], ChangePasswordPage.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("passwordRetyped"),
        __metadata("design:type", Object)
    ], ChangePasswordPage.prototype, "passwordRetyped", void 0);
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\change-password\change-password.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cambiar Contraseña</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-line>\n\n    <div class="logo">\n      <img src="assets/img/commer.jpeg" alt="Commerline Logo">\n    </div>\n\n    <form [formGroup]="authForm" (ngSubmit)="ChangePassword()">\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.currentPassword.valid && authForm.controls.currentPassword.touched}">\n        <ion-label floating>Contraseña Actual</ion-label>\n        <ion-input formControlName="currentPassword" type="password" name="currentPassword" #currentPassword></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.currentPassword.hasError(\'required\') && authForm.controls.currentPassword.touched">\n        <p>contraseña actual es requerido!</p>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n        <ion-label floating>Nueva Contraseña</ion-label>\n        <ion-input formControlName="password" type="password" name="password" #password></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n        <p>campo contraseña es requerido!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n        <p>longitud minima de contraseña es 6!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.password.hasError(\'maxlength\') && authForm.controls.password.touched">\n        <p>longitud maxima de contraseña es 12!</p>\n      </ion-item>\n\n\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.passwordRetyped.valid && authForm.controls.passwordRetyped.touched}">\n        <ion-label floating>Confirme contraseña</ion-label>\n        <ion-input formControlName="passwordRetyped" type="password" name="passwordRetyped" #passwordRetyped></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.passwordRetyped.hasError(\'required\') && authForm.controls.passwordRetyped.touched">\n        <p>repita contraseña es requerido!</p>\n      </ion-item>\n\n\n      <div padding>\n\n        <button ion-button round outline block color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;"\n          type="submit">Cambiar</button>\n      </div>\n\n    </form>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_data__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuario_editar_datos_usuario_editar_datos__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsuarioPage = (function () {
    function UsuarioPage(navParams, userData, nav, storage, ServiceProvider) {
        //obtener empresarios
        this.navParams = navParams;
        this.userData = userData;
        this.nav = nav;
        this.storage = storage;
        this.ServiceProvider = ServiceProvider;
        this.getUsers();
    }
    UsuarioPage.prototype.getUsers = function () {
        var _this = this;
        this.ServiceProvider.getData()
            .subscribe(function (data) {
            _this.users = data[6]['usuarios'];
            console.log(_this.users);
        }, function (err) {
            console.log(err);
        });
    };
    UsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminPage');
    };
    UsuarioPage.prototype.ngAfterViewInit = function () {
        this.getUsername();
    };
    UsuarioPage.prototype.getUsername = function () {
        var _this = this;
        this.userData.getUsername().then(function (username) {
            _this.username = username;
            if (username == null) {
                _this.storage.remove('username');
            }
            else {
                //guardar variable global para que el usuario pueda calificar un producto
                localStorage.setItem('username', username);
                //variable global para detectar el inicio de sesion y deshabilitar la pagina de login
                localStorage.setItem('login', username);
                console.log(username);
            }
        });
    };
    UsuarioPage.prototype.updateDate = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__usuario_editar_datos_usuario_editar_datos__["a" /* UsuarioEditarDatosPage */], item);
    };
    UsuarioPage.prototype.changePassword = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */], item);
    };
    UsuarioPage.prototype.logout = function () {
        this.userData.logout();
        this.nav.setRoot('LoginPage');
        //si sale del sistema, la variable global se establece como null;
        localStorage.clear();
        //localStorage.removeItem('username');
    };
    UsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usuario',template:/*ion-inline-start:"C:\Users\Alejandro\Commerline3\src\pages\usuario\usuario.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>usuario</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <div padding-top text-center *ngIf="username">\n\n\n\n    <div *ngFor="let item of users">\n      <div *ngIf="(item.correo_usu === username || item.correo_usu.toUpperCase() === username)">\n        <h2> Bienvenido: {{item.nombre_usu}}\n        </h2>\n\n\n\n        <ion-list inset>\n\n          <button ion-item (click)="wishList()">Crear lista de Deseos</button>\n          <button ion-item (click)="updateDate(item)">Actualizar Datos</button>\n          <button ion-item (click)="changePassword(item)">Cambiar contraseña</button>\n          <button ion-item (click)="logout()">Salir</button>\n\n\n        </ion-list>\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Alejandro\Commerline3\src\pages\usuario\usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_user_data__["a" /* UserData */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UsuarioPage);
    return UsuarioPage;
}());

//# sourceMappingURL=usuario.js.map

/***/ })

},[428]);
//# sourceMappingURL=main.js.map