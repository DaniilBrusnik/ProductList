import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {Guard} from './Guard';

import {ProductsComponent} from './products/products.component';

export const appRoutes: Routes = [
  {path: '', component: LoginComponent},

  {path: '', redirectTo: 'login',
    pathMatch: 'full'},

  { path: 'login', component: LoginComponent},

      {path: 'products', component: ProductsComponent},




  {path: '**', redirectTo: '/login', pathMatch: 'full'},


];
