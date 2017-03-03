import {Http, Response} from '@angular/http';
import {Injectable} from "@angular/core"

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Sports, Sport, SubEvent} from "../../shared/models/sports.data.models"
import {isNullOrUndefined} from "util"

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

    getHeadToHeadSubEventsForLeage(league: number): SubEvent[] {

        let subEvents: SubEvent[] = [];

        this.getLeage(league).subscribe((data: any) => {
            let leagues = data.Sport.Leagues;
            if (leagues !== null) {
                for (let meeting of leagues[0].Meetings) {
                    for (let mainEvent of meeting.MainEvents) {
                        this.getMainEvents(mainEvent.MainEventId).subscribe((data: any) => {
                            for (let se of  data.MainEvent.SubEvents) {
                                if (se.BetTypeId == 72 && se.Status == "o") {
                                    subEvents.push(se);
                                }
                            }
                        })
                    }
                }
            }
        })
        return subEvents;
    }
}