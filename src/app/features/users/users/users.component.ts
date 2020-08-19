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

  empty: any = {
    name: '',
    email: '',
    password: '',
    telephone: +'',
    referent: '',
  };

  constructor(private userService: UserService) {}

  addFormCleaner(): void {
    this.user = this.empty;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  addUser(user: User): void {
    this.userService.addUser(user).subscribe();
  }

  detailUser(user: User): void {
    this.user = user;
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe();
  }

  deleteUser(user: User): void {
    this.users = this.users.filter((userDelete) => userDelete !== user);
    this.userService.deleteUser(user).subscribe();
  }
}
