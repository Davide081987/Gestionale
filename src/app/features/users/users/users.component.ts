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
  user;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  deleteUser(user: User): void {
    alert('utente eliminato padre');
  }

  detailUser(user: User): void {
    alert('dettagli utente padre');
  }
}
