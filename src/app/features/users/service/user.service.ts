import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../../shared/model/interface/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`);
  }

  deleteUser(user: User): Observable<User> {
    alert('dato eliminato');
    let id = user.id;
    return this.httpClient.delete<User>(`${this.url}/${id}`);
  }

  addUser(user: User): Observable<User> {
    alert('dato aggiunto');
    return this.httpClient.post<User>(this.url, user, this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    alert('dato aggiornato');
    return this.httpClient.put<User>(this.url, user, this.httpOptions);
  }
}
