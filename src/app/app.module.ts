import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgUploaderModule } from 'ngx-uploader';
import { Routes, RouterModule } from '@angular/router'; 
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { UploadComponent } from 'app/home/homeUpload.component'
import { User } from 'app/table/user.model';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TableComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    NgUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
