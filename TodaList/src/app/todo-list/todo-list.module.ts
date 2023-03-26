import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ListFormComponent } from './list-form/list-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    ListFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ListFormComponent
  ]
})
export class TodoListModule { }
