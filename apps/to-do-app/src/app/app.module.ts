import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';

import {MatListModule} from '@angular/material/list'
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
