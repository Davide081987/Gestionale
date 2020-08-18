import { User } from './../../../shared/model/interface/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit {
  @Input() users: User;

  constructor() {}

  ngOnInit(): void {
    this.users;
    console.log(this.users);
  }

  deleteUser(): void {
    alert('utente eliminato');
  }

  detailUser(): void {
    alert('dettagli utente');
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'delete', 'details'];
}
