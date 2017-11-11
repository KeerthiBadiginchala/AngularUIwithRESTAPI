import { NgModule }      from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { ExampleComponent } from './example.component';
import { Component } from '@angular/core';
import { MdCardModule, MdCheckboxModule } from '@angular/material';
@NgModule({
  imports: [BrowserModule, MdCardModule, MdCheckboxModule],
  declarations: [ExampleComponent],
  bootstrap: [ExampleComponent],
})
 
export class AppModule { }