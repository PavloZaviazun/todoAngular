import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ListsService} from '../../services';

@Component({
  selector: 'app-formlist',
  templateUrl: './createlist.component.html',
  styleUrls: ['./createlist.component.css']
})
export class CreatelistComponent implements OnInit {

  constructor(private listsService: ListsService) { }
  title = new FormControl('');
  formList = new FormGroup({
    title : this.title
  });

  ngOnInit(): void {
  }

  sendData(): void {
    const title = this.formList.get('title').value;
    this.listsService.saveTodoList(title);
  }
}
