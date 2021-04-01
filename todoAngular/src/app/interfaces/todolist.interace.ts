import {ITodo} from './todo.interface';

export interface ITodoList {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  todos: ITodo[];
}
