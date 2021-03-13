import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//apiye yani backenddeki dataya bağlanmak için kullanılır
//import { TodoResponseModel } from '../models/todoResponseModel';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl= "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) { }
  getProducts():Observable<ListResponseModel<Product>> {
    //apiye bağlanacağız...
   /* this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      //yanıt başarılı bir şekilde geldiğinde çalışacak yer
      this.products = response.data
    });
    */
   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);

  }
}
