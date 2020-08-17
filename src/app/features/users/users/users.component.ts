import { USERS } from './../../../shared/model/mocked/mocked-users';
import { User } from './../../../shared/model/interface/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = USERS;

  constructor() {}

  ngOnInit(): void {}
}
