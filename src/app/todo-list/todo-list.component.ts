import { Component, OnInit } from '@angular/core';
import { TodoService } from '../sevices/todo.service';

export interface ITodo{
  id:any,
  text:string,
  finish:boolean
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todos:ITodo[] = [];
  newTodo:string = "";
  hasError:boolean = false;
  loading:boolean = true;

  constructor(private todoService: TodoService ) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todosFromServer => {
      this.todos = todosFromServer
      this.loading = false;
    })
  }

  toggleTodoStatus(id:number){
    this.todos.forEach(todo => {
      if(todo.id == id){
        todo.finish = !todo.finish;
        this.todoService.updateTodo(id, todo.finish).subscribe(() => {})
      }
    })
  }

  addTodo(){
    if(this.newTodo == ""){
      this.hasError = true
    }else{
      this.hasError = false
      this.todos = [
        ...this.todos,
        {
          id: this.todos.length + 1,
          text: this.newTodo,
          finish:false
        }
      ];
      this.newTodo = ""
    }
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.todoService.deleteTodo(id).subscribe(() => {
      alert("Todo supprimer");
    })
  }
}
