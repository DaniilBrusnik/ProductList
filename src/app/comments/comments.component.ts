import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from "../services/all-data.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {
  reviews: any;
  product_id = 1;
  dateNow: any;
  loginData: any;

  constructor(private http: Http, private dataService: DataService,) {
    this.http.get('http://smktesting.herokuapp.com/api/reviews/' + this.product_id).subscribe(
      data => {
        this.reviews = JSON.parse(data['_body']);
      }
    );
  }


  addHero(newComment) {
    this.dateNow = new Date().toISOString();
    this.reviews.unshift({created_at: this.dateNow, text: newComment});
  }

  GetReviews(username, password) {
    this.dataService.Reviews(username, password);
  }

  ngOnInit() {
  }

}




