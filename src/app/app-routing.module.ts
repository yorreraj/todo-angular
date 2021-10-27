import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

//{path, component}
const routes: Routes = [
  { path:"", component:TodoListComponent },
  { path:"add", component:FormTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
