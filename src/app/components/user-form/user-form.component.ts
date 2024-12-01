import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports:[FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {
  user = {
    username: '',
    email: '',
    status: 'active',
    roles: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const userData = {
      ...this.user,
      roles: this.user.roles.split(',').map(role => role.trim())  // Convert roles to an array
    };
  
    this.http.post('http://localhost:3000/users', userData).subscribe(
      response => {
        alert('User saved successfully!');
      },
      error => {
        console.error('Error saving user:', error);
        alert('An error occurred while saving the user.');
      }
    );
  }
  
}
