import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {URL} from '../config';
import {BehaviorSubject, Observable} from 'rxjs';
import {ITodoList} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  public entities: BehaviorSubject<ITodoList[]> = new BehaviorSubject<ITodoList[]>([]);
  private todoList: ITodoList[] = [];
  mystorage = window.localStorage;

  constructor(private httpClient: HttpClient) { }
  getTodoLists(): void {
    console.log(this.mystorage.getItem('token'));
    this.httpClient.get<ITodoList[]>(URL.lists, {headers: {Authorization: this.mystorage.getItem('token')}}).subscribe(todoList => {
      this.todoList = todoList;
      this.entities.next(this.todoList);
    });
  }
  saveTodoList(title: string): void {
    this.httpClient.post<string>(URL.list + '/save', title).subscribe(() => this.getTodoLists());
  }
  updateTodoList(id: number, title: string): void {
    this.httpClient.put<string>(`${URL.list}/${id}/update`, title).subscribe(() => this.getTodoLists());
  }
  deleteList(id: number): void {
    this.httpClient.delete<string>(`${URL.list}/${id}/delete`).subscribe(() => this.getTodoLists());
  }
  searchTodoLists(search: string): void {
    this.httpClient.post<ITodoList[]>(`${URL.lists}/search`, search).subscribe(todoList => {
      this.todoList = todoList;
      this.entities.next(this.todoList);
    });
  }
}
