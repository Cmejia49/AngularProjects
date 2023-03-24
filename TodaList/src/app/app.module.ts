import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListModuleComponent } from './Todo-List/todo-list-module/todo-list-module.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
