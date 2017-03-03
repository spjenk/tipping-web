import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Sports, Sport} from "../shared/models/sports.data.models"

@Injectable()
export class MainEventService {

    private leagueUrl: string = 'https://api.ubet.com/sales/vmax/web/data/sports/league/';
    private mainEventUrl: string = 'https://api.ubet.com/sales/vmax/web/data/sports/mainevent/';


    constructor(private http: Http) {
    }

    getLeage(leagueId: number): Observable<Sport> {

        return this.http
            .get(this.leagueUrl + leagueId)
            .map((response: Response) => {
                return response.json();
            })
    }

    getMainEvents(mainEventId: number): Observable<Sports> {

        return this.http
            .get(this.mainEventUrl + mainEventId)
            .map((response: Response) => {
                return response.json();
            })
    }
}