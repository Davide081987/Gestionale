import { AuthService } from './../../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    console.log(this.auth.authentication);
  }

  login() {
    this.auth.login();
    console.log(this.auth.authentication);
  }

  logout() {
    this.auth.logout();
    console.log(this.auth.authentication);
  }
}
