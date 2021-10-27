import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!:ITodo;
  @Output() toggled = new EventEmitter<number>();
  @Output() deleted = new EventEmitter<number>();

  style = {
    "list-style":"decimal",
    "background": "grey",
    "width":"250px",
    "margin":"5px 0px"
  };

  constructor() { }

  ngOnInit(): void {
  }

  toggle(id:number){
    this.toggled.emit(id)
  }

  delete(id:number){
    this.deleted.emit(id)
  }

}
