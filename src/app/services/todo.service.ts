import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//apiye yani backenddeki dataya bağlanmak için kullanılır
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl= "https://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient: HttpClient) { }
  getTodos():Observable<Todo[]> {
    //apiye bağlanacağız...
   /* this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe((response)=>{
      //yanıt başarılı bir şekilde geldiğinde çalışacak yer
      this.products = response.data
    });
    */
   return this.httpClient.get<Todo[]>(this.apiUrl);

  }
}
