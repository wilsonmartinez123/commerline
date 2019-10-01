import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

*/
let apiUrl = 'http://localhost/ionic-php-mysql';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }



  getCustomers() {
    return new Promise(resolve => {
      this.http.get(apiUrl + '/obtener_clientes.php').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getBusiness() {
    return new Promise(resolve => {
      this.http.get(apiUrl + '/obtener_empresas.php').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }



  getProducts() {
    return new Promise(resolve => {
      this.http.get(apiUrl + '/obtener_productos.php').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

  getAllCategories() {
    return new Promise(resolve => {
      this.http.get(apiUrl + '/Empresario/obtener_categorias_subcategorias.php').subscribe(data => {
        resolve(data);
      },
        err => {
          console.log(err);
        });
    });
  }

}





