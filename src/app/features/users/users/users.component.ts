import { Observable } from 'rxjs';
import { UserService } from './../service/user.service';
import { User } from './../../../shared/model/interface/user';
import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  user: User;

  empty: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    telephone: +'',
    referent: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((userDelete) => userDelete !== user);
    this.userService.deleteUser(user).subscribe();
    alert('utente eliminato padre');
  }

  detailUser(user: User): void {
    this.user = user;
    console.log('detail parent ', user);
    alert('dettagli utente padre');
  }

  addUser(): void {
    this.user = this.empty;
  }
}
