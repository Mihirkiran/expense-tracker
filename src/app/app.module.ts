import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { DeleteexpenseComponent } from './deleteexpense/deleteexpense.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExpensesService } from './expenses.service';

@NgModule({
  declarations: [
    AppComponent,
    AddexpenseComponent,
    DeleteexpenseComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ExpensesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
