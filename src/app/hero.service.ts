import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class HeroService {
  headers: Headers;
  options: RequestOptions;
   
  mySettings: any = { baseUrl: ''};

  public userData = {
    userName:'Niraj'
  };

  constructor(private http: Http) {
    this.mySettings.baseUrl = '';
    this.headers = new Headers({
      'Content-Type': 'application/json'
  });
  this.options = new RequestOptions({ headers: this.headers });

   }

   logOut() {
    //alert('Your access token is expired. Click OK to login.');
    alert('Server error!! Unable to process request.');
    //this.document.location.href = '/Account/SignOut';
}

postService(url: string, filterConditions: any): Observable<any> {

    let body = JSON.stringify(filterConditions);
    console.log(body);

    var result = this.http
        .post(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    return result;

}

deleteService(url: string): Observable<any> {
    var result = this.http
        .delete(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    return result;

}

patchService(url: string, userData: any) {
    let body = JSON.stringify(userData);

    var result = this.http
        .patch(url, body, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    return result;
}

getService(url: string): Observable<any> {
    console.log(url);

    var result = this.http
        .get(url, this.options)
        .map(this.extractData)
        .catch(this.handleError);
    return result;


}
private extractData(res: Response) {
    let body = res.json();
    //console.log(body);
    return body || {};
}

private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
}

}
