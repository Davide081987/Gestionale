import { Admin } from './../model/interface/admin';
import { ADMIN } from './../model/mocked/mocked-admin';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  admin = ADMIN;
  authentication = false;

  constructor(private router: Router) {}

  getAdmin(): Observable<Admin> {
    return of(this.admin);
  }

  login() {
    this.authentication = true;
    console.log(this.authentication, 'authlogin');
    this.router.navigate(['users']);
  }

  logout() {
    this.authentication = false;
    console.log(this.authentication, 'authlogin');
    this.router.navigate(['home']);
  }

  canActivate() {
    if (this.authentication) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
