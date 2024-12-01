import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from '../role-list/role-list.component';
import { UserListComponent } from '../user-list/user-list.component';
import { UserFormComponent } from "../user-form/user-form.component";
import { PopupModalComponent } from "../popup-modal/popup-modal.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RoleListComponent, UserListComponent, UserFormComponent, PopupModalComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
