import { User } from './../../../shared/model/interface/user';
import { Observable } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user: Observable<User>;
  @Output() updateUser = new EventEmitter<User>();
  @Output() addUser = new EventEmitter<User>();

  empty: Observable<User>;

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.user = this.empty;
  }

  userUpdate(user: User): void {
    this.updateUser.emit(user);
  }

  userAdd(user: User): void {
    this.addUser.emit(user);
  }
}
