import {Component, OnInit} from '@angular/core';
import {SelectedOffer, Round} from "../shared/models/sports.data.models"
import {MainEventService} from "./services/mainevent.service"
import {AuthService} from "../shared/serrvices/auth/auth.service";
import {TipSelectionService} from "./services/tip.selection.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {

  readonly headToHead = 72;
  readonly open = "o";
  readonly match = "M";

  rounds: Round[] = [];
  selectedLeage: number = 48;
  selected: SelectedOffer[] = [];

  constructor(private mainEventService: MainEventService,
              private auth: AuthService,
              private tipSelectionService: TipSelectionService) {
  }

  ngOnInit() {
    this.handleLeageSelection(this.selectedLeage);
  }

  handleLeageSelection(leage: number) {
    this.rounds = [];
    this.selectedLeage = leage;
    this.getHeadToHeadSubEventsForLeage(this.selectedLeage);
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

  getHeadToHeadSubEventsForLeage(league: number): void {

    this.mainEventService.getLeage(league).subscribe((data: any) => {
      let leagues = data.Sport.Leagues;
      if (leagues !== null) {
        for (let meeting of leagues[0].Meetings) {
          //only interested in matches
          if (meeting.MatchRoundSeason == this.match) {
            for (let mainEvent of meeting.MainEvents) {
              this.mainEventService.getMainEvents(mainEvent.MainEventId).subscribe((data: any) => {
                for (let se of  data.MainEvent.SubEvents) {
                  //only interested in Head to Head Open Matches
                  if (se.BetTypeId == this.headToHead && se.Status == this.open) {
                    let i = this.rounds.findIndex(item => item.meetingId === meeting.MeetingId)
                    if (i >= 0) {
                      this.rounds[i].subEvents.push(se);
                    } else {
                      this.rounds.push(new Round(meeting.MeetingId, meeting.MeetingName, [se]))
                      this.getSelectedTips(meeting.MeetingId);
                    }
                  }
                }
              })
            }
          }
        }
      }
    })
  }

  getSelectedTips(meetingId: any) {
    if (this.auth.authenticated()) {
      let user: string = this.auth.getFormattedUserName();

      this.tipSelectionService.getTipSelection(user, meetingId).subscribe((data: any) => {
        if (!isNullOrUndefined(data)) {
          for (let selection of data.selections) {
            let selectedOffer = new SelectedOffer(meetingId, selection.subEventId, selection.offerId, 0.00);
            this.selected.push(selectedOffer);
          }
        }
      })
    }
  }
}
