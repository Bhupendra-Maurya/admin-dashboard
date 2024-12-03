import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, NgIf],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  user = {
    username: '',
    email: '',
    status: 'active',
    roles: '',
    permissions: '',
  };
  successMessage = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    const userData = {
      ...this.user,
      roles: this.user.roles.split(',').map((role) => role.trim()), // Convert roles to an array
      permissions: this.user.permissions
        .split(',')
        .map((permission) => permission.trim()), // Convert permisions to an array
    };

    this.http.post('http://localhost:3000/users', userData).subscribe(
      (response) => {
        this.successMessage = 'User saved successfully!';
        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
        this.resetForm(); // Reset the form fields
      },
      (error) => {
        console.error('Error saving user:', error);
        this.successMessage = 'An error occurred while saving the user.';
      }
    );
  }

  resetForm() {
    this.user = {
      username: '',
      email: '',
      status: '',
      roles: '',
      permissions: '',
    };
  }
}
