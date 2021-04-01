import {Component, Input, OnInit} from '@angular/core';
import {ListsService} from '../../services';
import {ITodoList} from '../../interfaces';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {
  todoLists: Observable<ITodoList[]>;
  isShownFormList = false;
  constructor(private listsService: ListsService) {
  }
  search = new FormControl('');
  formSearch = new FormGroup( {
    search : this.search
  });

  ngOnInit(): void {
    this.todoLists = this.listsService.entities;
    this.listsService.getTodoLists();
  }

  changeFlag(): void {
    this.isShownFormList = !this.isShownFormList;
  }

  sendData(): void {
    if (this.formSearch.getRawValue().search === '') {
      this.listsService.getTodoLists();
    } else {
      this.listsService.searchTodoLists(this.formSearch.getRawValue().search);
    }
  }
}
