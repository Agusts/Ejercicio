import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleService } from './services/people.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    NavbarComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    PeopleService,
    TableComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
