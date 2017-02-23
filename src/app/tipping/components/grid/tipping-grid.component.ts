import { Component, OnInit } from '@angular/core';
import {MainEventService} from "../../mainevent.service"
import {League, SubEvent} from "../../../shared/models/sports.data.models"

@Component({
    selector: 'app-tipping-grid',
    templateUrl: './tipping-grid.component.html',
    styleUrls: ['./tipping-grid.component.css']
})
export class TippingGridComponent implements OnInit {

    leages: League[]
    subEvents: SubEvent[]

    constructor(private mainEventService: MainEventService) {
        this.subEvents = []
    }

    ngOnInit() {
        this.mainEventService.getLeage(48).subscribe((data: any) => {
            this.leages = data.Sport.Leagues
            for (let meeting of this.leages[0].Meetings) {
                for (let mainEvent of meeting.MainEvents) {
                    this.mainEventService.getMainEvents(mainEvent.MainEventId).subscribe((data: any) => {
                        let subEvents: SubEvent[] = data.MainEvent.SubEvents
                        for (let subEvent of  subEvents) {
                            if (subEvent.BetTypeId == 72 && subEvent.Status == "o") {
                                this.subEvents.push(subEvent);
                            }
                        }
                    })
                }
            }
        })
    }
}
