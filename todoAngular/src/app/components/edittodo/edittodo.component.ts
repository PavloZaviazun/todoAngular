import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../../services';
import {FormControl, FormGroup} from '@angular/forms';
import {ITodo} from '../../interfaces';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  @Input()
  id: string;
  @Input()
  vari: number;
  @Input()
  todo: ITodo;
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
    this.formTodo.patchValue({
      title: this.todo.title,
      body: this.todo.body,
      finalDate: this.todo.finalDate
    });
  }

  sendData(): void {
    const formData = new FormData();
    formData.append('title', this.formTodo.get('title').value);
    formData.append('body', this.formTodo.get('body').value);
    formData.append('finalDate', this.formTodo.get('finalDate').value);
    this.todosService.updateTodo(this.id, this.vari, formData);
  }
}
