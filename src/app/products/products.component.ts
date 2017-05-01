import {Component, Input, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {DataService} from '../services/all-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],

})
export class ProductsComponent implements OnInit {
  data: any;
  errorMessage: any;
  productId: any;
  selectedRow : number;
  active= true;
  constructor(private http: Http,
              private dataService: DataService) {
    this.getProducts();
  }

  getProductId(id) {
 this.productId = id;
  }
  setClickedRow(index) {
    this.selectedRow = index;
  }

  getProducts() {
    this.dataService.getProducts()
      .subscribe(
        data => {
          this.data = data;
          this.productId = this.data[0].id;
        },
        error => this.errorMessage = <any>error);
  }

  ngOnInit() {
  }
}

