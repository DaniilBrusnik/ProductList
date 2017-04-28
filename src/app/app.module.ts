import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import { DataService} from './services/all-data.service';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule} from '@angular/material';
import {MdInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CommentsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdTabsModule,
    MdInputModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
