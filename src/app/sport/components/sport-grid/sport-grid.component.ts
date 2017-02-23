import { Component, OnInit } from '@angular/core';
import {SportService} from "../../sports.service"
import {Sports, Sport} from "../../models/sports.data.models"

@Component({
    selector: 'app-sport-grid',
    templateUrl: './sport-grid.component.html',
    styleUrls: ['./sport-grid.component.css']
})
export class SportGridComponent implements OnInit {

    sport: Sport[]

    constructor(private sportService: SportService) {
        this.sport = [];
    }

    ngOnInit() {
        this.sportService.getSports().subscribe((data: Sports) => this.sport = data.Sports )
    }
}
