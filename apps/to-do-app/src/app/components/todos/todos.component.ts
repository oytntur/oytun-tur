import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';





@Component({
  selector: 'oytun-tur-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content:"İlk Todo",
        completed:false
      },
      {
        content:"İkinci Todo",
        completed:true
      }
    ]
  }

  toggleDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    this.todos = [...this.todos];
    console.log(id +"silindi");
}
  addTodo(){
    this.todos.push({content:this.inputTodo,completed:false});
    this.inputTodo="";
    console.log(this.inputTodo + "Eklendi")
  }


}
export class ListSelectionExample {


}
