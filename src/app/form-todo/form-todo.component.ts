import { Component, OnInit } from '@angular/core';
import { TodoService } from '../sevices/todo.service';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  todo:string="";

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  save(){
    this.todoService.addTodo(this.todo).subscribe(() => {
      this.todo ="";
      alert("Todo ajouté");
    })
  }

}
