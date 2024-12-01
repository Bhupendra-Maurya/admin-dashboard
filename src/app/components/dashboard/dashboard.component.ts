import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from '../role-list/role-list.component';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RoleListComponent, UserListComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
