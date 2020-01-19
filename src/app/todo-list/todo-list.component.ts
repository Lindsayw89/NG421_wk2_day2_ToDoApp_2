import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList = [
    // example of how to make an item in todo list
    { title: 'Install Angular CLI', id: 1, description: "helping to make angular work" },
  
  ];
  constructor() { }

  ngOnInit() {
  }

}
