import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {TodolistsComponent} from './components/todolists/todolists.component';
import {TodolistComponent} from './components/todolist/todolist.component';
import {TodosComponent} from './components/todos/todos.component';

const routes: Routes = [
  {path: '',  redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {path: 'lists', component: TodolistsComponent},
  {path: 'list/:id', component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
