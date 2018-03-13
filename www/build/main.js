webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		152
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(77);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.gologin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\commerline5\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      <a><img  width="200" height="50" src="../assets/imgs/commerline.png"> </a>\n    </ion-title>\n\n    <ion-buttons end>\n        <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar> \n      <button ion-button icon-only (click)="gologin()">\n        <ion-icon name="md-contact"></ion-icon>\n      </button>\n\n\n\n    </ion-buttons>  \n  </ion-navbar>\n \n</ion-header>\n\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n\n\n\n\n\n\n<ion-grid>\n  <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <a href="otrapagina.html"><img src="img/avatar-cher.png"></a>\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n    <ion-col>\n        <ion-item>\n    <ion-avatar item-start>\n      <img src="img/avatar-cher.png">\n    </ion-avatar>\n    <h2>Cher</h2>\n    <p>Ugh. As if.</p>\n  </ion-item>\n    </ion-col>\n  </ion-row>\n\n</ion-grid>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\commerline5\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\commerline5\src\pages\productos\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n<ion-title><a><img  width="200" height="50" src="../assets/imgs/commerline.png"> Productos</a> \n</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\commerline5\src\pages\productos\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage2 = (function () {
    function ListPage2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage2_1 = ListPage2;
    ListPage2.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage2_1, {
            item: item
        });
    };
    ListPage2 = ListPage2_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\commerline5\src\pages\servicios\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n<ion-title><a><img  width="200" height="50" src="../assets/imgs/commerline.png"> Servicios</a> \n</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\commerline5\src\pages\servicios\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage2);
    return ListPage2;
    var ListPage2_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productos_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_servicios_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_productos_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_servicios_list__["a" /* ListPage2 */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login_module__["LoginPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_productos_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_servicios_list__["a" /* ListPage2 */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_productos_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_servicios_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'productos', component: __WEBPACK_IMPORTED_MODULE_5__pages_productos_list__["a" /* ListPage */] },
            { title: 'servicios', component: __WEBPACK_IMPORTED_MODULE_6__pages_servicios_list__["a" /* ListPage2 */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\commerline5\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\commerline5\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\commerline5\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-title>\n      <a><img  width="200" height="50" src="../assets/imgs/commerline.png"> </a> Login\n    </ion-title>\n\n    <ion-buttons end>\n        <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar> \n\n\n\n\n    </ion-buttons>  \n  </ion-navbar>\n \n</ion-header>\n\n\n\n\n\n \n<ion-content padding>\n <ion-list>\n   <ion-item>\n     <ion-label floating>Username</ion-label>\n     <ion-input type="text"></ion-input>\n   </ion-item>\n <ion-item>\n   <ion-label floating>Password</ion-label>\n     <ion-input type="password"></ion-input>\n   </ion-item>\n </ion-list>\n \n <div padding>\n   <button ion-button block (click)="signin()">Sign In</button>\n </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\commerline5\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map