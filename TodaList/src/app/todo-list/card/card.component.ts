import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() expetedTodo?:{id:number,title:string,body:string };
  @Output() deleteTodoEvent = new EventEmitter<number>();
  @Output() getTodoEvent = new EventEmitter<number>();

  onAddBook(id?:number) {
    this.deleteTodoEvent.emit(id);
  }

  getTodo(id?:number){
    this.getTodoEvent.emit(id);
  }
  
  constructor() {}
  ngOnInit(): void { }


}
