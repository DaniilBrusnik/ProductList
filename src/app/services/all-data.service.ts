import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class DataService {
  defaultData: any;
  reviews: any;
  productId = 1;
  data: {};

  constructor(private http: Http) {
  }

  public GetProducts() {
    this.http.get('http://smktesting.herokuapp.com/api/products/').subscribe(
      data => {
        this.defaultData = JSON.parse(data['_body']);
      }
    );
  }

  public GetComments() {
    this.http.get('http://smktesting.herokuapp.com/api/reviews/' + this.productId).subscribe(
      data => {
        this.reviews = JSON.parse(data['_body']);
      }
    );
  }

  public Reviews(username: any, password: any): Observable<any> {
    let data = username + password;
    JSON.stringify(this.data);
    return this.http.post('http://smktesting.herokuapp.com/api/login/', data);
    /*    return this.http.post(
     'http://smktesting.herokuapp.com/api/login/',data,
     /!* {"username": "fdtgh",
     "password": "Lorem"} ,*!/
     {}
     )*/

  };
}
