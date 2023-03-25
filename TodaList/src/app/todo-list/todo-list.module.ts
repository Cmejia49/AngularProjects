import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListFormComponent } from './list-form/list-form.component';



@NgModule({
  declarations: [
    CardComponent,
    ListFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListFormComponent
  ]
})
export class TodoListModule { }
