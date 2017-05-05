import {Component, Output, EventEmitter} from '@angular/core';
import {AuthService} from "../../../shared/serrvices/auth/auth.service"

@Component({
    selector: 'tipping-save',
    templateUrl: './save.component.html',
    styleUrls: ['./save.component.css']
})
export class SaveComponent {

    @Output()
    clear: EventEmitter<any> = new EventEmitter();

    @Output()
    save: EventEmitter<any> = new EventEmitter();

    constructor(public auth: AuthService) {
    }

    clearSelections() {
        this.clear.emit(null);
    }

    saveSelections() {
        this.save.emit(null);
    }

}
