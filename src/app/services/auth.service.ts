import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private logged: boolean = false;
  private loggedSub: Subject<boolean> = new Subject<boolean>();

  constructor(
    private afAuth: AngularFireAuth,
    private us: UserService,
    private router: Router
  ) {
    afAuth.onAuthStateChanged((user) => {
      if (user) {
        us.getCurrentUser(user?.uid);
        this.logged = true;
        this.loggedSub.next(this.logged);
      } else {
        us.getCurrentUser(null);
        this.logged = false;
        this.loggedSub.next(this.logged);
      }
    });
  }

  canActivate() {
    if (!this.logged) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  login() {
    this.afAuth
      .signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
      .then((res) => this.router.navigate(['/']));
  }

  logout() {
    this.afAuth.signOut();
    this.logged = false;
    this.loggedSub.next(this.logged);
  }

  isLogged() {
    return this.loggedSub.asObservable();
  }
}
