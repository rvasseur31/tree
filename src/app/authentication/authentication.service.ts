import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private currentUser: IUser | undefined = undefined;
  public currentUser$: BehaviorSubject<IUser | undefined> = new BehaviorSubject<IUser | undefined>(this.currentUser);

  constructor() {}

  getcurrentUser(): IUser | undefined {
    return this.currentUser;
  }

  login(email: string, password: string): IUser | undefined {
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
