import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UserPopupModalComponent } from '../user-popup-modal/user-popup-modal.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../search-bar/search-bar.component";  // Ensure FormsModule is imported

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserPopupModalComponent, FormsModule, SearchBarComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnChanges {
  users: User[] = [];
  filteredUsers: User[] = []; // For filtered results
  isModalOpen = false;
  selectedUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();  // Load users initially
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      this.loadUsers();
    }
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;  // Initialize filtered users
    });
  }

  // Search filter logic
  filterUsers(searchTerm: string) {
    if (!searchTerm) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.roles.some(role => role.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  }

  // Modal operations
  editUser(user: User) {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(() => {
      this.loadUsers();  // Refresh data
      this.closeModal();
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();  // Refresh data
    });
  }
}
