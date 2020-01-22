import { Injectable, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Title='Todos';
  todoList: ITodo []=[{id:1, title: 'first to do', description: 'description'}];
  todoTitle: string;
 todoId: number = 0;
  
  constructor() {

   }


  addTodo():void {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: ''
    });

    this.todoTitle='';
    this.todoId++;
  }
    deleteTodo(todo:any) {
      const index = this.todoList.findIndex(todoItem => todoItem === todo);
      this.todoList.splice(index, 1);
    }
  getTodos(){
    return this.todoList;
  }

}
