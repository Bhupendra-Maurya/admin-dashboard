import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { UserPopupModalComponent } from '../user-popup-modal/user-popup-modal.component';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../search-bar/search-bar.component'; // Ensure FormsModule is imported

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    UserPopupModalComponent,
    FormsModule,
    SearchBarComponent,
  ],
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnChanges {
  users: User[] = [];
  filteredUsers: User[] = []; // For filtered results
  isModalOpen = false;
  selectedUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers(); // Load users initially
  }

  ngOnChanges(changes: SimpleChanges) {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users.map((user) => ({
          ...user,
          roles: Array.isArray(user.roles) ? user.roles : [user.roles], // Force roles to be an array
          permissions: Array.isArray(user.permissions)
            ? user.permissions
            : [user.permissions], // Force permissions to be an array
        }));
        this.filteredUsers = this.users;
      },
      (error) => console.error('Error fetching users:', error)
    );
  }

  filterUsers(searchTerm: string) {
    console.log(this.filterUsers);
    if (!searchTerm) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(
        (user) =>
          user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.roles.some((role) =>
            role.toLowerCase().includes(searchTerm.toLowerCase())
          ) ||
          user.permissions.some((permission) =>
            permission.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  // updateUser(user: User) {
  //   this.userService.updateUser(user).subscribe(() => {
  //     this.loadUsers();
  //     this.closeModal();
  //   });
  // }

  updateUser(user: User) {
    const updatedUser = {
      ...user,
      roles: typeof user.roles === 'string' 
        ? (user.roles as string).split(',').map(role => role.trim()) 
        : user.roles,
      permissions: typeof user.permissions === 'string' 
        ? (user.permissions as string).split(',').map(permission => permission.trim()) 
        : user.permissions
    };
  
    this.userService.updateUser(updatedUser).subscribe(() => {
      this.loadUsers();
      this.closeModal();
    });
  }
  
  createUser(){}

  editUser(user: User) {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(
      () => this.loadUsers(),
      (error) => alert('Error deleting user')
    );
  }
}
