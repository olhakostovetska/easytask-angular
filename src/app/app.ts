import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './task/tasks.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  users = DUMMY_USERS
  selectedUserId?:string;
  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }
  onSelectUser(userId: string) {
    this.selectedUserId = userId;
  }
}
