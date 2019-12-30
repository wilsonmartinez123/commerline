import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { FileTransfer } from '@ionic-native/file-transfer';

import { IonicStorageModule } from '@ionic/storage';
import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ActualizarDatosPage } from '../pages/actualizar-datos/actualizar-datos';
import { BusinessPage } from '../pages/business/business';
import { BusinessProductsPage } from '../pages/business-products/business-products';
import {ComparePage} from '../pages/compare/compare';
import { LoginPage } from '../pages/login/login';
import { OffersPage } from '../pages/offers/offers';
import { ProfilePage } from '../pages/profile/profile';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';
import { HomePage } from '../pages/home/home';
import { AgregarProductoPage } from '../pages/agregar-producto/agregar-producto';
import { AgregarProductosOfertaPage } from '../pages/agregar-productos-oferta/agregar-productos-oferta'
import { CategoriesPage } from '../pages/categories/categories';
import { DetailsPage } from '../pages/details/details';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { EditPage } from '../pages/edit/edit';
import { EditProductOfertPage } from '../pages/edit-product-ofert/edit-product-ofert';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { AgregarEmpresaPage } from '../pages/agregar-empresa/agregar-empresa';
import { AgregarSucursalPage } from '../pages/agregar-sucursal/agregar-sucursal';
import { VerEmpresaPage } from '../pages/ver-empresa/ver-empresa';
import { VerEmpresaEditPage } from '../pages/ver-empresa-edit/ver-empresa-edit';
import { AdminPage } from '../pages/admin/admin';
import { AdminClientesPage } from '../pages/admin-clientes/admin-clientes';
import { AdminEmpresasPage } from '../pages/admin-empresas/admin-empresas';
import { AdminProductosPage } from '../pages/admin-productos/admin-productos';
import { AdminEditPage } from '../pages/admin-edit/admin-edit';
import { UsuarioPage } from '../pages/usuario/usuario';
import { UsuarioEditarDatosPage } from '../pages/usuario-editar-datos/usuario-editar-datos';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { PipesModule } from '../pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';

//tablas con paginacion
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

//filtrar busqueda
import { FilterPipeModule } from 'ngx-filter-pipe';

//calificacion por estrellas
import { StarRatingModule } from 'ionic3-star-rating';

//animacion
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//cargar imagenes por vista
import { IonicImageLoader } from 'ionic-image-loader';

//zomm imagen
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { ImageProvider } from '../providers/image/image';

import { CapsLockDirective } from '../directives/caps-lock/caps-lock';

var config = {
  apiKey: "AIzaSyBR3YL7I-JZRRCMdBQ6mFlyvj-AJYtoD_Y",
  authDomain: "commerline-1de87.firebaseapp.com",
  databaseURL: "https://commerline-1de87.firebaseio.com",
  projectId: "commerline-1de87",
  storageBucket: "commerline-1de87.appspot.com",
  messagingSenderId: "955829251799"
};



@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    ActualizarDatosPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePage,
    AgregarProductoPage,
    AgregarProductosOfertaPage,
    CategoriesPage,
    DetailsPage,
    ResetPasswordPage,
    BusinessPage,
    BusinessProductsPage,
    ComparePage,
    OffersPage,
    EditPage,
    EditProductOfertPage,
    ChangePasswordPage,
    AgregarEmpresaPage,
    AgregarSucursalPage,
    VerEmpresaPage,
    VerEmpresaEditPage,
    AdminPage,
    AdminClientesPage,
    AdminEmpresasPage,
    AdminProductosPage,
    AdminEditPage,
    UsuarioPage,
    UsuarioEditarDatosPage,
    CapsLockDirective,



  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    PipesModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FilterPipeModule,
    StarRatingModule,
    BrowserAnimationsModule,
    PinchZoomModule, 
    IonicImageLoader.forRoot(),


    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },


        //{ component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        //{ component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },

        { component: AboutPage, name: 'About', segment: 'about' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: HomePage, name: 'HomePage', segment: 'home' },
        { component: CategoriesPage, name: 'Categories', segment: 'categories' },
        { component: BusinessPage, name: 'BusinessPage', segment: 'business' },
        { component: AdminPage, name: 'AdminPage', segment: 'admin' },
        { component: UsuarioPage, name: 'UsuarioPage', segment: 'user' },

      ]
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    ActualizarDatosPage,
    LoginPage,
    ProfilePage,
    SignupPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePage,
    AgregarProductoPage,
    AgregarProductosOfertaPage,
    CategoriesPage,
    DetailsPage,
    ResetPasswordPage,
    BusinessPage,
    BusinessProductsPage,
    ComparePage,
    OffersPage,
    EditPage,
    EditProductOfertPage,
    ChangePasswordPage,
    AgregarEmpresaPage,
    AgregarSucursalPage,
    VerEmpresaPage,
    VerEmpresaEditPage,
    AdminPage,
    AdminClientesPage,
    AdminEmpresasPage,
    AdminProductosPage,
    AdminEditPage,
    UsuarioPage,
    UsuarioEditarDatosPage,

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
    Camera,
    FileTransfer,
    AuthServiceProvider,
    ImageProvider,
    AuthServiceProvider,

  ]
})
export class AppModule { }
