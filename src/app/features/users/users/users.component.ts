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
    console.log('detail parent ', user);
    alert('dettagli utente padre');
  }
}
