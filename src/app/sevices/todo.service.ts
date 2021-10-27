import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  BASE_URL:string = "https://6167090d13aa1d00170a696f.mockapi.io/todo-app/todo"

  constructor(private http: HttpClient) { }

  getTodos():Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.BASE_URL)
  }

  updateTodo(id:number, finish:boolean):Observable<ITodo>{
    return this.http.put<ITodo>(this.BASE_URL+"/"+id, { finish:finish })
  }

  deleteTodo(id:number):Observable<ITodo>{
    return this.http.delete<ITodo>(this.BASE_URL+"/"+id);
  }

  addTodo(text:string):Observable<ITodo>{
    return this.http.post<ITodo>(this.BASE_URL, { text:text, finish:false });
  }
}
