import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./user-list.component.html', 
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  editUser(user: User) {
    // To be implemented
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
  trackByUserId(index: number, user: User): string {
    return user.id;
  }
  
}