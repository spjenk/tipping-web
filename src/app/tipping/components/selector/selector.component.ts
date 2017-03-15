import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-selector',
    templateUrl: './selector.component.html',
    styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

    @Output()
    update: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    leagueSelected(leage: number) {
        this.update.emit(leage);
    }

}
