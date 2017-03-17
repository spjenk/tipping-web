import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MainEventService} from "../../services/mainevent.service"
import {League, SubEvent, SelectedOffer, Round} from "../../../shared/models/sports.data.models"

@Component({
    selector: 'app-tipping-grid',
    templateUrl: './tipping-grid.component.html',
    styleUrls: ['./tipping-grid.component.css']
})
export class TippingGridComponent {

    @Input()
    rounds: Round[]

    @Input()
    selected: SelectedOffer[]

    @Output()
    selection: EventEmitter<any> = new EventEmitter();

    constructor(private mainEventService: MainEventService) {
        this.rounds = []
    }

    offerSelected(meetingId: number, subEventId: number, offerId: number, winReturn: number): void {
        let found: boolean = false
        for (var i = 0; i < this.selected.length; i++) {
            if (this.selected[i].SubEventId == subEventId) {
                found = true
                this.selected[i].OfferId = offerId
                this.selected[i].WinReturn = winReturn
            }
        }
        if (!found) {
            this.selection.emit(new SelectedOffer(meetingId, subEventId, offerId, winReturn));
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
}