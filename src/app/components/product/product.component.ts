//import { ProductResponseModel } from './../../models/productResponseModel';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';//apiye yani backenddeki dataya bağlanmak için kullanılır
import { Todo } from 'src/app/models/todo';
//import { TodoResponseModel } from 'src/app/models/todoResponseModel';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 // products: Product[] = []; 
 todos:Todo[] = [];
  apiUrl= "https://jsonplaceholder.typicode.com/todos"
  //

  constructor(private httpClient: HttpClient) {}
  //constructor amacı productComponenti bellekte oluşturmaktır

  ngOnInit(): void {
    this.getProducts();
  }
  //productcomponent açıldığında ilk açılan koddur

  getProducts() {
    //apiye bağlanacağız...
   /* this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      //yanıt başarılı bir şekilde geldiğinde çalışacak yer
      this.products = response.data
    });
    */
   /*this.httpClient.get<TodoResponseModel>(this.apiUrl).subscribe((response)=>{
     this.todos = response.data
   })
*/
  }
}
