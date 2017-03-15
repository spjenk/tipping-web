import { Component } from '@angular/core';
import {Auth} from "../../auth/auth.service"

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {

    fullName: string = "";

    constructor(auth: Auth) {
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