import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service"

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {

    fullName: string = "";

    constructor(auth: AuthService) {
        auth.profileChange$.subscribe(
            authenticated => {
                if (this.fullName.length == 0 && authenticated) {
                    let profile = JSON.parse(localStorage.getItem('profile'));
                    if (profile != undefined) {
                        this.fullName = profile.name;
                    }
                }
                if (!authenticated) {
                    this.fullName = "";
                }
            });
    }

}
