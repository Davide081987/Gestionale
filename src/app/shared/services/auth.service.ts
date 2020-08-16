import { Admin } from './../model/interface/admin';
import { ADMIN } from './../model/mocked/mocked-admin';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  admin = ADMIN;

  constructor() {}

  getAdmin(): Observable<Admin> {
    return of(this.admin);
  }
}
