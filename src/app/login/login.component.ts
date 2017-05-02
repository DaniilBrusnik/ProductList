import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {DataService} from '../services/all-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: any;
  username: any;

  constructor(private http: Http,
              private dataService: DataService,
              public router: Router) {
  }

  login() {
    this.dataService.login(this.username, this.password).subscribe(
      data => {
        this.dataService.authenticate();
        this.router.navigate(['/products']);
      },
      error => {
        error = JSON.parse(error._body);
      });

  }
  register() {
    this.dataService.register(this.username, this.password).subscribe(
      data => {
        this.dataService.authenticate();
        this.router.navigate(['/products']);
      },
      error => {
        error = JSON.parse(error._body);
      });

  }

  ngOnInit() {
  }

}
