import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUser: User | undefined = undefined;
  public currentUser$: BehaviorSubject<User | undefined> = new BehaviorSubject<
    User | undefined
  >(this.currentUser);

  constructor() {}

  getcurrentUser(): User | undefined {
    return this.currentUser;
  }

  login(email: string, password: string): User | undefined {
    const user = undefined;

    console.log('User : ', user);
    this.currentUser = user;
    this.currentUser$.next(this.currentUser);
    return user;
  }

  logout() {
    this.currentUser$.next(undefined);
  }
}
