import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: "", redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'roles', component: RoleListComponent },
  { path: 'adduser', component: UserFormComponent },

  // Wildcard route for 404 page
  { path: '**', component: PagenotfoundComponent },
];
