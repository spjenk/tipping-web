import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

    @Output()
    update: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    leagueSelected(leage: number) {
        this.update.emit(leage);
    }

}
