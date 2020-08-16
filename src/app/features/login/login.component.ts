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

  userLog: string;
  passwordLog: string;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getAdmin();
  }

  getAdmin(): void {
    this.auth.getAdmin().subscribe((admin) => (this.admin = admin));
  }

  onSubmit(): void {
    if (
      this.admin.username === this.userLog &&
      this.admin.password === this.passwordLog
    ) {
      alert(`benvenuto ${this.admin.username}`);
      /* this.user[0].authentication = true;*/
    } else {
      alert('Nome Utente o Password Errati');
    }
  }
}
