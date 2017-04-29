import {Component, Input, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {DataService} from '../services/all-data.service';

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
  password: any;
  username: any;
  newComment: any;
  private _id: any;
  @Input()
  set id(id: any) {
    this._id = id ;
    this.getComments();
  }
  get id(): any {
    return this._id;
  }

  constructor(private http: Http, private dataService: DataService) {
  }

  getComments() {
    if(this._id){
      this.http.get('http://smktesting.herokuapp.com/api/reviews/' + this._id).subscribe(
        data => {
          this.reviews = JSON.parse(data['_body']);
        }
      );
    }
  }

  addReviews() {
    this.dateNow = new Date().toISOString();
    this.reviews.unshift({created_at: this.dateNow, text: this.newComment});
  }

  GetReviews() {
    this.dataService.login(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
        }
      )
  }

  ngOnInit() {
  }

}




