import { HttpClient } from '@angular/common/http';
import { User } from './../../../shared/model/interface/user';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'api/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
}
