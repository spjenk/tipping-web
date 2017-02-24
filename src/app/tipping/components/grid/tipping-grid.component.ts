import {Component, OnInit} from '@angular/core';
import {MainEventService} from "../../mainevent.service"
import {League, SubEvent, SelectedOffer} from "../../../shared/models/sports.data.models"

@Component({
    selector: 'app-tipping-grid',
    templateUrl: './tipping-grid.component.html',
    styleUrls: ['./tipping-grid.component.css']
})
export class TippingGridComponent implements OnInit {

    leages: League[]
    subEvents: SubEvent[]
    selected: SelectedOffer[]

    constructor(private mainEventService: MainEventService) {
        this.subEvents = []
        this.selected = []
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

    offerSelected(subEventId: number, offerId: number, winReturn: number): void {
        let found: boolean = false
        for (var i = 0; i < this.selected.length; i++) {
            if (this.selected[i].SubEventId == subEventId) {
                found = true
                this.selected[i].OfferId = offerId
                this.selected[i].WinReturn = winReturn
            }
        }
        if (!found) {
            this.selected.push(new SelectedOffer(subEventId, offerId, winReturn))
        }
    }

    isSelected(subEventId: number, offerId: number): boolean {
        for (var i = 0; i < this.selected.length; i++) {
            if (this.selected[i].OfferId == offerId) {
                return true
            }
        }
        return false
    }

    getMultiWinReturn(multiplier: number): number {
        let showMeTheMoney: number = 0;
        for (var i = 0; i < this.selected.length; i++) {
            showMeTheMoney += this.selected[i].WinReturn
        }
        return multiplier * showMeTheMoney
    }
}