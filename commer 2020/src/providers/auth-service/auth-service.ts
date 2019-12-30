import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs/Observable';
import { _throw, } from 'rxjs/observable/throw';
import { forkJoin } from 'rxjs/Observable/forkJoin';
import { retry, catchError } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

*/
let apiUrl = 'http://www.commerapp.com/ionic-php-mysql';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');


  }


  getData(): Observable<any> {

    let empresas = this.http.get(apiUrl + '/obtener_empresas.php');
    let clientes = this.http.get(apiUrl + '/obtener_clientes.php');
    let clientesAdmin = this.http.get(apiUrl + '/Admin/obtener_clientes_admin.php');
    let productos = this.http.get(apiUrl + '/obtener_productos.php');
    let todasCategorias = this.http.get(apiUrl + '/Empresario/obtener_categorias_subcategorias.php');
    let colombia = this.http.get(apiUrl + '/colombia.php?c=colombia');
    let usuarios = this.http.get(apiUrl + '/Usuarios/obtener_usuarios.php');
    let administrador = this.http.get(apiUrl + '/Admin/obtener_admin.php');
    let categorias = this.http.get(apiUrl + '/obtener_categorias.php');
    let calificacion = this.http.get(apiUrl + '/Usuarios/obtener_calificacion.php');


    return forkJoin([empresas, clientes, clientesAdmin, productos, todasCategorias, colombia, usuarios, administrador, categorias,
      calificacion]);
  }


  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      //'Access-Control-Allow-Origin': '*',

    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  };



  addProduct(data): Observable<any> {
    return this.http.post(apiUrl + '/post_data.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  addBusiness(data): Observable<any> {
    return this.http.post(apiUrl + '/registrar_empresa.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  editProducts(data): Observable<any> {
    return this.http.post(apiUrl + '/edit_data.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  editProductsOffers(data): Observable<any> {
    return this.http.post(apiUrl + '/edit_data_offers.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteSeveralProducts(data): Observable<any> {
    return this.http.post(apiUrl + '/delete_several_data.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteProducts(data): Observable<any> {
    return this.http.post(apiUrl + '/delete_data.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  resetPassword(data): Observable<any> {
    return this.http.post(apiUrl + '/reset-password.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  editBusiness(data): Observable<any> {
    return this.http.post(apiUrl + '/Empresario/editar_empresa.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteBusiness(data): Observable<any> {
    return this.http.post(apiUrl + '/Empresario/eliminar_empresa.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  UpdateCustomerData(data): Observable<any> {
    return this.http.post(apiUrl + '/Empresario/actualizar_datos_empresario.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  changePassword(data): Observable<any> {
    return this.http.post(apiUrl + '/Empresario/change-password.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateAdminData(data): Observable<any> {
    return this.http.post(apiUrl + '/Admin/actualizar_datos_administrador.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteCustomers(data): Observable<any> {
    return this.http.post(apiUrl + '/Admin/eliminar_clientes.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  editScore(data): Observable<any> {
    return this.http.post(apiUrl + '/Usuarios/editar_calificacion.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  addScore(data): Observable<any> {
    return this.http.post(apiUrl + '/Usuarios/calificar_producto.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  deleteScore(data): Observable<any> {
    return this.http.post(apiUrl + '/Usuarios/eliminar_calificacion.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  UpdateUserData(data): Observable<any> {
    return this.http.post(apiUrl + '/Usuarios/actualizar_datos_usuario.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }




  login(data): Observable<any> {
    return this.http.post(apiUrl + '/login.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  register(data): Observable<any> {
    return this.http.post(apiUrl + '/register.php', data, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }










}






