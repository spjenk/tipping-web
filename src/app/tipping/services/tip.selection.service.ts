import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {TipSelection} from "../../shared/models/sports.data.models"

@Injectable()
export class TipSelectionService {

  private selectionUrl: string = 'http://tippingselection-env.ap-southeast-2.elasticbeanstalk.com/selection/';

  constructor(private http: Http) {
  }

  getTipSelection(user: string, meeting: any): Observable<TipSelection> {
    return this.http
      .get(this.selectionUrl + "user/" + user + "/meeting/" + meeting)
      .map((response: Response) => {
        return response.json();
      })
  }
}

