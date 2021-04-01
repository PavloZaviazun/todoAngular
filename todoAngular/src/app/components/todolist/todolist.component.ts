import {Component, Input, OnInit} from '@angular/core';
import {ITodoList} from '../../interfaces';
import {ListsService} from '../../services';
import {Router} from '@angular/router';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input()
  todoList: ITodoList;
  isShownFormList = false;
  updatedCrDate: string;
  updatedCrTime: string;
  updatedUpDate: string;
  updatedUpTime: string;
  constructor(private listsService: ListsService,
              private router: Router) { }

  ngOnInit(): void {
    this.updatedCrDate = this.todoList.createdAt.split('T')[0];
    this.updatedCrTime = this.todoList.createdAt.split('T')[1].split('.')[0];
    this.updatedUpDate = this.todoList.updatedAt.split('T')[0];
    this.updatedUpTime = this.todoList.updatedAt.split('T')[1].split('.')[0];
  }

  changeFlag(): void {
    this.isShownFormList = !this.isShownFormList;
  }

  deleteList(id: number): void {
    this.listsService.deleteList(id);
  }

  showTodos(): void {
    this.router.navigate(['list/' + this.todoList.id]);
  }
}
