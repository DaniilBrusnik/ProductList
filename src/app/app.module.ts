import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import {AllDataService} from './services/all-data.service';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
