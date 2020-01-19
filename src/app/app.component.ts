import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
 
  todoTitle: string;
  todoId: number = 0;
  ngOnInit() {
    this.todoTitle = '';
 
  }
 
    
    // resets our todoTitle variable to an empty string
    //this.todoTitle = '';
    //this.todoId++;  dont think i need


}
