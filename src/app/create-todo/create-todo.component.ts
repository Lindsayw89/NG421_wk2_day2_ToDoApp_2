import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {
newTodo
  constructor(private todoService: TodoService ) { }

  ngOnInit() {
  }
  addTodo(){
    this.todoService.addTodo()
  }

}