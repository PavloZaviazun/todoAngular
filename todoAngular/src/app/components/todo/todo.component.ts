import {Component, Input, OnInit} from '@angular/core';
import {ITodo} from '../../interfaces';
import {TodosService} from '../../services';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: ITodo;
  @Input()
  id: string;
  isShownFormTodo = false;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  changeFlag(): void {
    this.isShownFormTodo = !this.isShownFormTodo;
  }

  deleteTodo(): void {
      this.todosService.deleteTodo(this.id, this.todo.id);
  }
}
