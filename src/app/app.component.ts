import { Component,OnInit } from '@angular/core';
import { ITodo } from './interfaces/itodo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Title='Todos';
  todoList: ITodo []=[];
  todoTitle: string;
 todoId: number = 0;

 
  ngOnInit() {
    
    this.todoTitle='';
    this.todoList =[
      {id:1, title: 'install angular', description: 'new desc'},
    ];

     
        
  }
 
    



}
