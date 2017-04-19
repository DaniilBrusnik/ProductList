import { Component } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  defaultData: any;
  constructor(private http: Http) {
    this.http.get('http://smktesting.herokuapp.com/api/products/').subscribe(
      data => {
        this.defaultData = JSON.parse(data['_body']);
      }
    );
  }
}
