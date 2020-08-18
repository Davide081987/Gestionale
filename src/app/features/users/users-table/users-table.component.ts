import { User } from './../../../shared/model/interface/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  @Input() users: User;
  @Output() deleteUser = new EventEmitter();
  @Output() detailUser = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.users;
    console.log(this.users);
  }

  userDelete(): void {
    this.deleteUser.emit();
  }

  userDetail(): void {
    this.detailUser.emit();
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'delete', 'details'];
}
