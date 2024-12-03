import { Component, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/user.model';
import { RolesPopupModalComponent } from '../roles-popup-modal/roles-popup-modal.component';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, RolesPopupModalComponent],
  templateUrl: './role-list.component.html',
})
export class RoleListComponent implements OnInit, OnChanges {
  roles: Role[] = [];
  selectedRole: Role | null = null; // Initialize role
  isModalOpen = false;

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.loadRoles();
  }

  ngOnChanges() {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  editRole(role: Role) {
    console.log(role);
    this.selectedRole = { ...role };
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveRole(updatedRole: Role) {
    this.roleService.updateRole(updatedRole).subscribe(() => {
      this.loadRoles();
      this.closeModal();
    });
  }

  deleteRole(id: string) {
    this.roleService.deleteRole(id).subscribe(() => {
      this.loadRoles();
    });
  }

  trackByRoleId(index: number, role: Role): string {
    return role.id;
  }
}
