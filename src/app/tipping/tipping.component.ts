import { Component, OnInit } from '@angular/core';
import {SubEvent} from "../shared/models/sports.data.models"
import {MainEventService} from "./services/mainevent.service"

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  subEvents: SubEvent[] = [];

  constructor(private mainEventService: MainEventService) {

  }

  ngOnInit() {
    this.handleLeageSelection(48);
  }

  handleLeageSelection(leage: number) {
    this.subEvents = this.mainEventService.getHeadToHeadSubEventsForLeage(leage);
  }

}
