// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Role } from '../models/user.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleService {
//   private roles: Role[] = [
//     {
//       id: '1',
//       name: 'Admin',
//       permissions: [
//         { id: '1', name: 'READ', description: 'Can read data' },
//         { id: '2', name: 'WRITE', description: 'Can write data' },
//         { id: '3', name: 'DELETE', description: 'Can delete data' }
//       ]
//     }
//   ];

//   getRoles(): Observable<Role[]> {
//     return of(this.roles);
//   }

//   addRole(role: Role): Observable<Role> {
//     role.id = Date.now().toString();
//     this.roles.push(role);
//     return of(role);
//   }

//   updateRole(role: Role): Observable<Role> {
//     const index = this.roles.findIndex(r => r.id === role.id);
//     if (index !== -1) {
//       this.roles[index] = role;
//     }
//     return of(role);
//   }

//   deleteRole(id: string): Observable<boolean> {
//     const index = this.roles.findIndex(r => r.id === id);
//     if (index !== -1) {
//       this.roles.splice(index, 1);
//       return of(true);
//     }
//     return of(false);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = 'http://localhost:3000/roles';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.apiUrl);
  }

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(this.apiUrl, role);
  }

  updateRole(role: Role): Observable<Role> {
    return this.http.put<Role>(`${this.apiUrl}/${role.id}`, role);
  }

  deleteRole(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
