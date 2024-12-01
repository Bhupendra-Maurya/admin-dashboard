import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { PopupModalComponent } from '../popup-modal/popup-modal.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, PopupModalComponent],
  templateUrl: './user-list.component.html',
})
// export class UserListComponent implements OnInit, OnChanges {
//   users: User[] = [];

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   ngOnChanges(): void {
//     this.loadUsers();
//   }

//   loadUsers() {
//     this.userService.getUsers().subscribe((users) => {
//       this.users = users;
//     });
//   }

//   editUser(user: User) {
//     // To be implemented
//   }

//   deleteUser(id: string) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.loadUsers();
//     });
//   }
//   trackByUserId(index: number, user: User): string {
//     return user.id;
//   }
// }
export class UserListComponent implements OnInit, OnChanges {
  users: User[] = [];
  isModalOpen = false;
  selectedUser!: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnChanges(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  editUser(user: User) {
    this.selectedUser = { ...user };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(() => {
      this.loadUsers();
      this.closeModal();
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }
}
