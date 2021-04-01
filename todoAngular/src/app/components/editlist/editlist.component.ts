import {Component, Input, OnInit} from '@angular/core';
import {ListsService} from '../../services';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent implements OnInit {
  @Input()
  titleInput: string;
  @Input()
  id: number;

  constructor(private listsService: ListsService) { }
  title = new FormControl('');
  formList = new FormGroup({
    title : this.title
  });

  ngOnInit(): void {
    this.formList.patchValue({
      title : this.titleInput
    });
  }

  sendData(): void {
    const title = this.formList.get('title').value;
    this.listsService.updateTodoList(this.id, title);
  }
}
