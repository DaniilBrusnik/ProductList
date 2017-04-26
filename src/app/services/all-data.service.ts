import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AllDataService {
  defaultData: any;
  reviews: any;
  productId = 1;
  constructor(private http: Http) {
  }

  GetProducts() {
    this.http.get('http://smktesting.herokuapp.com/api/products/').subscribe(
      data => {
        this.defaultData = JSON.parse(data['_body']);
      }
    );
  }
 GetComments() {
     this.http.get('http://smktesting.herokuapp.com/api/reviews/' + this.productId).subscribe(
       data => {
         this.reviews = JSON.parse(data['_body']);
       }
     );
   }
}
