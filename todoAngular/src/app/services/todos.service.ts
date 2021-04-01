import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ITodo, ITodoList} from '../interfaces';
import {URL} from '../config';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public entities: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([]);
  private todos: ITodo[] = [];

  constructor(private httpClient: HttpClient) { }

  getTodos(id: string): void {
    this.httpClient.get<ITodo[]>(`${URL.list}/${id}/todos`).subscribe(todos => {
      this.todos = todos;
      this.entities.next(this.todos);
    });
  }
  saveTodo(id: string, formData: FormData): void {
    this.httpClient.post<string>(`${URL.list}/${id}/todo/save`, formData).subscribe(() => this.getTodos(id));
  }
  updateTodo(id: string, vari: number, formData: FormData): void {
    this.httpClient.put<string>(`${URL.list}/${id}/todo/${vari}/update`, formData).subscribe(() => this.getTodos(id));
  }
  deleteTodo(id: string, vari: number): void {
    this.httpClient.delete<string>(`${URL.list}/${id}/todo/${vari}/delete`).subscribe(() => this.getTodos(id));
  }
  searchTodos(id: string, search: string): void {
    this.httpClient.post<ITodo[]>(`${URL.list}/${id}/todos`, search).subscribe(todos => {
      this.todos = todos;
      this.entities.next(this.todos);
    });
  }

  ascIdFilter(): void {
    this.todos.sort((a, b) => b.id - a.id);
  }

  dscIdFilter(): void {
    this.todos.sort((a, b) => a.id - b.id);
  }

  ascDateFilter(): void {
    this.todos.sort((a, b) => Date.parse(b.finalDate) - Date.parse(a.finalDate));
  }
  dscDateFilter(): void {
    this.todos.sort((a, b) => Date.parse(a.finalDate) - Date.parse(b.finalDate));
  }
}
