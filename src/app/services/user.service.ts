// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { User } from '../models/user.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private users: User[] = [
//     {
//       id: '1',
//       username: 'admin',
//       email: 'admin@example.com',
//       isActive: true,
//       roles: ['admin']
//     }
//   ];

//   getUsers(): Observable<User[]> {
//     return of(this.users);
//   }

//   addUser(user: User): Observable<User> {
//     user.id = Date.now().toString();
//     this.users.push(user);
//     return of(user);
//   }

//   updateUser(user: User): Observable<User> {
//     const index = this.users.findIndex(u => u.id === user.id);
//     if (index !== -1) {
//       this.users[index] = user;
//     }
//     return of(user);
//   }

//   deleteUser(id: string): Observable<boolean> {
//     const index = this.users.findIndex(u => u.id === id);
//     if (index !== -1) {
//       this.users.splice(index, 1);
//       return of(true);
//     }
//     return of(false);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
