import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service"

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {

    constructor(auth: AuthService) {
        auth.user;
    }



}
