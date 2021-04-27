import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user!: User;

  constructor(private accountService: AccountService) {
      this.accountService.user.subscribe(user => {
        console.log(user)
        return this.user = user;
      });
  }

  logout() {
      this.accountService.logout();
  }

  isDisconnected() {
    return !this.isConnected();
  }

  isConnected() {
    if (this.user != null) {
      return true;
    }
    return false;
  }
}
