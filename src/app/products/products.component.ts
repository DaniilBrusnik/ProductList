import {Component, Input, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {DataService} from '../services/all-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],

})
export class ProductsComponent implements OnInit {
  defaultData: any;
  show: boolean;
  errorMessage: any;
  productId: any;

  constructor(private http: Http,
              private dataService: DataService) {
    this.getProducts();
  }

  getProductId(id) {
 this.productId = id;
  }

  getProducts() {
    this.dataService.getProducts()
      .subscribe(
        data => {
          this.defaultData = data;
          this.productId = this.defaultData[0].id;
        },
        error => this.errorMessage = <any>error);
  }


  ngOnInit() {
  }
}
