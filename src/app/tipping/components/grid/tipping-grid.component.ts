import {Component, Input} from '@angular/core';
import {MainEventService} from "../../services/mainevent.service"
import {League, SubEvent, SelectedOffer} from "../../../shared/models/sports.data.models"

@Component({
    selector: 'app-tipping-grid',
    templateUrl: './tipping-grid.component.html',
    styleUrls: ['./tipping-grid.component.css']
})
export class TippingGridComponent {

    @Input()
    subEvents: SubEvent[]

    selected: SelectedOffer[]

    constructor(private mainEventService: MainEventService) {
        this.subEvents = []
        this.selected = []
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

    getMultiWinReturn(multiplier: number, league): number {
        let showMeTheMoney: number = 0;
        for (var i = 0; i < this.selected.length; i++) {
            showMeTheMoney += this.selected[i].WinReturn
        }
        return multiplier * showMeTheMoney
    }
}