import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class AllDataService {
  defaultData: any;
  constructor(private http: Http) {
    this.http.get('http://smktesting.herokuapp.com/api/products/').subscribe(
      data => {
        this.defaultData = JSON.parse(data['_body']);
        console.log(this.defaultData.id);
      }
    );
  }
 GetProducts() {

 }
}
