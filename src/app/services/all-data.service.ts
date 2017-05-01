import {Injectable, Input} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {
  defaultData: any;
  reviews: any;
  productId = 1;
  data: {};
  token: any;
  isAuthentificate = false;

  constructor(private http: Http) {
  }

  public getProducts(): Observable<any> {
    return this.http.get('http://smktesting.herokuapp.com/api/products/')
      .map(this.extractData)
      .catch(this.handleError);
  }

  public GetComments() {
    this.http.get('http://smktesting.herokuapp.com/api/reviews/' + this.productId).subscribe(
      data => {
        this.reviews = JSON.parse(data['_body']);
      }
    );
  }

  public register(username: any, password: any): Observable<any> {
    let data = {
      username: username,
      password: password
    };
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post('http://smktesting.herokuapp.com/api/register/', data)
      .map(
        (res: Response) => {
          let body = res.json();
          this.token = body.token;
          return body || {};
        }
      )
      .catch(this.handleError);
  };

  public addComment(rate: any, text: any, id: any): Observable<any> {
    let body = {
      rate: rate,
      text: text
    };
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    if (id) {
      return this.http.post('http://smktesting.herokuapp.com/api/reviews/' + id, body, {headers: headers})
        .map(this.extractData)
        .catch(this.handleError);
    }
  };

  public login(username: any, password: any): Observable<any> {
    let data = {
      username: username,
      password: password
    };

    return this.http.post('http://smktesting.herokuapp.com/api/login/', data)

      .map(
        (res: Response) => {
          let body = res.json();
          this.token = body.token;
          return body || {};
        }
      )
      .catch(this.handleError);
  };

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Token ' + this.token);
  }


  public isLoggined(): boolean {
    return this.isAuthentificate;
  };

  public authenticate(): void {
    this.isAuthentificate = true;
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
