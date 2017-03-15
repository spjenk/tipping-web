import { Component, OnInit } from '@angular/core';
import {SubEvent, SelectedOffer} from "../shared/models/sports.data.models"
import {MainEventService} from "./services/mainevent.service"

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  subEvents: SubEvent[] = [];
  selectedLeage: number = 48;
  selected: SelectedOffer[] = [];

  constructor(private mainEventService: MainEventService) {

  }

  ngOnInit() {
    this.handleLeageSelection(this.selectedLeage);
  }

  handleLeageSelection(leage: number) {
    this.selectedLeage = leage;
    this.subEvents = this.mainEventService.getHeadToHeadSubEventsForLeage(this.selectedLeage);
  }

  clearSelection(event: any) {
    this.selected = [];
  }

  saveSelection(event: any) {
    console.log("To be Implemented")
  }

  selection(selectedOffer: SelectedOffer) {
    this.selected.push(selectedOffer);
  }

  getMultiWinReturn(multiplier: number, league): number {
    let showMeTheMoney: number = 0;
    for (var i = 0; i < this.selected.length; i++) {
      showMeTheMoney += this.selected[i].WinReturn
    }
    return multiplier * showMeTheMoney
  }

}
