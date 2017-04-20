import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  defaultData: any;
  constructor(private http: Http) {
    this.http.get('http://smktesting.herokuapp.com/api/products/').subscribe(
      data => {
        this.defaultData = JSON.parse(data['_body']);
      }
    );
  }

  ngOnInit() {
  }
}
