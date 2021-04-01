import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {ListsService} from './services';
import { TodolistsComponent } from './components/todolists/todolists.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { CreatelistComponent } from './components/createlist/createlist.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditlistComponent } from './components/editlist/editlist.component';
import { EdittodoComponent } from './components/edittodo/edittodo.component';
import { CreatetodoComponent } from './components/createtodo/createtodo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    AuthComponent,
    HeaderComponent,
    TodolistsComponent,
    TodolistComponent,
    CreatelistComponent,
    EditlistComponent,
    EdittodoComponent,
    CreatetodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ListsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
