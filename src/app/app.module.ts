import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Guard} from './Guard';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCardModule} from '@angular/material';
import { DataService} from './services/all-data.service';
import { ProductsComponent } from './products/products.component';
import { CommentsComponent } from './comments/comments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule} from '@angular/material';
import {MdInputModule} from '@angular/material';
import {MdDialogModule} from '@angular/material';
import { LoginComponent } from './login/login.component';

import { RouterModule }  from '@angular/router';
import {appRoutes} from "app/app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CommentsComponent,
    LoginComponent,

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
    MdInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
