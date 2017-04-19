import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MdButtonModule} from '@angular/material';
import {AllDataService} from './services/all-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule
  ],
  providers: [AllDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
