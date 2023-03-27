import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Todo} from '../todo';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.css']
})
export class ListFormComponent {
  Todos:Todo[] = [
    new Todo(1,"todo1","Task1"),
    new Todo(2,"todo2","Task2"),
    new Todo(3,"todo3","Task3"),
  ];
  title="";
  body="";

  pushData(data:NgForm){
    let a = this.Todos[this.Todos.length-1];
    let todo = new Todo(a?.id+1, data.value.title, data.value.body);
   this.Todos.push(todo);
   console.log(this.Todos[this.Todos.length-1].id);
  }

  deleteTodo(id:number) {
    let todo = this.Todos.filter(x=>x.id === id)[0];
    let index = this.Todos.indexOf(todo,0);
    if(index > -1){
      this.Todos.splice(index,1);
    }
  }
  getTodo(id:Number){
    let todo = this.Todos.filter(x=>x.id === id)[0];
    this.title = todo.title;
    this.body = todo.body;
  }

}
