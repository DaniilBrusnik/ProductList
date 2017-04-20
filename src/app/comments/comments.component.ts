import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  reviews: any;
  product_id = 1;
  constructor(private http: Http) {
    this.http.get('http://smktesting.herokuapp.com/api/products/' + this.product_id).subscribe(
      data => {
        this.reviews = JSON.parse(data['_body']);
      }
    );
  }

  ngOnInit() {
  }

}