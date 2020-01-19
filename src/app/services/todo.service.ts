import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo []=[]
  todoTitle = '';

  todoId: number = 0;
  todo
  constructor() { }

  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: ''
    });
  }
    deleteTodo(todo:any) {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  

}
