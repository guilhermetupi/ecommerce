import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private currentUser: User | null = null;

  constructor(private db: AngularFirestore) {}

  getCurrentUser(uid: string | null) {
    if (uid) {
      this.db
        .collection('users')
        .doc(uid)
        .valueChanges()
        .subscribe((user: any) => (this.currentUser = user));
    } else {
      this.currentUser = null;
    }
  }
}
