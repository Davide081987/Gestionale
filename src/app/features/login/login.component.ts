import { AuthService } from './../../shared/services/auth.service';
import { Admin } from './../../shared/model/interface/admin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  admin: Admin;
  username: string;
  password: string;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    this.auth.getAdmin().subscribe((admin) => (this.admin = admin));
  }

  onSubmit(): void {
    if (
      this.admin.username === this.username &&
      this.admin.password === this.password
    ) {
      alert(`benvenuto ${this.admin.username}`);
      this.auth.login();
    } else {
      alert('Nome Utente o Password Errati');
    }
  }
}
