import { Observable } from 'rxjs';
import { User } from '../../../shared/model/interface/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() user: Observable<User>;

  empty: Observable<User>;

  constructor() {}

  ngOnInit(): void {}

  close(): void {
    this.user = this.empty;
  }
}
