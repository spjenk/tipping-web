import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Sports, Sport} from "./models/sports.data.models"

@Injectable()
export class SportService {

    private sportsUrl: string = 'http://api.ubet.com/sales/vmax/web/data/sports';

    constructor(private http: Http) {
    }

    getSports(): Observable<Sports> {

        return this.http
            .get(this.sportsUrl)
            .map((response: Response) => {
                return response.json();
            })
    }
}