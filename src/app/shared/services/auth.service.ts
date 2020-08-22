import { Admin } from './../model/interface/admin';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  private url = 'api/admin';

  authentication = false;

  constructor(private router: Router, private httpClient: HttpClient) {}

  getAdmin(): Observable<Admin> {
    return this.httpClient.get<Admin>(this.url);
  }

  login(): void {
    this.authentication = true;
    console.log(this.authentication, 'authlogin');
    this.router.navigate(['users']);
  }

  logout(): void {
    this.authentication = false;
    console.log(this.authentication, 'authlogin');
    this.router.navigate(['home']);
  }

  canActivate(): boolean {
    if (this.authentication) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
