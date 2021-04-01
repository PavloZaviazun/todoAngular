import {ITodoList} from './todolist.interace';

export interface ITodo {
  id: number;
  title: string;
  body: string;
  finalDate: string;
  todoList: number;
}
