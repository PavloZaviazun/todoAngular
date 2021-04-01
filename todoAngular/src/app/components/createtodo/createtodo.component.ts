import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TodosService} from '../../services';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {
  @Input()
  id: string;

  constructor(private todosService: TodosService) { }
  title = new FormControl('');
  body = new FormControl('');
  finalDate = new FormControl('');
  formTodo = new FormGroup( {
    title: this.title,
    body: this.body,
    finalDate: this.finalDate
  });

  ngOnInit(): void {
  }

  sendData(): void {
    const formData = new FormData();
    formData.append('title', this.formTodo.get('title').value);
    formData.append('body', this.formTodo.get('body').value);
    formData.append('finalDate', this.formTodo.get('finalDate').value);
    this.todosService.saveTodo(this.id, formData);
  }
}
