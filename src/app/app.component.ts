import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isLogged().subscribe((logged) => {
      this.isLogged = logged;
    });
  }

  logout() {
    this.auth.logout();
  }
}
