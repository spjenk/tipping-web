import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Injectable} from "@angular/core"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {TipSelection} from "../../shared/models/sports.data.models"

@Injectable()
export class TipSelectionService {

  private selectionUrl: string = 'http://tippingselection-env.ap-southeast-2.elasticbeanstalk.com/selection/';
  //private selectionUrl: string = 'http://localhost:8080/selection/';

  constructor(private http: Http) {
  }

  getTipSelection(user: string, meeting: any): Observable<TipSelection> {
    return this.http
      .get(this.selectionUrl + "user/" + user + "/meeting/" + meeting)
      .map((response: Response) => {
        return response.json();
      })
  }

  addTipSelection (body: Object): Observable<TipSelection> {
    let bodyString = JSON.stringify(body);
    console.log(bodyString);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http
      .post(this.selectionUrl, bodyString, options)
      .map((response: Response) => {
        console.log(response)
        return response.json();
      })
  }

}

