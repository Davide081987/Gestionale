import { Observable } from 'rxjs';
import { User } from './../../../shared/model/interface/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  @Input() users: Observable<User[]>;
  @Output() deleteUser = new EventEmitter<User>();
  @Output() detailUser = new EventEmitter<User>();

  constructor() {}

  ngOnInit(): void {}

  userDelete(user: User): void {
    this.deleteUser.emit(user);
  }

  userDetail(user: User): void {
    this.detailUser.emit(user);
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'delete', 'details'];
}
